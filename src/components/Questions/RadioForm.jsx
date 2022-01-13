import "./styles.css"

const options = ["Cardiac", "Bleeding", "Stroke", "Bone Fracture", "Choking", "Infertility", "Asthma", "Hearing loss", "Other", "I don't know"]

const Radio = ({ title }) => (
  <div className="radio_option">
    <input type="radio" value={title} name="emergency-disease" id={title} />
    <label htmlFor={title} className="radio_input">
    {title}
  </label>
  </div>
)

const RadioForm = () => (
  <div className="radio_form">
    {
      options.map((option, index) => <Radio key={index} title={option} />)
    }
  </div>
)

export default RadioForm;