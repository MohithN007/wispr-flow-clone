let mediaRecorder;
let audioStream;

export async function startRecording(onData) {
  try {
    audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    mediaRecorder = new MediaRecorder(audioStream, {
      mimeType: "audio/webm",
    });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        onData(event.data);
      }
    };

    mediaRecorder.start(250); // send audio chunks every 250ms
  } catch (err) {
    throw new Error("Microphone permission denied");
  }
}

export function stopRecording() {
  if (mediaRecorder) mediaRecorder.stop();
  if (audioStream) {
    audioStream.getTracks().forEach((t) => t.stop());
  }
}
