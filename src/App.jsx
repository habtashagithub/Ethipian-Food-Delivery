import React, { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Cart from "./Pages/cart/Cart";
import PlaceOrder from "./Pages/placeOrder/PlaceOrder";
import Footer from "./Components/footer/Footer";
import LogInPopUp from "./Components/loginPopup/LogInPopUp";
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LogInPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
