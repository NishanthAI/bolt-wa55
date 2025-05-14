import React, { useState } from 'react';
import InputSection from './InputSection';
import OutputSection from './OutputSection';
import { processWithLanguageModel } from '../utils/modelProcessing';

const LanguageModelPlayground: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = async () => {
    if (!input.trim()) return;
    
    setIsProcessing(true);
    try {
      const result = await processWithLanguageModel(input);
      setOutput(result);
    } catch (error) {
      setOutput('An error occurred during processing.');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <div className="p-6">
        <InputSection 
          input={input} 
          setInput={setInput} 
          onProcess={handleProcess}
          isProcessing={isProcessing}
        />
        
        {output && (
          <>
            <div className="my-6 border-t border-gray-200"></div>
            <OutputSection output={output} />
          </>
        )}
      </div>
    </div>
  );
};

export default LanguageModelPlayground;