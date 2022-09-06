import React, { useEffect, useState } from "react";

const DrumPad = ({ clip, volume, setRecording }) => {
  const [active, setActive] = useState(false);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording((prev) => prev + clip.keyTrigger + " ");
  };

  return (
    <div
      onClick={playSound}
      className={`drum-pad btn btn-secondary p-4 m-3 ${
        active && "btn-warning"
      }`}
    >
      <audio src={clip.url} className="clip" id={clip.keyTrigger} />
      {clip.keyTrigger}
    </div>
  );
};

export default DrumPad;
