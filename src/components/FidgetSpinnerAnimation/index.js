import Image from "next/image";
import styles from "./FidgetSpinnerAnimation.module.css";

export default function FidgetSpinnerAnimation() {
  return (
    <>
      Fidget Spinner Animation
      <div className={styles.whiteContainer}>
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
