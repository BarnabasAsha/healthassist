import "./styles.css"
import { ReactComponent as Home } from "../../assets/icons/home.svg"
import { ReactComponent as Contact } from "../../assets/icons/contact-nav.svg"
import { Link } from "react-router-dom"


const NavBar = () => (
  <nav className="navbar">
    <a href="/">
      <Home />
    </a>
    <Link className="navbar_sos" to="/questions/one">
      SOS
    </Link>
    <a href="/">
      <Contact />
    </a>
  </nav>
)

export default NavBar