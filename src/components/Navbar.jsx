// import { useContext } from 'react'
// import { Link } from "react-router-dom"
// import { ThemeToggle } from "../context/ThemeToggle"
// import { BsFillSunFill } from "react-icons/bs";
// import { FaMoon } from "react-icons/fa";


// const Navbar = () => {
// const { theme, toggleTheme } = useContext(ThemeToggle);


//   return (
//     <div>
//         <nav
//           className="navbar navbar-expand-sm navbar-light bg-transparent"
//         >
//           <div className="container">
//             <Link className="navbar-brand" to="/"></Link>
//             <button
//               className="navbar-toggler d-lg-none"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapsibleNavId"
//               aria-controls="collapsibleNavId"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="collapsibleNavId">
//               <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
               
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/home">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/contact">Contact</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/project">Project</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/about">About</Link>
//                 </li>
//               </ul>
           
//             </div>

//             <button 
//               className="btn btn-sm border-0 bg-transparent"
//               onClick={toggleTheme}
//             >
//               {theme === "light" ? <FaMoon color='blue' size={15}/> : <BsFillSunFill color='yellow'size={15}/>}
//             </button>
           
//           </div>
       
//         </nav>
        
//     </div>
//   )
// }
// export default Navbar



import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
  { to: "/project", label: "Project" },
  { to: "/about", label: "About" },
];

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="#facc15" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <span className="logo">Gloria Eve</span>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
  <button
    className="menu-btn"
    onClick={() => setMenuOpen((o) => !o)}
    aria-label="Toggle menu"
    aria-expanded={menuOpen}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <button
    className="theme-btn"
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
  >
    {theme === "light" ? <MoonIcon /> : <SunIcon />}
  </button>
</div>
    </header>
  );
}
