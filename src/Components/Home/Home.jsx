import React from "react";
import './Home.css'
import Nasiba from './nasiba.png'
function Home() {
    return(
        <div className="Home-Page" >
            <div className="Flex">
                <img className="Img-Border" width={"150px"} src={Nasiba} alt="" />
            </div>
            <div className="Text">
                <p>🦋 Nasiba 🦋</p>
            </div>
            <div className="Text2">
                 <p>✨Assertive Young Lady <br /> 🎓Ajou | Computer Engineering  <br /> 🌱On the path toward self-realization  <br />  🗣️ Founder of “Speak For Success”, <br />an Online Speaking Course  </p>
            </div>

        </div>
    )
}

export default Home;