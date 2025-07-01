
import React from 'react';
import { ChatMessage } from '../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';

  const bubbleClasses = isUser
    ? 'bg-[#a00000] text-white self-end' // User message
    : isSystem
    ? 'bg-gray-200 text-black self-center text-sm italic' // System message
    : 'bg-white text-black border border-gray-200 self-start'; // Assistant message
  
  const textAlignClass = message.language === 'ar-SA' && !isSystem ? 'text-right' : 'text-left';
  const directionClass = message.language === 'ar-SA' && !isSystem ? 'rtl' : 'ltr';

  if (isSystem) {
    return (
      <div className={`p-2 my-1 mx-auto rounded-lg max-w-xs text-xs ${bubbleClasses}`}>
        {message.text}
      </div>
    );
  }

  return (
    <div
      className={`p-3 my-2 rounded-xl shadow-md max-w-lg ${bubbleClasses} ${textAlignClass}`}
      dir={directionClass}
    >
      <p className="whitespace-pre-wrap">{message.text}</p>
      <p className={`text-xs mt-1 ${isUser ? 'text-white/70' : 'text-gray-500'} ${isUser ? 'text-right' : 'text-left'}`}>
        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
    </div>
  );
};

export default MessageBubble;
