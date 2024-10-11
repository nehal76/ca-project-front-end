import React, { useEffect } from "react";
import styles from "./Contactus.module.css"; // Import the CSS module

export default function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
    <div className={styles['app-container']}>
      <div className={styles.card}>
        <div className={styles['card-header']}>
          <div className={styles.icon}>
            <i className="fas fa-envelope"></i>
          </div>
          <h2>Contact By Email</h2>
        </div>
        <div className={styles['card-content']}>
          <p>
            Look forward to your mail at <b>Shuaibakhter92@gmail.com</b>. Expect us to respond within 24-48 hours.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles['card-header']}>
          <div className={styles.icon}>
            <i className="fas fa-phone"></i>
          </div>
          <h2>Contact By Phone</h2>
        </div>
        <div className={styles['card-content']}>
          <p>
            Dial <b>+91 8800-721-984</b> to reach us instantly. We are waiting to hear from you!
          </p>
        </div>
      </div>

      
    </div>
    </div>
  );
}
