import React from "react";
import {
  IoIosCash,
  IoIosRocket,
  IoIosHelpBuoy,
  IoIosSquare,
  IoIosArrowDropright,
  IoIosArrowUp,
} from "react-icons/io";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
} from "react-icons/bs";
import profile from "./images/profile.jpeg";
import { useState } from "react";


function Sidebar({ openSidebarToggle, OpenSidebar }) {

    // Initializing the state to manage the selected value
    const [selectedItem, setSelectedItem] = useState('Dashboard');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="upper-sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <IoIosSquare className="icon_header" /> {selectedItem}
          </div>
          <span className="icon close_icon" onClick={OpenSidebar}>
            X
          </span>
        </div>

        <ul className="sidebar-list">
          <li className={`sidebar-list-item ${selectedItem === 'Dashboard' ? 'selected' : ''}`} onClick={() => handleItemClick('Dashboard')}>
            <a href="#">
              <BsGrid1X2Fill className="icon" /> Dashboard
            </a>
            <IoIosArrowDropright className="arrow-right" />
          </li>
          <li className={`sidebar-list-item ${selectedItem === 'Products' ? 'selected' : ''}`} onClick={() => handleItemClick('Products')}>
            <a href="">
              <BsFillArchiveFill className="icon" /> Products
            </a>
            <IoIosArrowDropright className="arrow-right" />
          </li>
          <li className={`sidebar-list-item ${selectedItem === 'Customers' ? 'selected' : ''}`} onClick={() => handleItemClick('Customers')}>
            <a href="">
              <BsPeopleFill className="icon" /> Customers
            </a>
            <IoIosArrowDropright className="arrow-right" />
          </li>
          <li className={`sidebar-list-item ${selectedItem === 'Income' ? 'selected' : ''}`} onClick={() => handleItemClick('Income')}>
            <a href="">
              <IoIosCash className="icon" /> Income
            </a>
            <IoIosArrowDropright className="arrow-right" />
          </li>
          <li className={`sidebar-list-item ${selectedItem === 'Promote' ? 'selected' : ''}`} onClick={() => handleItemClick('Promote')}>
            <a href="">
              <IoIosRocket className="icon" /> Promote
            </a>
            <IoIosArrowDropright className="arrow-right" />
          </li>
          <li className={`sidebar-list-item ${selectedItem === 'Help' ? 'selected' : ''}`} onClick={() => handleItemClick('Help')}>
            <a href="">
              <IoIosHelpBuoy className="icon" /> Help
            </a>
            <IoIosArrowDropright className="arrow-right" />
          </li>
        </ul>
      </div>

      <div className="profile-container">
        <div className="profile-image">
          <img src={profile} alt="Profile" />
        </div>
        <div className="profile-details">
          <p>John</p>
          <p>Project Manager</p>
        </div>
        <div className="profile-arrow">
          <IoIosArrowUp className="arrow-up" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
