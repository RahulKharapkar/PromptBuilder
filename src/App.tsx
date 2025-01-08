import React from 'react';import { Sparkles, Wand2 } from 'lucide-react';
import { PromptForm } from './components/PromptForm';
import { PromptOutput } from './components/PromptOutput';
import { usePromptGenerator } from './hooks/usePromptGenerator';

export default function App() {
  const { generatedPrompt, isLoading, error, generatePrompt } = usePromptGenerator();

  return (
    <div className="min-h-screen gradient-bg py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-1/4 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 -left-16 w-48 h-48 bg-white/10 rounded-full blur-xl" />
      </div>

      <div className="max-w-2xl mx-auto relative">
        <div className="text-center mb-12 slide-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-white animate-float" />
            <h1 className="text-5xl font-bold text-white">Prompt Generator</h1>
          </div>
          <p className="text-white/90 text-lg">
          Create spot-on prompts effortlessly and get the best results from your LLMs with our AI-powered generator.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl
                    shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.1)]
                    transition-all duration-300 hover:shadow-[12px_12px_20px_rgba(0,0,0,0.25),-12px_-12px_20px_rgba(255,255,255,0.1)]
                    slide-in">
          <PromptForm onSubmit={generatePrompt} isLoading={isLoading} />
          
          {error && (
            <div className="mt-4 p-4 bg-red-500/10 backdrop-blur-lg text-white rounded-lg slide-in">
              {error}
            </div>
          )}

          <PromptOutput prompt={generatedPrompt} />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/60 text-sm slide-in">
          Powered by AI • Made with ❤️
        </div>
      </div>
    </div>
  );
}