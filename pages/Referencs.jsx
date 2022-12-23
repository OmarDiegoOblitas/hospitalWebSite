import React from "react";
import { GiConfirmed } from "react-icons/gi";
import styles from "../styles/Reference.module.css";
import Image from "next/image";
import drIcon1 from "../public/drIcon1.png";
import profileDoc from "../public/profile2.png"

const style = { color: "#4D77FF", fontSize: "1.2rem" };

const Referencs = () => {
  return (
    <div className={styles.content}>
      <div className={styles.photo}>
        <Image src={profileDoc} alt="profile-doc"></Image>
      </div>
      <div className={styles.content_right}>
        <h3 className={styles.title}>Find Doctor</h3>
        <span className={styles.text}>
          Find the right doctor according to your complait
        </span>
        <p className={styles.paragraph}>
          HealthCare.Ly is a free ,health app that goes beyond matching you with
          doctors it actively helps you find the right doctor based on your
          medical and personal needs and connects you with your HealthCare
          community for ongoing support throughout your journey to healtheir
          living
        </p>
        <div className={styles.affirmation}>
          <GiConfirmed style={style} />
          <span className={styles.message}>
            100% free app designed to help you doctor
          </span>
        </div>
        <div className={styles.affirmation}>
          <GiConfirmed style={style} />
          <span className={styles.message}>
            Available 900 doctors specialist
          </span>
        </div>
        <button className={styles.btn_doctors}>View More</button>
      </div>
    </div>
  );
};

export default Referencs;
