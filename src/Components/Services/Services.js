import React, { useEffect } from "react";
import '../../App.css';
import styles from './Services.module.css';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    "AUDIT & ASSURANCE SERVICES",
    "BOOK KEEPING & ACCOUNTING SERVICES",
    "BUSINESS SETUP ADVISORY",
    "CYBER SECURITY",
    "FORENSIC ACCOUNTING AND FRAUD DETECTION",
    "GLOBAL BUSINESS SERVICES",
    "GST RELATED SERVICES",
    "IND-AS IMPLEMENTATION",
    "INTERNAL AUDIT",
    "INTERNAL FINANCIAL CONTROLS (IFS)",
    "NON-CORE PROCESS OUTSOURCING",
    "PHYSICAL VERIFICATION"
  ];

  return (
    <div className="container">
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{service}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
