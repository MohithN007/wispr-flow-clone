import { useState, useRef } from "react";
import { startRecording, stopRecording } from "../services/audio";
import { createDeepgramSocket } from "../services/deepgram";

export default function Recorder({ onText }) {
  const [recording, setRecording] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const socketRef = useRef(null);

  const start = () => {
    setConnecting(true);

    socketRef.current = createDeepgramSocket(
      (text) => onText(text),
      (err) => {
        alert(err);
        setConnecting(false);
      },
      async () => {
        await startRecording((audioBlob) => {
          if (socketRef.current?.readyState === WebSocket.OPEN) {
            socketRef.current.send(audioBlob);
          }
        });
        setRecording(true);
        setConnecting(false);
      }
    );
  };

  const stop = () => {
    stopRecording();
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.close();
    }
    socketRef.current = null;
    setRecording(false);
    setConnecting(false);
  };

  return (
    <div className="flex flex-col items-center mb-6">
      {connecting && (
        <div className="text-sm text-gray-500 mb-4 animate-pulse">
          Connecting…
        </div>
      )}

      {!recording && !connecting && (
        <button
          onClick={start}
          className="
            px-6 py-3 rounded-full text-sm font-medium
            bg-gray-900 text-white
            hover:bg-gray-800
            transition-all duration-300
            active:scale-95
          "
        >
          🎤 Start Recording
        </button>
      )}

      {recording && (
        <button
          onClick={stop}
          className="
            px-6 py-3 rounded-full text-sm font-medium
            bg-red-600 text-white
            hover:bg-red-500
            transition-all duration-300
            active:scale-95
          "
        >
          ⏹ Stop Recording
        </button>
      )}
    </div>
  );
}
