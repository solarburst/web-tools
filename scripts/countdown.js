export const initializeCountdown = (id, time) => {
  const updateCountdown = () => {
    let seconds = time % 60;
    let minutes = (time / 60) % 60;
    let hours = (time / 60 / 60) % 60;

    if (time <= 0) {
      clearInterval(countdown);
      timer.innerHTML = "Time out";
    }
    let str = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
    timer.innerHTML = str;
    --time;
  };

  const countdown = setInterval(updateCountdown, 1000);
};
