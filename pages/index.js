import styles from "../styles/Home.module.css";
import Contact from "./Contact";
import Info from "./info";
import Navbar from "./NavBar";
import Referencs from "./Referencs";
import Services from "./Sevices";
import Doctors from "./Doctors";
export default function Home() {
  return (
    <div>
        <Navbar />
        <Info />
        <Services />
        <Referencs />
        <Doctors />
        <Contact />
    </div>
  );
}
