import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function TwitterAnimation() {
  return (
    <>
      <span class={homeStyles.title}>Twitter Animation</span>
      <div className={homeStyles.whiteContainer}>
        <span className={`${styles.blob1} ${styles.blob}`} />
        <span className={`${styles.blob2} ${styles.blob}`} />
        <span className={`${styles.blob3} ${styles.blob}`} />
      </div>
    </>
  );
}
