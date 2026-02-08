const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶ Play";
  }
  isPlaying = !isPlaying;
});
