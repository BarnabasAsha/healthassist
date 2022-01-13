import "./styles.css"
import { ReactComponent as Cardiac } from "../../assets/icons/cardiac-icon.svg"
import { ReactComponent as Covid } from "../../assets/icons/virus-icon.svg"
import { ReactComponent as Stroke } from "../../assets/icons/stroke-icon.svg"
import { ReactComponent as Bleeding } from "../../assets/icons/bleeding-icon.svg"
import { ReactComponent as Fracture } from "../../assets/icons/fracture.svg"
import { ReactComponent as Choking } from "../../assets/icons/choking-icon.svg"


const diseasesList = [
  {
    icon: <Cardiac />,
    title: "Cardiac Arrest",
    desc: "Click to see the preventive measures to be taken."
  },
  {
    icon: <Covid />,
    title: "Covid-19",
    desc: "Click to see the preventive measures to be taken."
  },
  {
    icon: <Stroke />,
    title: "Stroke",
    desc: "Click to see the preventive measures to be taken."
  },
  {
    icon: <Bleeding />,
    title: "Bleeding",
    desc: "Click to see the preventive measures to be taken."
  },
  {
    icon: <Choking />,
    title: "Choking",
    desc: "Click to see the preventive measures to be taken."
  },
  {
    icon: <Fracture />,
    title: "Bone Fracture",
    desc: "Click to see the preventive measures to be taken."
  },
]

const Disease = ({ icon, title, desc }) => (
  <div className="disease">
    <div className="disease_top">
      <div className="disease_top_icon">{icon}</div>
      <div className="disease_top_title">{title}</div>
    </div>
    <div className="disease_desc">
      {desc}
    </div>
  </div>
)

const EmergencyDiseases = () => (
  <div className="diseases">
    <div className="diseases_title">
      <h2>Emergency Diseases</h2>
      <a href="#dd">View All</a>
    </div>
    <div className="diseases_flow">
      {
        diseasesList.map(disease => <Disease key={disease.title} {...disease} />)
      }
    </div>
  </div>
)

export default EmergencyDiseases