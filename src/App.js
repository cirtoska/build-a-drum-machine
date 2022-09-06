import React, { useState } from "react";
import { audioClips } from "./components/audioClips";
import DrumPad from "./components/DrumPad";
import Footer from "./components/Footer";

function App() {
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");
  const [speed, setSpeed] = useState(0.5);

  const playRecording = () => {
    let index = 0;
    let recordArray = recording.split(" ");
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);

      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, speed * 600);
    setTimeout(
      () => clearInterval(interval),
      600 * speed * recordArray.length - 1
    );
  };
  return (
    <>
      <main className="bg-info text-white">
        <div id="drum-machine" className="text-center mx-auto">
          <h2 className="title">Drum Machine</h2>
          <div className="display-flex">
            <div id="display">
              {audioClips.map((clip) => {
                return (
                  <DrumPad
                    key={clip.id}
                    clip={clip}
                    volume={volume}
                    setRecording={setRecording}
                  />
                );
              })}
            </div>
            <div className="mixete">
              <h4 className="m-4">Volume</h4>
              <input
                type="range"
                step="0.01"
                onChange={(e) => setVolume(e.target.value)}
                value={volume}
                max="1"
                min="0"
                className="w-50"
              />
              <h3 className="m-4">{recording}</h3>
              {recording && (
                <>
                  <button
                    onClick={playRecording}
                    className="btn btn-success m-2"
                  >
                    play
                  </button>
                  <button
                    onClick={() => setRecording("")}
                    className="btn btn-danger m-2"
                  >
                    clear
                  </button>

                  <h3 className="m-4">Speed</h3>
                  <input
                    type="range"
                    step="0.01"
                    onChange={(e) => setSpeed(e.target.value)}
                    value={speed}
                    max="1.2"
                    min="0.1"
                    className="w-50"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
