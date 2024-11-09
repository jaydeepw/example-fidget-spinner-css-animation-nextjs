import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function MicrosoftAnimation() {
  return (
    <>
      <span class={homeStyles.title}>Microsoft Animation</span>
      <div className={styles.whiteContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.bg} />
          <div className={styles.animContainer}>
            <div className={styles.line}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.line}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.line}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.line}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.line}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.line}>
              <div className={styles.circle}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
