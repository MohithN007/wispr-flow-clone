export function createDeepgramSocket(onText, onError, onOpen) {
  const socket = new WebSocket(
    "wss://api.deepgram.com/v1/listen?punctuate=true",
    ["token", import.meta.env.VITE_DEEPGRAM_API_KEY]
  );

  socket.onopen = () => {
    onOpen();
  };

  socket.onerror = () => {
    onError("Deepgram connection failed");
  };

  socket.onmessage = (message) => {
    const data = JSON.parse(message.data);

    const transcript =
      data.channel?.alternatives?.[0]?.transcript;

    if (!transcript) return;

    if (data.is_final) {
      onText(transcript.trim() + "\n");
    }
  };

  return socket;
}
