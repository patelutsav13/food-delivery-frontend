import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronRight, Star, Clock, Flame } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { api } from "../services/api";

import Bike from "../assets/bike.png";
import Car from "../assets/car.png";
import Shield from "../assets/shield.png";
import Img1 from "../assets/image.png";
import Img2 from "../assets/image1.png";
import Img3 from "../assets/image2.png";
import Img4 from "../assets/image3.png";
import Img7 from "../assets/image6.png";
import Img8 from "../assets/image7.png";
import Img9 from "../assets/image8.png";
import Img22 from "../assets/image22.png";
import Footer from "./Footer";
import Navbar from "./navbar";

const getCategoryIcon = (categoryName) => {
  const iconMap = {
    'Burger': '🍔',
    'Pizza': '🍕',
    'Snacks': '🍟',
    'Drinks': '🥤',
    'Desserts': '🍰',
    'Salad': '🥗',
    'Sandwich': '🥪',
    'Pasta': '🍝',
    'Noodles': '🍜',
    'Rice': '🍚',
    'Soup': '🥣',
    'Chicken': '🍗',
    'Seafood': '🍤',
    'Vegetarian': '🥦',
    'Coffee': '☕',
    'Juice': '🧃',
    'Ice Cream': '🍦',
    'Cake': '🎂',
  };

  return iconMap[categoryName] || '🍽️';
};

import { getImageUrl } from "../utils/urlHelper";

const testimonials = [
  {
    id: 1,
    name: "Shivangi Joshi",
    text: "Fresh Bites lives up to its name! Every bite bursts with freshness and flavor. From the crisp salads to the hearty sandwiches, each dish is a delightful journey for the taste buds.",
    avatar: "https://tse3.mm.bing.net/th/id/OIP.cLFlG9qe5tbHezzUfrb1EQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    name: "Virat Kohli",
    text: "Fresh Bites combines convenience with quality like no other. Ordering online is a breeze, and the food arrives promptly, still retaining its freshness. It's the perfect solution for busy days without compromising on taste.",
    avatar: "https://tse1.mm.bing.net/th/id/OIP.4aM4ETKxJ5AJKORVUdEhHAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 3,
    name: "Rohit Sharma",
    text: "Fresh Bites redefines freshness with every dish. I couldn't believe the difference in taste until I tried their farm-to-table ingredients. It's like they've captured the essence of freshness in every bite.",
    avatar: "https://images.news18.com/ibnlive/uploads/2024/07/rohit-sharma-1-2024-07-f31b2b81746e93de6ab1c683fc455ff0-16x9.jpg"
  }
];

function Home() {
  const [active, setActive] = useState("All");
  const [current, setCurrent] = useState(0);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    api.getCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.error("Failed to load categories:", err));

    api.getFoods()
      .then(res => setFetchedProducts(res.data))
      .catch(err => console.error("Failed to load foods:", err));
  }, []);

  const filteredProducts = active === "All"
    ? fetchedProducts
    : fetchedProducts.filter(p => p.category === active);

  const handleAddToCart = (product) => {
    dispatch(addItem({
      id: product._id,
      title: product.name,
      price: product.price,
      image: getImageUrl(product.image),
      category: product.category
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-72 h-72 rounded-full bg-orange-50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">

          <div className="w-full lg:w-1/2 flex flex-col items-center text-center z-10 ml-100">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              Easy way to make an order
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              <span className="text-red-600">HUNGRY?</span> Just wait <br />
              food at <span className="text-red-600">your door</span>
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Welcome to Fresh Bites, your ultimate destination for delicious and fresh online food ordering!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <button className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 hover:shadow-red-200 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Order Now <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                to="/foods"
                className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-100 rounded-xl font-bold text-lg hover:border-red-200 hover:text-red-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                See All Foods
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <img src={Car} alt="Car" className="w-5 h-5 object-contain" />
                </div>
                No Shipping Charge
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <img src={Shield} alt="Shield" className="w-5 h-5 object-contain" />
                </div>
                100% Secure Checkout
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center z-10 ml-100">
            <img
              src={Bike}
              alt="Bike"
              className="w-full max-w-xl object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-700"
            />
          </div>
        </div>
      </div>

      {/* Category Features */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { img: Img1, label: "Gujrati" },
            { img: Img2, label: "Drinks" },
            { img: Img3, label: "Desserts" },
            { img: Img4, label: "All" }
          ].map((category, idx) => (
            <div
              key={idx}
              onClick={() => setActive(category.label)}
              className={`group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer ${active === category.label ? 'border-red-500 ring-2 ring-red-200' : ''}`}
            >
              <img src={category.img} alt={category.label} className="w-20 h-20 mx-auto object-contain mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-lg text-slate-800">{category.label}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Foods Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular Foods</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From wholesome salads to savory entrees and delightful desserts, there's something to satisfy every craving.
          </p>
        </div>

        {/* Improved Category Filter */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 mb-10 overflow-x-auto">
          <div className="flex items-center justify-center gap-2 min-w-max p-2">
            <button
              onClick={() => setActive("All")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${active === "All"
                ? "bg-red-500 text-white shadow-lg shadow-red-200"
                : "bg-transparent text-slate-500 hover:bg-slate-50"
                }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat._id}
                onClick={() => setActive(cat.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${active === cat.name
                  ? "bg-red-500 text-white shadow-lg shadow-red-200"
                  : "bg-transparent text-slate-500 hover:bg-slate-50"
                  }`}
              >
                <span className="text-lg">{getCategoryIcon(cat.name)}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-red-100 transition-all duration-500 group relative flex flex-col overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-48 w-full mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden">
                <img
                  src={getImageUrl(item.image)}
                  alt={item.name}
                  className="h-40 w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
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
                    className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-200 hover:bg-red-600 active:scale-90 transition-all duration-300"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Fresh Bites Section */}
      <div className="bg-white py-24 mb-20 section-curve-top">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center gap-12 text-center">
            <div className="w-full max-w-2xl">
              <img src={Img22} alt="Features" className="w-full mx-auto" />
            </div>

            <div className="w-full max-w-3xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Fresh Bites?</h2>
              <p className="text-lg text-slate-600 mb-10">
                At Fresh Bites, we're not just a food service — we're a culinary journey. Discover the unparalleled freshness and taste that sets us apart.
              </p>

              <div className="space-y-8">
                {[
                  { t: "Fresh and tasty foods", d: "Indulge in a world of fresh and tasty foods meticulously prepared by our talented chefs." },
                  { t: "Quality support", d: "At Fresh Bites, we pride ourselves on delivering not only exceptional food but also outstanding customer support." },
                  { t: "Order from any location", d: "With our convenient platform, delicious food is always just a tap away." }
                ].map((point, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold text-xl">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">{point.t}</h4>
                      <p className="text-slate-500 leading-relaxed">{point.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: Img7, title: "Quick Delivery", desc: "Experience lightning-fast delivery with Fresh Bites." },
            { img: Img8, title: "Super Dine In", desc: "Experience the ultimate dining convenience with Super Dine In." },
            { img: Img9, title: "Easy Pick Up", desc: "Enjoy the convenience of easy pick-up options." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all duration-300">
              <img src={feature.img} alt={feature.title} className="w-24 h-24 mx-auto mb-6 object-contain" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="bg-red-50 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center gap-12">
          <div className="w-full max-w-3xl">
            <span className="text-red-500 font-bold tracking-wider uppercase mb-2 block">Testimonials</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">What our <span className="text-red-600">customers</span> are saying</h2>

            <div className="relative min-h-[300px] flex items-center justify-center">
              {testimonials.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute top-0 w-full transition-all duration-500 ease-in-out flex flex-col items-center ${index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
                    }`}
                >
                  <p className="text-2xl italic text-slate-600 mb-8 leading-relaxed">"{item.text}"</p>
                  <div className="flex flex-col items-center gap-4">
                    <img src={item.avatar} className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover" alt={item.name} />
                    <span className="font-bold text-lg text-slate-900">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-red-600" : "w-3 bg-red-200"}`}
                />
              ))}
            </div>
          </div>

          <div className="w-full max-w-md flex justify-center">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/customer-review-illustration-download-in-svg-png-gif-file-formats--feedback-rating-stars-business-expressions-pack-illustrations-3682974.png" alt="Testimonial" className="w-full object-contain mix-blend-multiply opacity-90" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
