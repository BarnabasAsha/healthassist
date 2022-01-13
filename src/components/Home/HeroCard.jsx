import "./styles.css"

const HeroCard = ({ icon, title }) => (
  <div className="hero_card">
    <div className="hero_card_icon">
      {
        icon
      }
    </div>
    <div className="hero_card_text">{ title }</div>
  </div>
)

export default HeroCard