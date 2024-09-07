import { FiAlignJustify } from "react-icons/fi"
import styles from './Navbar.module.css';

const Navbar = () => {
  return(
    <div className={styles.Navbar}>
      <h1> S.<span className={styles.o}>O</span>.A </h1> 
      
      <h2> E<span className={styles.o}>LE</span>CTR<span className={styles.o}>ICI</span>AN 
      </h2>
      
      <FiAlignJustify style={{fontSize:"30px"}} />
    </div>
    )
}

export default Navbar
