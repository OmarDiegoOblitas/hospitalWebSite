import Image from "next/image";
import drIcon1 from "../public/drIcon1.png";
import profile from "../public/profile1.png"
import styles from "../styles/Info.module.css";

export default function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.title}>Medical Care Now Simplified for </span>
        <span className={styles.subtitle}>Everyone</span>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores
          totam, officia est, excepturi voluptatum tenetur eligendi quis
          officiis id voluptatem sed quidem, suscipit quam animi. Minus eaque
          totam blanditiis.
        </p>
        <button className={styles.btn}>Contact US</button>
      </div>
      <div className={styles.main}>
          <Image src={profile} alt="Profile Dra" />
      </div>
    </div>
  );
}
