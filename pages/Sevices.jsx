import { FiUsers } from "react-icons/fi";
import { CgCalendarDates } from "react-icons/cg";
import { RiSearchFill } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";
import styles from "../styles/Services.module.css";

const style = { color: "#4D77FF", fontSize: "1.5rem" };
const details = [
  {
    id: 1,
    icon: <RiSearchFill style={style} />,
    title: "Check Health complaints",
    text: "Check the disease so you can aesily choose the right specialist ",
  },
  {
    id: 2,
    icon: <FiUsers style={style} />,
    title: "Choose doctor Specialist",
    text: "Choose a specialist according to your disease complaints",
  },
  {
    id: 3,
    icon: <CgCalendarDates style={style} />,
    title: "Make a Schedule",
    text: "Make a schedule with the doctor concerned so you can start the examination",
  },
  {
    id: 4,
    icon: <FaStarHalfAlt style={style} />,
    title: "Get your Solutions",
    text: "After conducting an examination with a specialist we can help find the right healing method",
  },
];

const Services = () => {
  return (
    <div>
      <article className={styles.card}>
        {details.map(({ id, icon, title, text }) => {
          return (
            <div key={id} className={styles.content}>
              <span className={styles.icon}>{icon}</span>
              <span className={styles.title_card}>{title}</span>
              <p className={styles.text_card}>{text}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};
export default Services;
