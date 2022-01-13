import { ReactComponent as HomeIcon } from "../../assets/icons/hospital-home.svg"
import { ReactComponent as Search } from "../../assets/icons/search-icon.svg"
import statusbar from "../../assets/images/status-bar.png"
import "./styles.css"

const Header = () => (
  <header>
    <div className="hospital_header">
      <div className="hospital_header_status">
        <img src={statusbar} alt="status bar" />
      </div>
      <div className="hospital_header_text">
        <div className="hospital_header_text_heading">
          <HomeIcon />
          <h1>Nearest Hospitals</h1>
        </div>
        <Search />
      </div>
    </div>
  </header>
)

export default Header