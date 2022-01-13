import "./styles.css"
import { ReactComponent as Exit } from "../../assets/icons/exit.svg"
import { ReactComponent as Edit } from "../../assets/icons/edit.svg"
import { Link } from "react-router-dom"

const EmergencyAddress = ({ onExit }) => {
  return (
    <div className="address">
    <div className="address_details">
      <div className="address_details_top">
        <h3>Emergency Help Address</h3>
        <button onClick={onExit} className="address_action">
          <Exit />
        </button>
      </div>
      <div className="address_details_option">
        <div className="address_details_input">
        <input type="radio" name="location" id="address" />
        
        <label htmlFor="address">
        <div className="address_details_input_radio">
          <div className="inner"></div>
        </div><span>House no.9, Gangapur Road,
Nashik.</span></label>
        </div>
        <button className="address_action">
        <Edit />
        </button>
      </div>
      <div className="address_details_option">
      <div className="address_details_input">
      <input type="radio" name="location" id="user_location" />
      
        <label htmlFor="user_location">
        <div className="address_details_input_radio">
          <div className="inner"></div>
        </div>
          <span>Your Location</span></label>
      </div>
      <button className="address_action">
        <Edit />
        </button>
      </div>
      <div className="address_shape"></div>
      <button className="address_add">
        Add new Emergency Address
      </button>
      <button className="address_proceed">
        <Link to="/transit">PROCEED</Link>
      </button>
    </div>
  </div>
  )
}

export default EmergencyAddress