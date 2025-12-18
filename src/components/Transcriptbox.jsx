import { useState } from "react";
import { copyToClipboard } from "../services/copyToClipboard";

export default function Transcriptbox({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (!success) return;

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-gray-600 uppercase">
          Transcription
        </span>

        {text && (
          <button
            onClick={handleCopy}
            className={`
              text-xs px-3 py-1 rounded-full border
              transition-all duration-200
              ${
                copied
                  ? "bg-green-50 border-green-400 text-green-600"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        )}
      </div>

      <textarea
        value={text}
        readOnly
        placeholder="Your speech will appear here…"
        rows={6}
        className="
          w-full resize-none
          rounded-lg
          border border-gray-300
          bg-white
          px-4 py-3
          text-sm text-gray-800
          leading-relaxed
          outline-none
          focus:ring-2 focus:ring-gray-400
          transition
        "
      />
    </div>
  );
}
