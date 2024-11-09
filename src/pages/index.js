import FidgetSpinnerAnimation from "@/components/FidgetSpinnerAnimation";
import HourglassAnimation from "@/components/HourglassAnimation";
import LinkedInAnimation from "@/components/LinkedInAnimation";
import PinterestAnimation from "@/components/PinterestAnimation";
import ShimmerAnimation from "@/components/ShimmerAnimation";
import TwitterAnimation from "@/components/TwitterAnimation";
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
        <title>CSS Spinners</title>
        <meta
          name="description"
          content="CSS loading animations with examples"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* className="row-start-3 flex gap-6 mt-8 flex-wrap items-center
        justify-center sm: p-1" */}
        <header className={styles.header}>
          <a
            href="https://github.com/jaydeepw/example-fidget-spinner-css-animation-nextjs?utm_src=github_example"
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
            Get Code
          </a>
          {/* TODO: Add the right link of the blog post here */}
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://toofancoder.com/blog/responsive-grid-view-with-tailwind-nextjs?utm_src=github_example"
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
            Visit Blog Post →
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://toofancoder.com?utm_src=github_example"
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
            More Examples
          </a>
        </header>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.gridCell}>
              <FidgetSpinnerAnimation />
            </div>
            <div className={styles.gridCell}>
              <HourglassAnimation />
            </div>
            <div className={styles.gridCell}>
              <ShimmerAnimation />
            </div>
            <div className={styles.gridCell}>
              <LinkedInAnimation />
            </div>
            <div className={styles.gridCell}>
              <TwitterAnimation />
            </div>
            <div className={styles.gridCell}>
              <PinterestAnimation />
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
