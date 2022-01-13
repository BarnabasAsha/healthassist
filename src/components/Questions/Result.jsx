import statusbar from "../../assets/images/status-bar.png"
import illustration from "../../assets/images/Illustration.png"
import { Link } from "react-router-dom"

const ResultsLoader = () => (
  <div className="result">
    <div className="result_statusbar">
    <img src={statusbar} alt="" />
    </div>
    <div className="result_illustration">
      <img src={illustration} alt="" />
    </div>
    <p>Your symptoms match to</p>
    <h2>Cardiac Arrest</h2>
    <button className="result_btn"><Link to="/hospitals">VIEW HOSPITALS</Link></button>
  </div>
)

export default ResultsLoader