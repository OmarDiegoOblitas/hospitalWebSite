import React from 'react';
import styles from "../styles/Doctors.module.css";
import Image from "next/image";
import drIcon1 from "../public/drIcon1.png";
import drIcon2 from "../public/drIcon2.png"

const MyComponent = () => {
    return (
            <div>
                <h1 className={styles.title}>Specialist</h1>
                <div className={styles.cartDoc}>
                    <div className={styles.profileDoc} >
                        <div>
                            <Image src={drIcon1} alt="profile_dr" className={styles.photo}/>
                        </div>
                        <h2>Dr.Shimanta</h2>
                        <span>Skin Specialist</span>
                        <button>Make Schedule</button>
                    </div>
                    <div className={styles.profileDoc} >
                        <div>
                            <Image src={drIcon2} alt="profile_dr" className={styles.photo}></Image>
                        </div>
                        <h2>Dr.Adinda</h2>
                        <span>Eye Specialist</span>
                        <button>Find Doctor</button>
                    </div>
                </div>
            </div>
    );
};

export default MyComponent;
