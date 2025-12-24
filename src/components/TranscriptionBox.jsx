import React, { useState, useEffect } from "react";

export default function TranscriptBox({ finalText, interimText }) {
  const [text, setText] = useState("");
  

  useEffect(() => {
    if (finalText || interimText) {
      setText((finalText + " " + interimText).trim());
    }
  }, [finalText, interimText]);

  return (
    <textarea
      className="w-full max-w-xl h-40 bg-gray-800 border border-gray-700 rounded-md p-3 resize-none text-white"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Your transcribed text will appear here..."
    />
  );
}
