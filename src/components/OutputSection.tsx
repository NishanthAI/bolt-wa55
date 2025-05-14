import React from 'react';
import { formatOutput } from '../utils/formatOutput';

interface OutputSectionProps {
  output: string;
}

const OutputSection: React.FC<OutputSectionProps> = ({ output }) => {
  const formattedOutput = formatOutput(output);
  
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-lg font-medium text-gray-700">Output</h2>
      <div 
        className="p-4 bg-gray-50 border border-gray-200 rounded-lg min-h-[120px] font-mono text-gray-800 whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: formattedOutput }}
      />
    </div>
  );
};

export default OutputSection;