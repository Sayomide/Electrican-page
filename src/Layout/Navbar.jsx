import { FiAlignJustify } from "react-icons/fi"
import './Navbar.css'

const Navbar = () => {
  return(
    <div className="Navbar">
      <h1> S.<span className="o">O</span>.A </h1> 
      <h2> E<span className="o">LE</span>CTR<span className="o">ICI</span>AN </h2>
      <FiAlignJustify style={{fontSize:"30px"}} />
    </div>
    )
}

export default Navbar
