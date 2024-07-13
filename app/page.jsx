"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import flags from 'react-phone-number-input/flags'
import { useState } from "react";

// function Example() {
//   // `value` will be the parsed phone number in E.164 format.
//   // Example: "+12133734253".
//   return (

// }

export default function Home() {
  const [value, setValue] = useState("")

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div>
          <div className={styles.loginHeader}>
            <h1>Hello Welcome!</h1>
            <p>Let get you started </p>
          </div>

          <div className="form">
            <form className={styles.appointForm}>
              <div className={`${styles.fullName} }`}>
                <label htmlFor="full Name">Full name</label>
                <div className={styles.inputGroup}>
                  <Image
                    src="/assets/icons/user.svg"
                    width={24}
                    height={24}
                    alt="user icon"
                    className={styles.icons}
                  />
                  <input
                    className={styles.mainInput}
                    type="text"
                    name="full Name"
                    id="full Name"
                    placeholder="Aderemi Abiodun"
                  />
                </div>
              </div>

              <div className={`${styles.email} `}>
                <label htmlFor="email">Email</label>
                <div className={styles.inputGroup}>
                  <Image
                    src="/assets/icons/email.svg"
                    width={24}
                    height={24}
                    alt="mail icon"
                    className={styles.icons}
                  />
                  <input
                    className={styles.mainInput}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className={`${styles.phone}`}>
                <label htmlFor="phone">Phone Number</label>
                <div className={styles.inputGroup}>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    flags={flags}
                    defaultCountry="US"
                    className={styles.mainInput}
                  />
                  {/* <Image
                    src="/assets/icons/user.svg"
                    width={24}
                    height={24}
                    alt="phone icon"
                    className={styles.icons}
                  />
                  <input className={styles.mainInput}
                    type="text"
                    name="full Name"
                    id="full Name" 
                    placeholder="+234 567 890 1234" /> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div>
          <Image
            src="/assets/images/onboarding-img.png"
            alt="onboarding image"
            width={500}
            height={500}
            className={styles.onBoardingImg}
          />
        </div>
      </div>
    </main>
  );
}
