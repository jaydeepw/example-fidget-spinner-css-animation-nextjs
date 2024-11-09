import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function PinterestAnimation() {
  return (
    <>
      <span class={homeStyles.title}>Pinterest Animation</span>
      <div>
        <div className={styles.circle_box}>
          <div className={styles.inner_circle_box}>
            <div className={styles.small_circle} />
            <div className={styles.small_circle} />
            <div className={styles.small_circle} />
            <div className={styles.small_circle} />
          </div>
        </div>
      </div>
    </>
  );
}
