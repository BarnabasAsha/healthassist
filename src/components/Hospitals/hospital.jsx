import "./styles.css"
import { ReactComponent as Ratings } from "../../assets/icons/ratings.svg"
import { ReactComponent as Phone } from "../../assets/icons/phone.svg"
import { ReactComponent as Location } from "../../assets/icons/location.svg"


const Hospital = ({img, name, distance, contact, address, toggleAddress }) => (
  <li className="hospital">
    <div className="hospital_top">
      <div className="hospital_img">
        <img src={img} alt="" />
      </div>
      <div className="hospital_info">
        <h2>{name} <span>({distance} miles)</span></h2>
        <Ratings />
        <div className="hospital_info_phone">
          <Phone /> {contact}
        </div>
        <div className="hospital_info_address">
          <Location /> {address}
        </div>
      </div>
    </div>
    <div className="hospital_bottom">
      <button className="hospital_bottom_btn grey">
        Get Directions
      </button>
      <button onClick={toggleAddress} className="hospital_bottom_btn main">
        Call Ambulance
      </button>
    </div>
  </li>
)

export default Hospital