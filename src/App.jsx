import { useState } from "react";
import Recorder from "./components/Recorder";
import Transcriptbox from "./components/Transcriptbox";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      
     
<h1
  className="
    text-9xl sm:text-6xl
    font-bold
    text-gray-900
    tracking-tight
    mb-3
    transition-colors duration-700
    hover:text-gray-700
    
  "
>
  Wispr Flow Clone
</h1>

<p
  className="
    text-base sm:text-md
    text-gray-500
    mb-10
    transition-colors duration-700
  "
>
  Push-to-talk voice transcription powered by{" "}
  <span className="text-gray-700 font-medium">Deepgram</span>
</p>

      {/* APP CARD */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8">
        <Recorder onText={(t) => setText((p) => p + " " + t)} />
        <Transcriptbox text={text} />
      </div>

    </div>
  );
}

export default App;
