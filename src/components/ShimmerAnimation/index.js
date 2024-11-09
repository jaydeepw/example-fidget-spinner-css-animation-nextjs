import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function ShimmerAnimation() {
  return (
    <>
      <span class={homeStyles.title}>Shimmer Animation</span>
      <div className={homeStyles.whiteContainer}>
        <div className={styles.linear_background} />
      </div>
    </>
  );
}
