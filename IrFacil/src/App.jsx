import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
