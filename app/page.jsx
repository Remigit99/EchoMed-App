import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div>
          <h1>Hello World!</h1>
        </div>

        <div>
          <Image
            src="/assets/images/onboarding-img.png"
            alt="onboarding image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
