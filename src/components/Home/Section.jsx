import "./styles.css"

const Card = ({ img, title, address, date, ratings }) => (
  <div className="section_card">
    <div className="section_card_img">
      <img src={img} alt="" />
    </div>
    <div className="section_card_title">{title}</div>
    <div className="section_card_subtitle">{ address || date}</div>
    <div className="section_card_ratings">
      { ratings }
    </div>
  </div>
)

const Section = ({ title, list }) => (
  <div className="section">
    <h2 className="section_title">{title}</h2>
    <div className="section_flow">
      {
        list.map((item, index) => <Card key={index} {...item} />)
      }
    </div>
  </div>
)

export default Section