import FidgetSpinnerAnimation from "@/components/FidgetSpinnerAnimation";
import LinkedInAnimation from "@/components/LinkedInAnimation";
import styles from "@/styles/Home.module.css";
import localFont from "next/font/local";
import Head from "next/head";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.gridCell}>
              <FidgetSpinnerAnimation />
            </div>
            <div className={styles.gridCell}>
              Hourglass Animation
              <div className={styles.spinner} />
            </div>
            <div className={styles.gridCell}>
              Shimmer Animation
              <div className={styles.spinnerContainer}>
                <div className={styles.linear_background} />
              </div>
            </div>
            <div className={styles.gridCell}>
              <LinkedInAnimation />
            </div>
            <div className={styles.gridCell}>
              <div className={styles.spinnerContainer}>
                <div className={styles.linear_background} />
              </div>
            </div>
            <div className={styles.gridCell}>
              <div className={styles.spinnerContainer}>
                <div className={styles.linear_background} />
              </div>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
