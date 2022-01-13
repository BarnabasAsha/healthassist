import "./styles.css"
import statusbar from "../../assets/images/status-bar.png"
import marker from "../../assets/images/map-marker.png"
import { ReactComponent as Location } from "../../assets/icons/location-route.svg"
import AidManual from "./AidManual"
import { useState, useEffect } from "react"
import AmbulanceModal from "./AmbulanceModal"

const Arrived = () => {
  const [arrived, setArrived] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setArrived(true)
    }, 5000)
  }, [])
  return (
    <div className="arrived">
      <div className="arrived_statusbar">
        <img src={statusbar} alt="" />
      </div>
      <div className="arrived_map-marker">
        <img src={marker} alt="" />
      </div>
      <div className="arrived_info">
        <div className="arrived_info_icon">
          <Location />
        </div>
        <div className="arrived_info_text">
          <h2>Help is on its way to:</h2>
          <p>Upton Hospital, Albert St, Slough SL1 2BJ</p>
        </div>
      </div>
      <AidManual />
      { arrived ? <AmbulanceModal /> : null}
    </div>
  )
}

export default Arrived