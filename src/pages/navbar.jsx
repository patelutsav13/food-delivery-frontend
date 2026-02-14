

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import UserIcon from "../assets/user.png";
// import logo from "../assets/logo.png";
// import Bag from "../assets/cartBag.png";
// import Admin from "./admin.jsx"
// function Navbar() {
//   const location = useLocation();

//   const linkClass = (path) =>
//     (location.pathname === path ? "text-red-500" : "text-black") +
//     " hover:text-red-500 focus:text-red-500 cursor-pointer";

//   return (
//     <div className="flex items-center justify-between px-10 py-3 font-sans bg-white shadow-2xl fixed top-0 left-0 right-0 z-[1000]">

//       <div className="ml-100 flex items-center gap-4 cursor-pointer text-4xl">
//         <div className="flex flex-col items-center">
//           <img src={logo} alt="Fresh Bites Logo" className="w-50 h-50" />
//           <h5 className="font-bold text-6xl hover:text-red-500">Fresh Bites</h5>
//         </div>

//         <div className="flex gap-8 ml-380 text-5xl font-bold">
//           <Link className={linkClass("/home")} to="/home">Home</Link>
//           <Link className={linkClass("/foods") + " ml-20"} to="/foods">Foods</Link>
//           <Link className={linkClass("/cart") + " ml-20"} to="/cart">Cart</Link>
//           <Link className={linkClass("/contact") + " ml-20"} to="/contact">Contact</Link>
//         </div>
//       </div>

//       <div className="flex gap-6 text-xl mr-100">
//           <Link to="/cart" className="ml-15">
//             <img src={Bag} alt="Cart" className="w-28 h-20" />
//           </Link>
//           <Link to="/admin" className="ml-15">
//             <img src={UserIcon} alt="User" className="w-28 h-20" />
//           </Link>
//       </div>
//     </div>


//   );
// }

// export default Navbar;


// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import UserIcon from "../assets/user.png";
// import logo from "../assets/logo.png";
// import Bag from "../assets/cartBag.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const linkClass = (path) =>
//     (location.pathname === path ? "text-red-500" : "text-black") +
//     " hover:text-red-500 block lg:inline-block py-2 cursor-pointer transition-colors";

//   return (
//     <nav className="bg-white h-auto lg:h-70 shadow-2xl fixed top-0 left-0 right-0 z-[1000] font-sans">
//       <div className="flex items-center justify-between py-3 px-6 lg:ml-[100px] lg:mr-[100px]">

//         <Link to="/home" className="flex flex-col items-center">
//           <img src={logo} alt="Fresh Bites Logo" className="w-30 h-30 lg:w-24 lg:h-24" />
//           <h5 className="font-bold text-xl lg:text-3xl hover:text-red-500 transition-colors">Fresh Bites</h5>
//         </Link>

//         <div className="hidden lg:flex gap-12 text-6xl font-bold">
//           <Link className={linkClass("/home")}  to="/home">Home</Link>
//           <Link className={linkClass("/foods")} to="/foods">Foods</Link>
//           <Link className={linkClass("/cart")} to="/cart">Cart</Link>
//           <Link className={linkClass("/contact")} to="/contact">Contact</Link>
//         </div>

//         <div className="flex items-center gap-4 lg:gap-8">
//           <Link to="/cart" className="relative">
//             <img src={Bag} alt="Cart" className="w-10 h-8 lg:w-16 lg:h-12" />
//           </Link>
//           <Link to="/admin">
//             <img src={UserIcon} alt="User" className="w-10 h-8 lg:w-16 lg:h-12" />
//           </Link>

//           <button 
//             className="lg:hidden text-4xl focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 px-10 py-6 flex flex-col gap-4 text-3xl font-bold shadow-inner">
//           <Link className={linkClass("/home")} to="/home" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link className={linkClass("/foods")} to="/foods" onClick={() => setIsOpen(false)}>Foods</Link>
//           <Link className={linkClass("/cart")} to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
//           <Link className={linkClass("/contact")} to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import UserIcon from "../assets/user.png";
// import logo from "../assets/logo.png";
// import Bag from "../assets/cartBag.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const linkClass = (path) =>
//     (location.pathname === path ? "text-red-500" : "text-black") +
//     " hover:text-red-500 block lg:inline-block py-2 cursor-pointer transition-colors";

//   return (
//     <nav className="bg-white lg:h-80 shadow-2xl fixed top-0 left-0 right-0 z-[1000] font-sans flex items-center">
//       <div className="flex items-center ml-0 lg:ml-100 mr-0 lg:mr-100 justify-between w-full py-3 px-6 lg:px-[100px] h-full">

//         <Link to="/" className="flex flex-col items-center justify-center">
//           <img src={logo} alt="Fresh Bites Logo" className="w-16 h-16 lg:w-50 lg:h-50 object-contain" />
//           <h5 className="font-bold text-xl lg:text-6xl hover:text-red-500 transition-colors">Fresh Bites</h5>
//         </Link>

//         <div className="hidden lg:flex gap-50 text-5xl font-bold items-center">
//           <Link className={linkClass("/")} to="/">Home</Link>
//           <Link className={linkClass("/foods")} to="/foods">Foods</Link>
//           <Link className={linkClass("/cart")} to="/cart">Cart</Link>
//           <Link className={linkClass("/contact")} to="/contact">Contact</Link>
//         </div>

//         <div className="flex items-center gap-6 lg:gap-12 h-full">
//           <Link to="/cart" className="relative flex items-center">
//             <img src={Bag} alt="Cart" className="w-10 h-8 lg:w-24 lg:h-20 object-contain" />
//           </Link>
//           <Link to="/admin" className="flex items-center">
//             <img src={UserIcon} alt="User" className="w-10 h-8 lg:w-24 lg:h-20 object-contain" />
//           </Link>

//           <button 
//             className="lg:hidden text-4xl focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full lg:hidden bg-white border-t border-gray-100 px-10 py-6 flex flex-col gap-4 text-3xl font-bold shadow-inner">
//           <Link className={linkClass("/home")} to="/home" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link className={linkClass("/foods")} to="/foods" onClick={() => setIsOpen(false)}>Foods</Link>
//           <Link className={linkClass("/cart")} to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
//           <Link className={linkClass("/contact")} to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem, saveCartToDB, clearCart } from "../redux/cartSlice";
import { ShoppingBag, User, Menu, X, LogOut, ChevronRight, Trash2, Plus, Minus } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for logged-in user
  useEffect(() => {
    const customerUser = localStorage.getItem('customerUser');
    if (customerUser) {
      try {
        setUser(JSON.parse(customerUser));
      } catch (err) {
        console.error('Error parsing user data:', err);
        localStorage.removeItem('customerUser');
      }
    }
  }, [location]);

  const handleLogout = async () => {
    if (user && cartItems.length > 0) {
      await dispatch(saveCartToDB(user._id, cartItems));
    }
    dispatch(clearCart());
    localStorage.removeItem('customerUser');
    setUser(null);
    navigate('/');
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/foods", label: "Foods" },
    { path: "/myorders", label: "My Orders" },
    { path: "/cart", label: "Cart" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] font-sans transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 shadow-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <img
                src={logo}
                alt="Fresh Bites"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Fresh Bites
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-bold transition-all duration-300 hover:-translate-y-0.5 ${location.pathname === link.path
                  ? "text-red-500 scale-105"
                  : "text-slate-700 hover:text-red-500"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-slate-100 transition-colors group"
            >
              <ShoppingBag className="w-6 h-6 text-slate-700 group-hover:text-red-500 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Menu (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-slate-200">
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-700">
                    Hi, {user.name.split(' ')[0]}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/admin"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl lg:hidden animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl font-semibold text-lg transition-colors ${location.pathname === link.path
                    ? "bg-red-50 text-red-600"
                    : "text-slate-600 hover:bg-slate-50"
                    }`}
                >
                  {link.label}
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </Link>
              ))}

              <div className="h-px bg-slate-100 my-2"></div>

              {user ? (
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-slate-700">{user.name}</span>
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="text-red-500 font-semibold text-sm flex items-center gap-2"
                  >
                    Logout <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3.5 bg-slate-900 text-white text-center rounded-xl font-bold shadow-md active:scale-95 transition-transform"
                >
                  Login / Sign Up
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer Output */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1001] transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[1002] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-red-500" />
                Your Cart <span className="text-slate-400 font-normal text-base">({cartCount})</span>
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 opacity-20" />
                  </div>
                  <p className="font-medium">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all bg-white">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-50 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-slate-800 line-clamp-1">{item.title}</h4>
                        <p className="text-red-500 font-bold text-sm">₹{item.price}</p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1">
                          <button
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-red-500"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-green-500"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => dispatch(removeItem(item.id))}
                          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-500 font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-slate-800">₹{cartTotal}</span>
                </div>
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-slate-200"
                >
                  Checkout Now
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;