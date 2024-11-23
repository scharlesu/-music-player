import { useRef } from "react";

export default function AudioPlayer() {
  const playerRef = useRef(null);
  const playBtn = useRef(null);
  function playPauseClick() {
    if (playBtn.current.innerHTML == "▶") {
      playBtn.current.innerHTML = "⏸";
      playerRef.current.play();
    } else {
      playBtn.current.innerHTML = "▶";
      playerRef.current.pause();
    }
  }
  return (
    <div>
      <audio
        controls
        id="player"
        src="/songs/ill_whip_yo_head_boy.mp3"
        type="audio/mpeg"
        ref={playerRef}
      />
      <button>previous</button>
      <button ref={playBtn} onClick={playPauseClick}>
        ▶
      </button>
      <button>next</button>
      <button>shuffle</button>
      <button>volume up</button>
      <button>volume down</button>
    </div>
  );
}
