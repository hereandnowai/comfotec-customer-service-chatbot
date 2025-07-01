
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChatMessage, CustomSpeechRecognition } from './types';
import { LANGUAGES, DEFAULT_LANGUAGE_CODE, INITIAL_ASSISTANT_MESSAGE, PREDEFINED_QUESTIONS } from './constants';
import MessageBubble from './components/MessageBubble';
import LanguageSelector from './components/LanguageSelector';
import LoadingSpinner from './components/LoadingSpinner';
import CustomQuestions from './components/CustomQuestions';
import { generateComfotecResponse } from './services/GeminiService';

// Attempt to get SpeechRecognition API
const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
let recognition: CustomSpeechRecognition | null = null;
if (SpeechRecognition) {
  recognition = new SpeechRecognition() as CustomSpeechRecognition;
} else {
  console.warn("SpeechRecognition API not supported in this browser.");
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_ASSISTANT_MESSAGE()]);
  const [userInput, setUserInput] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>(DEFAULT_LANGUAGE_CODE);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [showFaqButtons, setShowFaqButtons] = useState<boolean>(false); // New state for FAQ visibility

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (recognition) {
      recognition.lang = selectedLanguage;
      recognition.continuous = false; 
      recognition.interimResults = true; 

      recognition.onstart = () => {
        setIsRecording(true);
        setMicError(null);
        console.log("Speech recognition started");
      };

      recognition.onresult = (event: any) => { 
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        
        setUserInput(prev => finalTranscript ? finalTranscript : prev + interimTranscript);

        if (finalTranscript) {
          console.log("Final transcript:", finalTranscript);
          handleSendMessage(finalTranscript);
        }
      };

      recognition.onerror = (event: any) => { 
        console.error("Speech recognition error", event.error);
        let errorMsg = "Speech recognition error: " + event.error;
        switch (event.error) {
            case 'no-speech':
                errorMsg = "No speech detected. Please try again.";
                break;
            case 'audio-capture':
                errorMsg = "No microphone found. Ensure a microphone is connected and enabled.";
                break;
            case 'not-allowed':
            case 'service-not-allowed': 
                errorMsg = "Microphone access denied. Please enable microphone permissions in your browser settings.";
                break;
            case 'network':
                errorMsg = "A network error occurred during speech recognition. Please check your connection.";
                break;
            case 'aborted':
                errorMsg = "Speech recognition was aborted. Please try again.";
                break;
            case 'language-not-supported':
                 errorMsg = "The selected language is not supported for speech recognition by your browser.";
                 break;
            default:
                errorMsg = `An unknown microphone error occurred: ${event.error}`;
        }
        setMicError(errorMsg);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
        console.log("Speech recognition ended");
      };
    }
  }, [selectedLanguage]);

  const addMessage = (text: string, sender: 'user' | 'assistant' | 'system', language?: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString() + Math.random().toString(),
      text,
      sender,
      timestamp: new Date(),
      language: language || selectedLanguage,
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const handleSendMessage = useCallback(async (textToSend?: string) => {
    const query = (textToSend || userInput).trim();
    if (!query) return;

    addMessage(query, 'user', selectedLanguage);
    setUserInput(''); 
    setIsLoading(true);
    setMicError(null);

    try {
      const currentMessagesSnapshot = [...messages, {id: 'temp-user', text: query, sender: 'user' as const, timestamp: new Date(), language: selectedLanguage}];
      const assistantResponse = await generateComfotecResponse(query, currentMessagesSnapshot, selectedLanguage);
      addMessage(assistantResponse, 'assistant', selectedLanguage);
    } catch (error) {
      console.error("Error getting response:", error);
      addMessage("I'm having trouble connecting right now. Please try again later.", 'assistant', selectedLanguage);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, selectedLanguage, messages]); 

  const handleCustomQuestionClick = (question: string) => {
    if (isLoading || isRecording) return;
    setUserInput(''); 
    handleSendMessage(question);
  };

  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    const langName = LANGUAGES.find(l => l.code === langCode)?.name || 'the selected language';
    const systemMessageText = `Language changed to ${langName}.`;
    setMessages(prev => [...prev, {
        id: 'lang-change-' + Date.now(),
        text: systemMessageText,
        sender: 'system',
        timestamp: new Date()
    }]);
  };
  
  const toggleRecording = () => {
    if (!recognition) {
      setMicError("Speech recognition is not supported by your browser.");
      return;
    }
    if (isRecording) {
      recognition.stop();
    } else {
      try {
        setMicError(null); 
        setUserInput(''); 
        recognition.start();
      } catch (e) {
         console.error("Error starting recognition:", e);
         setMicError("Could not start microphone. Ensure it's not in use and permissions are granted.");
         setIsRecording(false); 
      }
    }
  };

  const toggleFaqVisibility = () => {
    setShowFaqButtons(prev => !prev);
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto bg-white shadow-xl">
      <header className="bg-[#a00000] text-white p-3 border-b border-[#800000]">
        <div className="container mx-auto flex items-center space-x-3">
          <h1 className="text-xl font-semibold tracking-tight">ComfoBot</h1>
        </div>
      </header>

      <main className="flex-grow p-4 space-y-4 overflow-y-auto bg-gray-100">
        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isLoading && messages[messages.length -1]?.sender === 'user' && (
          <div className="self-start flex items-center space-x-2">
            <div className="bg-white text-black border border-gray-200 p-3 my-2 rounded-xl shadow-md max-w-lg flex items-center">
                <LoadingSpinner />
                <span className="ml-2 text-sm italic text-gray-700">ComfoBot is typing...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
        {micError && (
          <div className="text-[#a00000] text-sm p-2 bg-[#FDDCE0] rounded-md text-center my-2">{micError}</div>
        )}
      </main>

      <footer className="p-4 bg-white border-t border-gray-200">
        <div className="mb-3"> 
          <button
            onClick={toggleFaqVisibility}
            disabled={isLoading || isRecording}
            className="mb-2 w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out
                       bg-[#FEECEE] text-[#a00000] border border-[#F8B0B9] hover:bg-[#FDDCE0]
                       focus:outline-none focus:ring-2 focus:ring-[#a00000] focus:border-[#a00000]
                       disabled:opacity-60 disabled:cursor-not-allowed flex justify-between items-center"
            aria-expanded={showFaqButtons}
            aria-controls="faq-questions-container"
          >
            <span>{showFaqButtons ? 'Hide Quick Questions' : 'Show Quick Questions'}</span>
            <i className={`fas ${showFaqButtons ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
          {showFaqButtons && (
            <div id="faq-questions-container">
              <CustomQuestions 
                  questions={PREDEFINED_QUESTIONS} 
                  onQuestionClick={handleCustomQuestionClick}
                  disabled={isLoading || isRecording}
              />
            </div>
          )}
        </div>
        
        <div className="flex items-end space-x-2">
          <div className="flex-none w-auto">
            <LanguageSelector 
              selectedLanguage={selectedLanguage} 
              onLanguageChange={handleLanguageChange}
              disabled={isLoading || isRecording}
            />
          </div>
          <div className="flex-grow flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && !isRecording && handleSendMessage()}
              placeholder="Type your message..."
              disabled={isLoading || isRecording}
              className="flex-grow p-3 bg-[#FEECEE] text-black placeholder-[#E57373] border border-[#F8B0B9] rounded-lg focus:ring-2 focus:ring-[#a00000] focus:border-[#a00000] outline-none transition duration-150 ease-in-out"
              aria-label="Type your message"
            />
            {SpeechRecognition && (
              <button
                onClick={toggleRecording}
                disabled={isLoading} 
                className={`p-3 rounded-lg border transition-colors duration-150 ease-in-out
                  ${isRecording 
                    ? 'bg-[#a00000] text-white animate-pulse border-[#a00000]' 
                    : 'bg-[#FEECEE] text-[#a00000] border-[#F8B0B9] hover:bg-[#FDDCE0]'}
                  ${isLoading && !isRecording ? 'opacity-70' : ''}`}
                title={isRecording ? "Stop recording" : "Start voice input"}
                aria-label={isRecording ? "Stop voice input" : "Start voice input"}
              >
                <i className={`fas ${isRecording ? 'fa-stop-circle' : 'fa-microphone'}`}></i>
              </button>
            )}
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || isRecording || !userInput.trim()}
              className="bg-[#FEECEE] text-[#a00000] border border-[#F8B0B9] hover:bg-[#FDDCE0] p-3 rounded-lg transition-colors duration-150 ease-in-out disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-200 disabled:cursor-not-allowed"
              title="Send message"
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <div className="text-xs text-gray-500 text-center mt-4 pt-4 border-t border-gray-200">
          <p>
            <span className="font-semibold">HERE AND NOW AI</span> - {' '}
            <a href="https://hereandnowai.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Artificial Intelligence Research Institute
            </a>
            {' | '}Email: <a href="mailto:info@hereandnowai.com" className="hover:underline">info@hereandnowai.com</a>
            {' | '}Mobile: +91 996 296 1000
          </p>
          <p className="italic">
            "{'designed with passion for innovation'}"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
