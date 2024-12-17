import { API_BASE_URL, API_ENDPOINTS } from '../config/api';
import type { PromptForm, ApiResponse } from '../types';

export async function generatePromptRequest(formData: PromptForm): Promise<string> {
  const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.GENERATE_PROMPT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      stream: false,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates concise and effective prompts.'
        },
        {
          role: 'user',
          content: `Generate a ${formData.length.toLowerCase()} prompt about ${formData.topic} 
                   with the purpose of ${formData.purpose} using a ${formData.tone.toLowerCase()} tone.`
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error('Failed to generate prompt');
  }

  const data: ApiResponse = await response.json();
  return data.choices[0].message.content;
}