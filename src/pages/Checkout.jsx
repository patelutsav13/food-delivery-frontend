import React, { useState, useEffect } from "react";
import CommonBanner from "../pages/CommonBanner";
import Footer from "../pages/Footer";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items } = useSelector(state => state.cart);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;
  const navigate = useNavigate();

  // Get logged-in customer
  const customerUser = JSON.parse(localStorage.getItem('customerUser'));
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(customerUser ? customerUser.email : "");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [orderStatus, setOrderStatus] = useState('pending');

  // Poll for order status updates
  useEffect(() => {
    if (!orderId) return;

    const interval = setInterval(async () => {
      try {
        const orders = await api.getOrdersByEmail(email);
        const currentOrder = orders.data.find(o => o._id === orderId);
        if (currentOrder) {
          setOrderStatus(currentOrder.status);
        }
      } catch (err) {
        console.error("Failed to fetch order status:", err);
      }
    }, 3000); // Check every 3 seconds

    return () => clearInterval(interval);
  }, [orderId, email]);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!username.trim()) return alert("Please enter your name");
    if (!email) return alert("Please log in first");
    if (items.length === 0) return alert("Cart is empty");

    try {
      const orderData = {
        username,
        email,
        foods: items.map(i => ({
          foodId: i.id,
          name: i.title,
          price: i.price,
          quantity: i.quantity
        })),
        totalPrice: total
      };

      const response = await api.createOrder(orderData);
      setOrderId(response.data._id);
      setOrderPlaced(true);
      setOrderStatus('pending');
    } catch (err) {
      console.error("Order error:", err);
      alert("Order failed. Please try again.");
    }
  };

  if (orderPlaced) {
    return (
      <>
        <div className="mt-20 sm:mt-32 md:mt-40 lg:mt-60 xl:mt-80">
          <CommonBanner title="Order Status" />
        </div>

        <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-8 sm:py-12 md:py-16 lg:py-20 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl w-full">
            {orderStatus === 'pending' && (
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-block animate-bounce mb-4">
                    <span className="text-6xl sm:text-7xl md:text-8xl">⏳</span>
                  </div>
                  <h2 className="text-yellow-700 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
                    Order Pending
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    Your order has been placed successfully! Waiting for admin approval...
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-inner">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 border-b-2 border-yellow-500 pb-2">
                    📋 Order Details
                  </h3>
                  <div className="space-y-2 sm:space-y-3 mb-4">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-700">{item.title} <span className="text-yellow-600">x {item.quantity}</span></span>
                        <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-3 sm:pt-4 border-t-2 border-yellow-500">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Total:</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-600">₹{total}</span>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-yellow-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-600 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-yellow-800">Checking status every 3 seconds...</span>
                  </div>
                </div>
              </div>
            )}

            {orderStatus === 'accepted' && (
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-block mb-4">
                    <span className="text-6xl sm:text-7xl md:text-8xl">✓</span>
                  </div>
                  <h2 className="text-green-700 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
                    Order Received!
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    Your order has been accepted! It will be delivered soon.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-inner">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 border-b-2 border-green-500 pb-2">
                    📋 Order Details
                  </h3>
                  <div className="space-y-2 sm:space-y-3 mb-4">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-700">{item.title} <span className="text-green-600">x {item.quantity}</span></span>
                        <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-3 sm:pt-4 border-t-2 border-green-500">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Total:</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600">₹{total}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/foods')}
                  className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold shadow-lg transform transition hover:scale-105"
                >
                  Continue Shopping →
                </button>
              </div>
            )}

            {orderStatus === 'rejected' && (
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-block mb-4">
                    <span className="text-6xl sm:text-7xl md:text-8xl">✗</span>
                  </div>
                  <h2 className="text-red-700 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
                    Order Canceled
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    Sorry, your order has been canceled by the admin.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setOrderPlaced(false);
                    setOrderId(null);
                    setOrderStatus('pending');
                  }}
                  className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold shadow-lg transform transition hover:scale-105"
                >
                  ← Try Again
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="mt-20 sm:mt-32 md:mt-40 lg:mt-60 xl:mt-80">
        <CommonBanner title="Checkout" />
      </div>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-8 sm:py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Shipping Address</h2>
          <form className="space-y-4 sm:space-y-6" onSubmit={handlePayment}>
            <input
              type="text"
              placeholder="Enter your name *"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b-2 border-gray-300 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl outline-none focus:border-red-500 transition"
              required
            />
            <input
              type="email"
              placeholder="Email (from login)"
              value={email}
              readOnly
              className="w-full border-b-2 border-gray-400 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl outline-none bg-gray-100 cursor-not-allowed"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-b-2 border-gray-300 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl outline-none focus:border-red-500 transition"
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border-b-2 border-gray-300 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl outline-none focus:border-red-500 transition"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border-b-2 border-gray-300 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl outline-none focus:border-red-500 transition"
            />
            <input
              type="text"
              placeholder="Postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full border-b-2 border-gray-300 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl outline-none focus:border-red-500 transition"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold shadow-lg transform transition hover:scale-105"
            >
              Place Order →
            </button>
          </form>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl space-y-3 sm:space-y-4 h-fit border-2 border-red-200">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 border-b-2 border-red-500 pb-2">
            🛒 Order Summary
          </h3>

          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {items.map(item => (
              <div key={item.id} className="flex justify-between text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2 border-b border-red-200">
                <span className="font-medium">{item.title} <span className="text-red-600">x {item.quantity}</span></span>
                <span className="font-bold">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-sm sm:text-base md:text-lg lg:text-xl border-t border-red-300 pt-3 sm:pt-4">
            <span className="font-semibold">Subtotal:</span>
            <span className="font-bold">₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base md:text-lg lg:text-xl">
            <span className="font-semibold">Shipping:</span>
            <span className="font-bold text-green-600">FREE</span>
          </div>
          <div className="flex justify-between text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold border-t-2 border-red-500 pt-3 sm:pt-4">
            <span>Total:</span>
            <span className="text-red-600">₹{total}</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;