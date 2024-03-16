import preview from "../images/drawers.jpg";
import profile from "../images/avatar-michelle.jpg";
import share from "../images/icon-share.svg";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import { useState } from "react";

function App() {
  const [btnClicked, setBtnClicked] = useState<boolean>(false);

  function btnClickedHandler() {
    setBtnClicked((val) => (val = !val));
  }

  return (
    <>
      <main>
        <img id="preview" src={preview} alt="" />
        <div className="content">
          <h1>Shift the overall look and feel by adding htese wonderful touches to furniture in your home</h1>
          <p>
            Ever been in a room and felt like something was missing? Perhabs it felt slightly bare and uninviting. I've
            got some simple tips to help you make any room feel complete.
          </p>
          <div className={`shared-items-wrapper${btnClicked ? " mobile-color" : ""}`}>
            <div className="share-profile">
              <img className="profile" src={profile} alt="" />
              <div className="author">
                <h2>Michelle Appleton</h2>
                <span>28 Jun 2020</span>
              </div>
            </div>

            {btnClicked && (
              <div className="share-menu">
                <h2>SHARE</h2>
                <img src={facebook} alt="" />
                <img src={pinterest} alt="" />
                <img src={twitter} alt="" />
              </div>
            )}
            <div onClick={btnClickedHandler} className="shared">
              <img src={share} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

{
  /* <>
  <img className="profile" src={profile} alt="" />
  <div className="author">
    <h2>Michelle Appleton</h2>
    <span>28 Jun 2020</span>
  </div>
  <div className="share-menu">
    <h2>SHARE</h2>
    <img src={facebook} alt="" />
    <img src={pinterest} alt="" />
    <img src={twitter} alt="" />
  </div>
</>; */
}
