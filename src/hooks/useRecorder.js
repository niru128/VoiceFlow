import { useState, useRef } from "react";
import { startRecording, stopRecording } from "../services/audioService";
import { transcribeAudio } from "../services/deepgramService"
export default function useRecorder(onTranscript) {
  const [recording, setRecording] = useState(false);
  const isRecordingRef = useRef(false);
  

  const start = async () => {
    if (isRecordingRef.current) return;

    onTranscript("",true)

    isRecordingRef.current = true;
    setRecording(true);

    await startRecording();
  };

  const stop = async () => {
    if (!isRecordingRef.current) return;

    setRecording(false);
    isRecordingRef.current = false;

    const audioBlob = await stopRecording();

    if (!audioBlob) return;

    try {
      const transcript = await transcribeAudio(audioBlob);
      onTranscript(transcript, true);
    } catch (err) {
      console.error(err);
      alert("Transcription failed");
    }
  };

  return { recording, start, stop };
}
