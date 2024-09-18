import { Outlet, Link } from "react-router-dom";
import './Layout.css'; // Import the CSS file

const Layout = () => {
  return (
    <>
      <header className="navbar">
        <h2>Isabella Porras</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
};

export default Layout;