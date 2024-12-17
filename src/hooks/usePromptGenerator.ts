import { useState } from 'react';
import { generatePromptRequest } from '../services/api';
import type { PromptForm } from '../types';

export function usePromptGenerator() {
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generatePrompt = async (formData: PromptForm) => {
    setIsLoading(true);
    setError('');

    try {
      const prompt = await generatePromptRequest(formData);
      setGeneratedPrompt(prompt);
    } catch (err) {
      setError('Failed to generate prompt. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generatedPrompt,
    isLoading,
    error,
    generatePrompt
  };
}