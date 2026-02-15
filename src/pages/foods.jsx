import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ShoppingBag, Star, Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { api } from "../services/api";
import Navbar from "./navbar";
import Footer from "./Footer";
import CommonBanner from "./CommonBanner";

import { getImageUrl } from "../utils/urlHelper";

const Foods = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getFoods()
      .then(res => {
        setFetchedProducts(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load foods:", err);
        setIsLoading(false);
      });
  }, []);

  const filteredFoods = useMemo(() => {
    let result = fetchedProducts.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortType === "Alphabetically, A-Z") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sortType === "Alphabetically, Z-A") result.sort((a, b) => b.name.localeCompare(a.name));
    if (sortType === "High Price") result.sort((a, b) => b.price - a.price);
    if (sortType === "Low Price") result.sort((a, b) => a.price - b.price);
    return result;
  }, [searchTerm, sortType, fetchedProducts]);

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleAddToCart = (food) => {
    dispatch(addItem({
      id: food._id,
      title: food.name,
      price: food.price,
      image: getImageUrl(food.image),
      category: food.category
    }));
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <div className="pt-20 lg:pt-24">
        <CommonBanner title="Our Menu" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-20">

        {/* Search and Filter Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">

          {/* Search Input */}
          <div className="relative w-full lg:max-w-xl group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for your favorite food..."
              className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl transition-all duration-300 font-medium"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full lg:w-64">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-slate-400" />
            </div>
            <select
              className="block w-full pl-12 pr-10 py-4 bg-slate-50 border-transparent text-slate-900 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl appearance-none cursor-pointer font-bold transition-all duration-300"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option>Default</option>
              <option>Alphabetically, A-Z</option>
              <option>Alphabetically, Z-A</option>
              <option>High Price</option>
              <option>Low Price</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-red-100 transition-all duration-500 group relative flex flex-col overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 w-full mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group-hover:bg-red-50/30 transition-colors">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.name}
                    className="h-40 w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <Link to={`/foods`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 truncate group-hover:text-red-500 transition-colors">
                      {item.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">({Math.floor(Math.random() * 50) + 10} reviews)</span>
                  </div>

                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Price</span>
                      <span className="text-2xl font-extrabold text-slate-900">₹{item.price}</span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-200 hover:bg-red-600 active:scale-90 transition-all duration-300 group/btn"
                    >
                      <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-700">No foods found</h3>
            <p className="text-slate-500">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex flex-wrap justify-center items-center gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${currentPage === 1
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-white text-slate-700 hover:bg-red-50 hover:text-red-500 shadow-sm hover:shadow-md"
                }`}
            >
              <ChevronLeft className="w-5 h-5" /> Prev
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold transition-all duration-300 ${currentPage === index + 1
                    ? "bg-red-500 text-white shadow-lg shadow-red-200 scale-110"
                    : "bg-white text-slate-700 hover:bg-slate-50 shadow-sm"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${currentPage === totalPages
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-white text-slate-700 hover:bg-red-50 hover:text-red-500 shadow-sm hover:shadow-md"
                }`}
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Foods;
