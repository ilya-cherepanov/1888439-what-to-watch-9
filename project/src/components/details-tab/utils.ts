const formatRunTime = (runTime: number): string => {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;

  const hoursSection = hours !== 0 ? `${hours}h ` : '';
  const minutesSection = `${minutes}m`;

  return hoursSection + minutesSection;
};


export {formatRunTime};
