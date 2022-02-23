const formatTime = (timeInSeconds: number): string => {
  const seconds = timeInSeconds % 60;
  const minutes = Math.floor(timeInSeconds / 60) % 60;
  const hours = Math.floor(timeInSeconds / 3600);

  const hoursSection = hours > 0 ? `0${hours}:`.slice(-3) : '';
  const minutesSection = `0${minutes}:`.slice(-3);
  const secondsSection = `0${seconds}`.slice(-2);

  return hoursSection + minutesSection + secondsSection;
};


export {formatTime};
