// import logo from './logo.svg';
// import './App.css';
// import Navbar from "./Skovo/Navbar";
// import Hero from "./Skovo/Hero";
// import Footer from "./Skovo/Footer";
// import ContactSection from "./Skovo/ContactSection";
// import ServicesSection from "./Skovo/ServicesSection";
// import CareerPathsSection from './Skovo/CareerPathsSection';
// import Login from './Skovo/Login';
// function App() {
//   return (
//     <>
//     <Login/>
//     {/* <>
//     <Navbar/>
//     <Hero/>
//     <ServicesSection/>
//     <CareerPathsSection/>
//     <ContactSection/>
//     <Footer/>
    
//     </> */}
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from "./Skovo/Navbar";
import Hero from "./Skovo/Hero";
import Footer from "./Skovo/Footer";
import ContactSection from "./Skovo/ContactSection";
import ServicesSection from "./Skovo/ServicesSection";
import CareerPathsSection from './Skovo/CareerPathsSection';
import Login from './Skovo/Login';

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        // Main application content when logged in
        <>
          <Navbar onLogout={handleLogout} />
          <Hero />
          <ServicesSection />
          <CareerPathsSection />
          <ContactSection />
          <Footer />
        </>
      ) : (
        // Login page when not logged in
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;