import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function NetflixAnimation() {
  return (
    <>
      <span class={homeStyles.title}>Netflix Animation</span>
      <div className={homeStyles.darkContainer}>
        <div className={styles.netflix_preloader} />
      </div>
    </>
  );
}
