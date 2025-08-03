import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartItems, clearCart } = useContext(ShopContext);
  
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearCart();
    setMobileMenuOpen(false);
    navigate("/login");
  };

  return (
    <div>
      <nav className="bg-white shadow-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo and Search */}
          <div className="flex items-center flex-1">
            <span className="text-2xl font-bold text-blue-600 mr-4">
              TrencShop
            </span>
            <form className="flex items-center border rounded-md px-2 py-1 border-gray-300 focus-within:border-blue-600 w-full max-w-xs">
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent text-gray-600 px-2 w-full"
              />
              <button type="submit" className="text-gray-600 hover:text-blue-600 px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Shop</Link>
              <Link to="/mens" className="text-gray-700 hover:text-blue-600 font-medium">Mens</Link>
              <Link to="/womens" className="text-gray-700 hover:text-blue-600 font-medium">Womens</Link>
              <Link to="/kids" className="text-gray-700 hover:text-blue-600 font-medium">Kids</Link>
            </div>

            {/* Login or Logout */}
            {token ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-600 rounded-md text-red-600 hover:bg-red-600 hover:text-white transition-colors font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A4 4 0 017 16h10a4 4 0 011.879.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Login
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative text-gray-600 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {getTotalCartItems()}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white shadow-2xl flex flex-col">
            <div className="flex justify-end p-4">
              <button
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-4 pt-2 pb-6 flex flex-col space-y-2 flex-1">
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
              <Link to="/mens" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Mens</Link>
              <Link to="/womens" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Womens</Link>
              <Link to="/kids" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Kids</Link>

              {token ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white font-medium mt-2"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block text-center text-gray-700 hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Signup
                  </Link>
                </>
              )}

              <Link
                to="/cart"
                className="relative text-gray-600 hover:text-blue-600 flex justify-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {getTotalCartItems()}
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
