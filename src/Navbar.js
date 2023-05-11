import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./assets/logo.png";
import launchapp from "./assets/launchapp.png";
export default function Navbar() {
  return (
    <nav className="navbar nav">
      <Link to="/">
      <img src={logo} alt="logo" />
      </Link>
      <ul className="mr-auto">
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Gallery">Gallery</CustomLink>
        <CustomLink to="/FAQs">FAQs</CustomLink>
        <Link to="/">
            <img src={launchapp} alt="launchapp" />
        </Link>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}