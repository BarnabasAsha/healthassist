import "./styles.css"
import { ReactComponent as Acne } from "../../assets/icons/acne.svg"
import { ReactComponent as Headache } from "../../assets/icons/headache-icon.svg"
import { ReactComponent as Vommiting } from "../../assets/icons/vomitting.svg"
import { ReactComponent as Pain } from "../../assets/icons/pain.svg"



const list = [
  {
    title: "Acne and Pimples",
    icon: <Acne />
  },
  {
    title: "Headache",
    icon: <Headache />
  },
  {
    title: "Vommiting",
    icon: <Vommiting />
  },
  {
    title: "Joint pain",
    icon: <Pain />
  },
  {
    title: "Cold and Cough",
    icon: <Vommiting />
  },
  {
    title: "Abdominal pain",
    icon: <Pain />
  }
]

const Disease = ({ icon, title }) => (
  <div className="common_disease">
    <div className="common_disease_icon">
      { icon }
    </div>
    <div className="common_disease_title">{title}</div>
  </div>
)

const CommonDiseases = () => (
  <div className="diseases">
    <div className="diseases_title">
      <h2>Common Diseases</h2>
      <a href="#dd">View All</a>
    </div>
    <div className="common_diseases_flow">
        {
          list.map(disease => <Disease key={disease.title} {...disease} />)
        }
    </div>
  </div>
)

export default CommonDiseases