import React, { useState } from "react";
import "./NavBar.css";

const sections = [
  { id: "message", label: "Message" },
  { id: "ourstory", label: "Our Story" },
  { id: "details", label: "Details" },
  { id: "ceremony", label: "Ceremony" },
  { id: "rsvp", label: "RSVP" },
  { id: "places", label: "Places to Stay" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">Gill & Keegan</a>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          &#9776;
        </button>
      </div>
      <ul className={`navbar-links${open ? " open" : ""}`}>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} onClick={() => setOpen(false)}>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;