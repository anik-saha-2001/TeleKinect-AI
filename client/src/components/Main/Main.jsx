import "./Main.css";
import Card from "../Card/Card";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="main">
      <div className="top">
        <div>
          <h2>KinectMind</h2>
        </div>
        <div className="profile-info">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="profile-pic"
          />
          <div className="profile-text">
            <strong>SUMIT BANIK</strong>
            <p>it.consulting@powertrackafrica.com</p>
          </div>
        </div>
      </div>

      <div className="center">
        <div>
          <h2>How may I help you?</h2>
        </div>
        <div className="cards-container">
          <div className="row">
            <Card text="How many drivers drove on 12th March?" />
            <Card text="Which vehicle type has more aggressive acceleration events on average?" />
          </div>
          <div className="row">
            <Card text="What was the maximum speed recorded across all drivers?" />
            <Card text="What is the shortest driving time recorded?" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <input type="text" placeholder="Ask Anything" />
        <BsArrowUpSquareFill className="bottom-icon" />
      </div>
    </div>
  );
};

export default Main;
