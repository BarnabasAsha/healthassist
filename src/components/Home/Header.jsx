import Search from "../Search/Search";
import Logo from "./Logo";
import { ReactComponent as Notification } from "../../assets/icons/bell-icon.svg"
import statusbar from "../../assets/images/status-bar.png"
import "./styles.css"

const Header = () => (
  <header>
    <div className="header">
      <div className="header_status">
        <img src={statusbar} alt="status bar" />
      </div>
      <Logo />
      <div className="header_flex">
        <Search />
        <div className="header_flex_bell">
          <Notification />
        </div>
      </div>
    </div>
  </header>
)

export default Header