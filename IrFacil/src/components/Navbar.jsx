import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo"> <Link to="/">IR Fácil</Link></div>

      {/* Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
      </nav>
    </header>
  );
}
