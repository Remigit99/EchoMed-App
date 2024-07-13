import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
         <h1>
        Hello World!
        </h1>
        <Image 
        src="/assets/images/onboarding-img.png"
        alt="onboarding image"
        width={1000}
        height={1000}
        />
      </div>
    

      </main>
  );
}
