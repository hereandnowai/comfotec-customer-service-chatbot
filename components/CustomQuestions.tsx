
import React from 'react';

interface CustomQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
  disabled?: boolean;
}

const CustomQuestions: React.FC<CustomQuestionsProps> = ({ questions, onQuestionClick, disabled }) => {
  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-2 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {questions.map((question, index) => (
        <button
          key={index}
          onClick={() => onQuestionClick(question)}
          disabled={disabled}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 ease-in-out
                      bg-white text-[#a00000] border border-[#a00000] hover:bg-[#FEECEE]
                      focus:outline-none focus:ring-2 focus:ring-[#a00000] focus:border-[#a00000]
                      disabled:opacity-60 disabled:cursor-not-allowed flex-shrink-0`}
          title={`Ask: "${question}"`}
        >
          {question}
        </button>
      ))}
    </div>
  );
};

export default CustomQuestions;
