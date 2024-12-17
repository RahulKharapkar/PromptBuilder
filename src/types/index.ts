export type Tone = 'Neutral' | 'Formal' | 'Friendly' | 'Persuasive';
export type Length = 'Short' | 'Medium' | 'Long';

export interface PromptForm {
  topic: string;
  purpose: string;
  tone: Tone;
  length: Length;
}

export interface ApiResponse {
  id: string;
  model: string;
  created: number;
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
}