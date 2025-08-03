import React from "react"
import Navbar from "./Components/Navbar"
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kids_banner from "./assets/banner_kids.png"
import ShopCategory from "./pages/ShopCategory"
 
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="Men"/>} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="Women"/>} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="Kids"/>} />
          <Route path="/product" element={<Product />} />
           <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
