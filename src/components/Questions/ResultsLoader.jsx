import statusbar from "../../assets/images/status-bar.png"
import roller from "../../assets/images/loading.png"

const ResultsLoader = () => (
  <div className="analysing_results">
    <div className="analysing_results_statusbar">
    <img src={statusbar} alt="" />
    </div>
    <div className="analysing_results_roller">
      <img src={roller} alt="Loading" />
    </div>
    <h2>Analysing Results</h2>
  </div>
)

export default ResultsLoader