import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function GoogleAnimation() {
  return (
    <>
      <span class={homeStyles.title}>Google Animation</span>
      <div>
        <div className={homeStyles.whiteContainer}>
          <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
