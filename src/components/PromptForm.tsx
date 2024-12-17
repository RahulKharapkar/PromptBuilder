import React from 'react';
import { Wand2 } from 'lucide-react';
import type { PromptForm as PromptFormType } from '../types';

interface Props {
  onSubmit: (data: PromptFormType) => void;
  isLoading: boolean;
}

export function PromptForm({ onSubmit, isLoading }: Props) {
  const [formData, setFormData] = React.useState<PromptFormType>({
    topic: '',
    purpose: '',
    tone: 'Neutral',
    length: 'Medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const element = e.target;
    setFormData(prev => ({
      ...prev,
      [element.name]: element.value
    }));
    
    // Add ripple effect
    // const ripple = document.createElement('div');
    // ripple.className = 'absolute inset-0 bg-white/20 rounded-lg transform scale-0 opacity-0 transition-all duration-500';
    // element.parentElement?.appendChild(ripple);
    // requestAnimationFrame(() => {
    //   ripple.classList.add('scale-100', 'opacity-100');
    //   setTimeout(() => ripple.remove(), 500);
    // });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative group">
          <label htmlFor="topic" className="block text-sm font-medium text-white/90 mb-1">
            Topic
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            required
            value={formData.topic}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20
                     backdrop-blur-lg text-white placeholder-white/50
                     focus:outline-none focus:border-white/40 focus:ring-0
                     transition-all duration-200"
            placeholder="Enter your topic"
          />
        </div>

        <div className="relative group">
          <label htmlFor="purpose" className="block text-sm font-medium text-white/90 mb-1">
            Purpose
          </label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            required
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20
                     backdrop-blur-lg text-white placeholder-white/50
                     focus:outline-none focus:border-white/40 focus:ring-0
                     transition-all duration-200"
            placeholder="What's the purpose of this prompt?"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative group">
            <label htmlFor="tone" className="block text-sm font-medium text-white/90 mb-1">
              Tone
            </label>
            <select
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20
                       backdrop-blur-lg text-white
                       focus:outline-none focus:border-white/40 focus:ring-0
                       transition-all duration-200"
            >
              <option value="Neutral" className="text-black/50">Neutral</option>
              <option value="Formal" className="text-black/50">Formal</option>
              <option value="Friendly" className="text-black/50">Friendly</option>
              <option value="Persuasive" className="text-black/50">Persuasive</option>
            </select>
          </div>

          <div className="relative group">
            <label htmlFor="length" className="block text-sm font-medium text-white/90 mb-1">
              Length
            </label>
            <select
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20
                       backdrop-blur-lg text-white
                       focus:outline-none focus:border-white/40 focus:ring-0
                       transition-all duration-200"
            >
              <option value="Short" className="text-black/50">Short</option>
              <option value="Medium"className="text-black/50">Medium</option>
              <option value="Long"className="text-black/50">Long</option>
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-4 text-white bg-white/20 rounded-lg
                 backdrop-blur-lg border-2 border-white/20
                 hover:bg-white/30 hover:scale-[1.02]
                 active:scale-[0.98]
                 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-all duration-200 
                 flex items-center justify-center gap-3"
      >
        <Wand2 className={`w-6 h-6 ${isLoading ? 'animate-spin' : 'animate-float'}`} />
        <span className="text-lg font-medium">
          {isLoading ? 'Generating...' : 'Generate Prompt'}
        </span>
      </button>
    </form>
  );
}