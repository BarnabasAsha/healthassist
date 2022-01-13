import './styles.css'
import logoimg from "../../assets/images/logo.png"

const Logo = () => (
  <div className="logo">
    <div className="logo_img">
      <img src={logoimg} alt="logo" role="banner" />
    </div>
    <div className="logo_text">Health Assist</div>
  </div>
)

export default Logo