import React from 'react';
import "../App.css";
// import {useEffect} from 'react';
import useScrollTop from '../Hooks/useScrollTop';

export default function About() {
  // Use Effect Hook
  useScrollTop();
  

  return (
    <>
      
    <div className="about-container">
      <h1  className="about-heading">About Me</h1>

      <section className="who-i-am">
        <h2>Who I Am</h2>
        <p>Hello, I’m <b><i className="highlight-text">Shuaib Akhter</i></b>, a dedicated Chartered Accountant with a passion for helping individuals and businesses achieve financial clarity and success. With years of experience in the industry, I provide personalized, professional services tailored to meet the unique needs of each client.</p>
      </section>

      <section className="mission">
        <h2>My Mission</h2>
        <p>My mission is to simplify the complexities of finance for my clients, ensuring they have the knowledge and confidence to make informed decisions. I believe in building strong, long-lasting relationships based on trust, transparency, and a commitment to excellence.</p>
      </section>

      <section className="services">
        <h2>What I Do</h2>
        <p>I offer a comprehensive range of accounting and financial services designed to meet the diverse needs of individuals and small businesses. These include:</p>
        <ul>
          <li><strong>Tax Planning & Compliance</strong>: Expert advice on tax strategies to minimize liabilities and ensure compliance.</li>
          <li><strong>Financial Advisory</strong>: Personalized financial planning to help you achieve your financial goals.</li>
          <li><strong>Bookkeeping & Accounting</strong>: Accurate and efficient management of your financial records.</li>
          <li><strong>Audit Services</strong>: Detailed audits to ensure transparency and accuracy in your financial reporting.</li>
        </ul>
      </section>

      <section className="why-choose-me">
        <h2>Why Choose Me?</h2>
        <div className="reasons">
          <div className="reason">
            <h3>Personalized Service</h3>
            <p>I take the time to understand your specific needs and goals, providing tailored solutions that work for you.</p>
          </div>
          <div className="reason">
            <h3>Experience & Expertise</h3>
            <p>With extensive experience in the field, I offer insightful and practical advice that helps you navigate complex financial situations.</p>
          </div>
          <div className="reason">
            <h3>Integrity & Transparency</h3>
            <p>I am committed to upholding the highest standards of ethics and transparency in all my dealings with clients.</p>
          </div>
          <div className="reason">
            <h3>Client-Centric Approach</h3>
            <p>Your success is my priority. I work closely with you to ensure that all your financial needs are met effectively.</p>
          </div>
        </div>
      </section>

      <section className="get-in-touch">
        <h2>Get in Touch</h2>
        <p>If you're looking for personalized, professional accounting services, I’d love to hear from you. Contact me today to learn how I can assist you in achieving your financial goals.</p>
      </section>
    </div>
  
    </>
  );
}
