import "./styles.css"
import ambulance from "../../assets/images/ambulance.png"
import { Link } from "react-router-dom"

const AmbulanceModal = () => (
  <div className="ambulance_modal">
    <div className="ambulance_modal_content">
      <div className="ambulance_img">
        <img src={ambulance} alt="Ambulance" />
      </div>
      <h2>Ambulance has arrived</h2>
      <div className="ambulance_btns">
        <button className="ambulance_btn grey">Previous History</button>
        <button className="ambulance_btn main">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  </div>
)

export default AmbulanceModal