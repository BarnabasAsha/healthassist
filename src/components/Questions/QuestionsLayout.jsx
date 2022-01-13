import "./styles.css"
import { ReactComponent as Chevron } from "../../assets/icons/Chevron.svg"
import statusbar from "../../assets/images/status-bar.png"
import { Link } from "react-router-dom"

const QuestionsLayout = ({ children, title, desc, last}) => (
  <div className="questions_layout">
  <div className="questions_layout_header">
    <img src={statusbar} alt="" />
  </div>
    <div className="questions_layout_tabs">
      <span className={!last ? 'active' : ''}></span><span className={last ? 'active' : ''}></span>
    </div>
    <div className="questions_layout_text">
      <h2>{ title }</h2>
      <p>{ desc }</p>
    </div>
    <div className="questions_layout_children">
      { children }
    </div>
    <nav className="questions_layout_navbar">
      <Link className="questions_layout_btn_sm" to={last ? '/questions/one' : '/'}>
        <Chevron />
        <span>Back</span>
      </Link>
      {
        last ? (
          <Link className="questions_layout_btn_lg" to="/questions/analysing">DONE</Link>
        ) : (
          <Link className="questions_layout_btn_lg" to="/questions/two">NEXT</Link>
        )
      }
    </nav>
  </div>
)

export default QuestionsLayout