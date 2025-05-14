import React from 'react';
import { Send } from 'lucide-react';

interface InputSectionProps {
  input: string;
  setInput: (input: string) => void;
  onProcess: () => void;
  isProcessing: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({ 
  input, 
  setInput, 
  onProcess,
  isProcessing
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      onProcess();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-700">Input</h2>
        <div className="text-sm text-gray-500">
          {input.length} characters {input.length > 0 && `(Ctrl+Enter to submit)`}
        </div>
      </div>
      
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your prompt here..."
          className="w-full min-h-[120px] p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y transition-all duration-200 font-mono text-gray-800"
          disabled={isProcessing}
        />
        
        <button
          onClick={onProcess}
          disabled={!input.trim() || isProcessing}
          className={`absolute bottom-4 right-4 p-2 rounded-full transition-all duration-200 ${
            input.trim() && !isProcessing
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="Process input"
        >
          {isProcessing ? (
            <div className="w-5 h-5 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          ) : (
            <Send size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputSection;