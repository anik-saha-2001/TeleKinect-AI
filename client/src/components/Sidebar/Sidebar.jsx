import "./Sidebar.css";
import { IoIosArrowDropleftCircle, IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { HiChartSquareBar } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { FaMoneyBills, FaCircleUser } from "react-icons/fa6";
// import { useState } from "react";

const Sidebar = () => {
  // const [extended, setExtended] = useState(true);

  return (
    <div className="sidebar">
      <div className="top">
        <h2>TeleKinect AI</h2>
        <p>AI Based Telematics</p>
        <IoIosArrowDropleftCircle className="arrow" />
      </div>
      <div className="center">
        <ul>
          <li>
            <GoHomeFill className="icon" /> Home
          </li>
          <li>
            <AiFillMessage className="icon" />
            KinectMind
          </li>
          <li>
            <HiChartSquareBar className="icon" />
            Dashboard
          </li>
          <li>
            <FaBell className="icon" />
            Notifications
          </li>
          <li>
            <FaMoneyBills className="icon" />
            Plans
          </li>
          <li>
            <FaCircleUser className="icon" />
            Profiles
          </li>
          <li>
            <IoMdSettings className="icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <IoLogOut className="icon" />
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
