import Header from "./Header"
import "./styles.css"
import wockheart from "../../assets/images/wockheart.png"
import ashoka from "../../assets/images/ashoka.png"
import sushrut from "../../assets/images/sushrut.png"
import upton from "../../assets/images/upton.png"
import Hospital from "./hospital"
import EmergencyAddress from "./EmergencyAddress"
import { useState } from "react"


const hospitals = [
  {
    img: wockheart,
    name: "Wockheart Hospital",
    distance: 6,
    contact: "+44 7645472879",
    address: "Upton Hospital, Albert St, Slough SL1 2BJ"
  },
  {
    img: ashoka,
    name: "Ashoka Hospital",
    distance: 10,
    contact: "+44 7645472879",
    address: "Upton Hospital, Albert St, Slough SL1 2BJ"
  },
  {
    img: upton,
    name: "Upton Hospital",
    distance: 12,
    contact: "+44 7645472879",
    address: "Upton Hospital, Albert St, Slough SL1 2BJ"
  },
  {
    img: sushrut,
    name: "Susrut Hospital",
    distance: 14,
    contact: "+44 7645472879",
    address: "Upton Hospital, Albert St, Slough SL1 2BJ"
  }
]

const HospitalsList = () => {
  const [showAddress, setShowAddress] = useState(false)

  const toggleAddress = () => setShowAddress(address => !address);

  return (
    <div className="hospitals">
      <Header />
      <ul className="hospitals_list">
        {
          hospitals.length ? (
            hospitals.map((hospital, index) => (
              <Hospital key={index} {...hospital} toggleAddress={toggleAddress} />
            ))
          ): null
        }
      </ul>
      { showAddress ? <EmergencyAddress onExit={toggleAddress} /> : null }
    </div>
  )
}

export default HospitalsList