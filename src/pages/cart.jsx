import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartSlice";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import CommonBanner from "../pages/CommonBanner";
import Footer from "../pages/Footer";
import Navbar from "./navbar";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <div className="pt-20 lg:pt-24">
          <CommonBanner title="Your Cart" />
        </div>

        <div className="flex-grow flex flex-col items-center justify-center py-20 px-4">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="w-12 h-12 text-red-500 opacity-50" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Your cart is empty</h1>
          <p className="text-slate-500 mb-8 text-center max-w-md">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/foods"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-200 transition-all transform hover:-translate-y-1"
          >
            Start Shopping <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <div className="pt-20 lg:pt-24">
        <CommonBanner title="Your Cart" />
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Cart Items List */}
          <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-red-500" /> Cart Items ({items.length})
              </h2>

              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    {/* Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-50 rounded-2xl flex-shrink-0 p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center sm:text-left w-full">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-red-600 font-bold text-xl mb-4">₹{item.price}</p>

                      <div className="flex items-center justify-center sm:justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-1">
                          <button
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-600 hover:text-red-500 font-bold transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-600 hover:text-green-600 font-bold transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => dispatch(removeItem(item.id))}
                          className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-red-500 transition-colors py-2 px-3 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 md:p-8 sticky top-32">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">₹{total}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <div className="h-px bg-slate-100 my-4"></div>
                <div className="flex justify-between text-xl font-bold text-slate-900">
                  <span>Total</span>
                  <span className="text-red-600">₹{total}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/checkout"
                  className="block w-full py-4 bg-red-600 text-white rounded-xl font-bold text-center hover:bg-red-700 hover:shadow-lg hover:shadow-red-200 transition-all transform hover:-translate-y-1"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/foods"
                  className="block w-full py-4 bg-slate-100 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-200 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>

              <p className="text-xs text-slate-400 text-center mt-6">
                Secure Checkout - 100% Satisfaction Guarantee
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;