import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const items = [
    { id: 1, name: "Dashboard", link: "/item1", imageSrc: "Category.svg" },
    { id: 2, name: "Upload", link: "/item2", imageSrc: "Chart.svg" },
    { id: 3, name: "Invoice", link: "/item3", imageSrc: "Ticket.svg" },
    { id: 4, name: "Schedule", link: "/item4", imageSrc: "Document.svg" },
    { id: 5, name: "Calendar", link: "/item5", imageSrc: "Calendar.svg" },
    {
      id: 6,
      name: "Notification",
      link: "/item6",
      imageSrc: "Notification.svg",
    },
    { id: 7, name: "Settings", link: "/item7", imageSrc: "Setting.svg" },
  ];
  return (
    <div id="sidebar">
      <div className="navbar-container">
        <div className="image-container">
          <img src="Subtract.svg" alt="Logo of Base" />
        </div>
        <div className="text-container">
          <span>Base</span>
        </div>
      </div>
      <div className="items">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.imageSrc} alt={item.name} />
              <a href={item.link}>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
