
// import { useState, useContext} from 'react'

// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { ThemeToggle } from "./context/ThemeToggle"
// import Stars from "./components/Stars"


// import Home from "./pages/Home"
// import Contact from "./pages/Contact"
// import Project from "./pages/Project"
// import About from "./pages/About"
// import Navbar from "./components/Navbar"


// function App() {

//    const { theme } = useContext ( ThemeToggle );

// const themeStyle = {
//   backgroundColor: theme === "light" ? "#fff" : "transparent",
//   color: theme === "light" ? "#000" : "#fff",
//   minHeight: "100vh",
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   position: "relative",
//   zIndex: 1,

// }



//   return (
//     <div>
//       {theme === "dark" && <Stars />}
//       <p className="text-primary heading">Gloria Eve</p>
//       <BrowserRouter>
//         <div style={themeStyle}>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/contact" element={<Contact/>} />
//             <Route path="/project" element={<Project/>} />
//             <Route path="/about" element={<About/>} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeToggle";
import Stars from "./components/Stars";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import About from "./pages/About";


function App() {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" && <Stars />}
      <div className="app">
        <Navbar />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}



export default App;