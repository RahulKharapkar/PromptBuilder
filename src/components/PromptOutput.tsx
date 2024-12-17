import React from 'react';
import { Copy, CheckCircle } from 'lucide-react';

interface Props {
  prompt: string;
}

export function PromptOutput({ prompt }: Props) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!prompt) return null;

  return (
    <div className="mt-8 slide-in">
      <div className="p-6 rounded-lg bg-white/10 backdrop-blur-lg border-2 border-white/20
                    transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-white">Generated Prompt</h3>
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20
                     backdrop-blur-lg border-2 border-white/20
                     transition-all duration-200 group"
            title={copied ? 'Copied!' : 'Copy to clipboard'}
          >
            {copied ? (
              <CheckCircle className="w-5 h-5 text-green-400 animate-float" />
            ) : (
              <Copy className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
        <p className="text-white/90 whitespace-pre-wrap leading-relaxed">
          {prompt}
        </p>
        {copied && (
          <div className="mt-2 text-sm text-green-400 slide-in">
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}