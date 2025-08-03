import React, { useState, useEffect, createContext } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= 100; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Load products and user cart on mount
  useEffect(() => {
    fetchProducts();
    const token = localStorage.getItem("token");
      if (token) {
        fetchUserCart();
      }else{
        console.warn("No token found in the storage")
      }
  }, []);

  const fetchProducts = () => {
    fetch("http://localhost:3000/allproducts")
      .then((res) => res.json())
      .then((data) => setAll_Product(data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  const fetchUserCart = () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    fetch("http://localhost:3000/getcart", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) =>{
        return res.json();
      })
      .then((data) => {
        const serverCart = data.cart || [];
        const updatedCart = {};
        serverCart.forEach((item) => {
          updatedCart[item.productId] = item.quantity;
        });
        setCartItems(updatedCart);
      })
      .catch((err) => console.error("Failed to fetch user cart:", err));
  };

  const addToCart = (itemId) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setCartItems((prev) => ({
      ...prev,
      [itemId]: Number(prev[itemId] || 0) + 1,
    }));

    fetch("http://localhost:3000/addtocart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: itemId }),
    })
      .then((res) => res.json())
      .then((data) => (data))
      .catch((err) => console.log('Error found:',err));
  };

  const removeFromCart = (itemId) => {
    const token = localStorage.getItem('token')
    if(!token) return;

    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(Number(prev[itemId] || 0) - 1, 0),
    }));
    
    fetch('http://localhost:3000/removefromcart',{
      method: "POST",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({productId: itemId}),
    })
    .then((res) => res.json())
    .then((data) => console.log("Product has been remove from the cart",data))
    .catch((err) => console.error("Failed to remove from the cart", err))
  };

  const clearCart = () => {
    setCartItems({});
    // Optional: Sync with backend if needed
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = all_product.find((p) => p.id === Number(itemId));
        if (product) {
          totalAmount += product.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
    fetchUserCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
