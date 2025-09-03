import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">IR Fácil</Link></div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/saiba-mais" className="nav-link">Quem Somos</Link>
        <Link to="/contato" className="nav-link">Contato</Link>
      </div>
    </nav>
  );
}
