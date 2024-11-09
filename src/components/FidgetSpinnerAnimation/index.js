import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";
import styles from "./index.module.css";

export default function FidgetSpinnerAnimation() {
  return (
    <>
      <span class={homeStyles.title}>Fidget Spinner Animation</span>
      <div className={homeStyles.whiteContainer}>
        <Image
          className={styles.spinner}
          aria-hidden
          src="/spinner.png"
          alt="Spinner Icon"
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
