const songs = ["song1.mp3", "song2.mp3", "song3.mp3"]; // Add your mp3 files
const titles = ["Song 1", "Song 2", "Song 3"];

let songIndex = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");

let isPlaying = false;

function loadSong(index) {
  audio.src = songs[index];
  title.textContent = titles[index];
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸";
  isPlaying = true;
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶";
  isPlaying = false;
}



function playSong() {
  audio.play();
  playBtn.textContent = "⏸";
  isPlaying = true;
  document.body.classList.add("playing"); // start animation
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶";
  isPlaying = false;
  document.body.classList.remove("playing"); // stop animation
}







playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  playSong();
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progressPercent + "%";
});

progress.addEventListener("click", (e) => {
  const width = progress.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener("ended", () => {
  nextBtn.click();
});

// Load first song
loadSong(songIndex);
