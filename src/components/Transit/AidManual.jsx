import hands from "../../assets/images/hands-on.png"
import video from "../../assets/images/video.png"
import { ReactComponent as Speaker } from "../../assets/icons/speaker.svg"
import { useState } from "react"


const AidManual = () => {
  const [swipe, setSwipe] = useState(false)

  return (
    <div className={`aid_manual ${swipe ? 'swipe' : null}`}>
      <div className="aid_manual_decor"></div>
      <header>
      <h2>Aid Manual</h2>
      <p>Follow the instructions provided by experts until the ambulance arrives</p>
      </header>
      <div className="aid_manual_btns">
       {
         !swipe ? (
          <button onClick={() => setSwipe(true)} className="aid_manual_btn main">Swip up</button>
         ) : null
       }
        <button className="aid_manual_btn grey">Voice Inst. <Speaker /></button>
      </div>
      <article>
        <section className="aid_manual_section">
          <div className="aid_manual_img">
            <img src={hands} alt="" />
          </div>
          <h3>Step 1: Lay-down patient</h3>
          <p>Lay down the person on the ground and check breathing. If not breathing start giving CPR.  </p>
        </section>
        <section className="aid_manual_section">
          <div className="aid_manual_img">
            <img src={hands} alt="" />
          </div>
          <h3>Step 2: Hands-only CPR</h3>
          <p>Place the heel of your hand on the breastbone at the centre of the person's chest. Place your other hand on top of your first hand and interlock your fingers.
            <br />
            Position yourself with your shoulders above your hands.Using your body weight (not just your arms), press straight down by 5 to 6cm (2 to 2.5 inches) on their chest.
            <br />
            Keeping your hands on their chest, release the compression and allow the chest to return to its original position.</p>
        </section>
        <section className="aid_manual_section">
          <div className="aid_manual_img">
            <img src={hands} alt="" />
          </div>
          <h3>Step 2: Hands-only CPR</h3>
          <p>Place the heel of your hand on the breastbone at the centre of the person's chest. Place your other hand on top of your first hand and interlock your fingers.
            <br />
            Position yourself with your shoulders above your hands.Using your body weight (not just your arms), press straight down by 5 to 6cm (2 to 2.5 inches) on their chest.
            <br />
            Keeping your hands on their chest, release the compression and allow the chest to return to its original position.</p>
        </section>
        <section className="aid_manual_section">
          <h3>Video of CPR</h3>
          <div className="aid_manual_img">
            <img src={video} alt="" />
          </div>
        </section>
      </article>
    </div>
  )
}

export default AidManual