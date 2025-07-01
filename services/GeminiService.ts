
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage, LanguageOption } from '../types';
import { getSystemPrompt, GEMINI_MODEL_NAME, LANGUAGES, MAX_CHAT_HISTORY_FOR_CONTEXT } from '../constants';

// Ensure API_KEY is available. In a real app, this would be handled by environment variables.
// For this environment, we assume process.env.API_KEY is set.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY for Gemini is not set. Please ensure process.env.API_KEY is configured.");
  // Potentially throw an error or handle this state in the UI
}

const ai = new GoogleGenAI({ apiKey: API_KEY! }); // Use non-null assertion as we'd handle missing key elsewhere

export const generateComfotecResponse = async (
  userQuery: string,
  chatHistory: ChatMessage[],
  selectedLanguageCode: string
): Promise<string> => {
  if (!API_KEY) {
    return "Error: API Key not configured. Please contact support.";
  }

  const currentLanguage = LANGUAGES.find(lang => lang.code === selectedLanguageCode) || LANGUAGES[0];
  const systemInstruction = getSystemPrompt(currentLanguage.geminiLangCode, userQuery, chatHistory.slice(-MAX_CHAT_HISTORY_FOR_CONTEXT));
  
  // Combine user query with chat history for the 'contents' part,
  // or structure as multi-turn if API supports it well via system prompt.
  // For simplicity, system prompt handles history and current query instruction.
  // The main 'contents' will be the user's latest query.
  // The model `gemini-2.5-flash-preview-04-17` should be able to process the user query in the context of the system instruction that contains history.

  try {
    console.log("Sending to Gemini with language:", currentLanguage.geminiLangCode);
    console.log("System instruction (first 100 chars):", systemInstruction.substring(0,100) + "...");
    console.log("User query for contents:", userQuery);

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_NAME,
      contents: userQuery, // The user's direct current query
      config: {
        systemInstruction: systemInstruction,
        // Optional: Add other config like temperature, topK, topP if needed
        // temperature: 0.7, 
      }
    });
    
    const text = response.text;
    if (text) {
      return text.trim();
    } else {
      console.error("Gemini API returned no text.", response);
      return "I'm sorry, I couldn't generate a response at this moment. Please try again.";
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    let errorMessage = "An error occurred while trying to get a response. Please try again later.";
    if (error instanceof Error) {
        // Basic check for common API key related errors (this is a guess, actual error messages may vary)
        if (error.message.toLowerCase().includes("api key not valid")) {
            errorMessage = "There seems to be an issue with the API configuration. Please contact support.";
        } else if (error.message.toLowerCase().includes("quota") || error.message.toLowerCase().includes("rate limit")) {
            errorMessage = "I'm experiencing high demand right now. Please try again in a few moments.";
        }
    }
    return errorMessage;
  }
};
