export async function transcribeAudio(audioBlob) {
  const apiKey = import.meta.env.VITE_DEEPGRAM_API_KEY;

  const response = await fetch(
    "https://api.deepgram.com/v1/listen?model=nova-2&punctuate=true&language=en-US",
    {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": audioBlob.type,
      },
      body: audioBlob,
    }
  );

  if (!response.ok) {
    throw new Error("Deepgram transcription failed");
  }

  const data = await response.json();

  return (
    data.results?.channels?.[0]?.alternatives?.[0]?.transcript || ""
  );
}
