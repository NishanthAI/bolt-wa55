import React from 'react';
import LanguageModelPlayground from './components/LanguageModelPlayground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">LM Playground</h1>
          <p className="text-gray-600">Experiment with language models in a simple interface</p>
        </header>
        <LanguageModelPlayground />
      </div>
    </div>
  );
}

export default App;