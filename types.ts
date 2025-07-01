
export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant' | 'system';
  timestamp: Date;
  language?: string; 
}

export interface LanguageOption {
  code: string; // e.g., 'en-US'
  name: string; // e.g., 'English'
  geminiLangCode: string; // e.g., 'English' for the prompt
}

// For SpeechRecognition API (simplified)
export interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
  // Add other properties if needed
}

export interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

export interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
  length: number;
}

export interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

export interface CustomSpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: Event) => void; // Simplified, can be more specific
  onstart: () => void;
  onend: () => void;
  onaudiostart: () => void;
  onaudioend: () => void;
  onspeechstart: () => void;
  onspeechend: () => void;
}
