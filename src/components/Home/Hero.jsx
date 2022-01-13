import "./styles.css"
import HeroCard from "./HeroCard"
import { ReactComponent as Hospital } from "../../assets/icons/nearest-hospital.svg"
import { ReactComponent as Pharmacy } from "../../assets/icons/nearest-pharmacy.svg"
import { ReactComponent as Emergency } from "../../assets/icons/contact-icon.svg"
import { ReactComponent as Health } from "../../assets/icons/care-icon.svg"


const options = [
  {
    title: "Nearest Hospital",
    icon: <Hospital />
  },
  {
    title: "Nearest Pharmacy",
    icon: <Pharmacy />
  },
  {
    title: "Emergency Contact",
    icon: <Emergency />
  },
  {
    title: "Health & Care",
    icon: <Health />
  },
]

const Hero = () => (
  <div className="hero">
    <div className="hero_img">

    </div>
    <div className="hero_slider">
      <span className="active"></span><span></span><span></span><span></span>
    </div>

    <div className="hero_options">
      {
        options.map(option => <HeroCard key={option.title} title={option.title} icon={option.icon} />)
      }
    </div>
  </div>
)

export default Hero