import styles from './ProgressBar.module.css'

function ProgressBar({ progress }) {
  const numericProgress = Number(progress)
  const currentProgress = Number.isFinite(numericProgress)
    ? Math.min(Math.max(numericProgress, 0), 100)
    : 0

  return (
    <div className={`progress ${styles.track}`} role="progressbar" aria-label="Savings goal progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(currentProgress)}>
      <div className={styles.fill} style={{ width: `${currentProgress}%` }} />
    </div>
  );
}

export default ProgressBar;
