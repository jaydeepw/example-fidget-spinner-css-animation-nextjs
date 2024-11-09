import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function HourglassAnimation() {
  return (
    <>
      <span class={homeStyles.title}>Hourglass Animation</span>
      <div className={styles.spinner} />
    </>
  );
}
