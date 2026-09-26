function ProgressBar({ progress }) {
  let currentProgress = progress;

  if (currentProgress < 0) {
    currentProgress = 0;
  }

  if (currentProgress > 100) {
    currentProgress = 100;
  }

  return (
    <div className="progress">
      <div
        className="progress__fill"
        style={{ width: `${currentProgress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;