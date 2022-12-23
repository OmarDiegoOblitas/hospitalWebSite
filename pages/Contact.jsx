import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <h2>Consulted</h2>
        <p className={styles.text}>
          This free App provides a solution to your health needs by offering you
          a one-stop access to complete information about various medical
          checkups .this App carries simple tips and advide to help you maintain
          a healthy lifestyle.
        </p>
      </div>
      <div className={styles.form_contact}>
        <div className={styles.info1}>
          <h4>Overview</h4>
          <span>Checking Health</span>
          <span>Find Doctor</span>
          <span>Make a Schedule</span>
        </div>
        <div className={styles.info1}>
          <h4>Company</h4>
          <span>Home</span>
          <span>About</span>
          <span>More</span>
        </div>
        <div className={styles.info1}>
          <h4>Explore</h4>
          <span>Terms&Conds</span>
          <span>Privacy Police</span>
          <span>Cookies</span>
        </div>
        <div className={styles.info1}>
          <h4>Social Media</h4>
          <span className={styles.icons}>
            <AiOutlineInstagram />
            <BsFacebook />
            <AiOutlineTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
