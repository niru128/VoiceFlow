import React from 'react'
export default function TranscriptBox({ finalText, interimText }) {
  return (
    <textarea
      className="w-full max-w-xl h-40 bg-gray-800 border border-gray-700 rounded-md p-3 resize-none text-white"

      value={(finalText + " " + interimText).trim()}
      placeholder="Your transcribed text will appear here..."
      readOnly
    />
  );
}

