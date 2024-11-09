import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function LinkedInAnimation() {
  return (
    <>
      <span class={homeStyles.title}>LinkedIn Animation</span>
      <div className={homeStyles.whiteContainer}>
        <div class={styles.line}>
          <div class={styles.inner} />
        </div>
      </div>
    </>
  );
}
