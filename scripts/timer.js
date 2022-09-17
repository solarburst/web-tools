// import { Howl } from "./howler.js";

// const sound = new Howl({
//   src: ["../assets/notification.mp3"],
// });

const timerInput = document.getElementById("time");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const timerShow = document.getElementById("timeLeft");

buttonStart.addEventListener("click", () => {
  let time = parseInt(timerInput.value) * 60;
  const countdown = setInterval(() => {
    let seconds = time % 60;
    let minutes = (time / 60) % 60;
    let hours = (time / 60 / 60) % 60;

    let str = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
    timerShow.innerHTML = str;
    if (time <= 0) {
      sound.play();
      timerShow.innerHTML = "Time out";
      clearInterval(countdown);
    }
    --time;
  }, 1000);

  buttonStop.addEventListener("click", () => {
    clearInterval(countdown);
    timerShow.innerHTML = "Stopped";
  });
});
