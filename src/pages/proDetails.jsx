

// // src/pages/proDetails.jsx in ReactFoodsApp/foodApp (updated to use fetched data)
// import React, { useState, useEffect } from "react";
// import { useParams , Link} from "react-router-dom";
// import CommonBanner from "./CommonBanner";
// import Footer from "./Footer";
// import { products } from "./home";

// import { useDispatch } from 'react-redux';
// import { addItem } from '../redux/cartSlice';

// function ProDetails() {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const [fetchedProducts, setFetchedProducts] = useState(products);
//   const product = fetchedProducts.find(p => p.id === Number(id));

//   useEffect(() => {
//     const savedItems = localStorage.getItem('foodItems');
//     if (savedItems) {
//       setFetchedProducts(JSON.parse(savedItems));
//     }
//   }, []);

//   const relatedImages = fetchedProducts
//     .filter(p => p.category === product?.category)
//     .slice(0, 3);

//   const [mainImage, setMainImage] = useState(product?.image);
//   const [activeTab, setActiveTab] = useState("desc");

//   if (!product) {
//     return <h1 className="text-center text-5xl mt-40">Product Not Found</h1>;
//   }

//   const handleAddToCart = () => {
//     dispatch(addItem(product));
//   };

//   return (
//     <>
//       <div className="mt-80 ">
//         <CommonBanner title={product.title}/> 

//       <div className="px-6 md:px-20 lg:px-40 py-20 mt-50 ml-100">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

//           <div className="flex gap-14 mt-12">
            
//             <div className="flex flex-col gap-10 mt-10">
//               {relatedImages.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img.image}
//                   onClick={() => setMainImage(img.image)}
//                   className="
//                     w-32 h-32 
//                     md:w-36 md:h-36 
//                     lg:w-60 lg:h-60
//                     object-contain 
//                     border-2 border-red-500 
//                     rounded-2xl 
//                     cursor-pointer 
//                   "
//                   alt="preview"
//                 />
//               ))}
//             </div>

//             <div className="flex-1 flex justify-center w-200 ml-100 h-300">
//               <img
//                 src={mainImage}
//                 className="
//                   w-full 
//                   max-w-sm 
//                   md:max-w-md 
//                   lg:max-w-lg 
//                   h-300
//                   border-2 border-red-500 
//                   rounded-2xl 
//                   cursor-pointer
//                   object-contain
//                 "
//                 alt={product.title}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-12 ml-100 mt-10">
//             <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-blue-950">
//               {product.title}
//             </h1>

//             <h2 className="text-red-500 text-4xl md:text-6xl lg:text-8xl font-bold">
//               ₹{product.price}
//             </h2>

//             <div className="flex items-center gap-6">
//               <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-950">
//                 Category :
//               </span>
//               <span className="bg-red-100 text-red-600 px-6 py-3 rounded-xl text-2xl md:text-4xl lg:text-5xl font-bold">
//                 {product.category}
//               </span>
//             </div>

//             <button onClick={handleAddToCart} className="
//               mt-8 
//               bg-red-500 
//               text-white 
//               px-14 
//               py-6 
//               rounded-2xl 
//               text-3xl 
//               md:text-4xl 
//               lg:text-6xl 
//               font-bold 
//               hover:bg-blue-950 
//               transition 
//               w-fit
//             ">
              
//               Add to Cart
//             </button>
//           </div>

//         </div>
//       </div>

//          <div className="px-6 md:px-20 lg:px-40 mb-40">
        
//         <div className="flex gap-10 border-b border-red-200 pb-4">
//           <button
//             onClick={() => setActiveTab("desc")}
//             className={`text-2xl lg:text-5xl font-bold ${
//               activeTab === "desc" ? "text-red-500 border-red-500" : "text-blue-950"
//             }`}
//           >
//             Description
//           </button>

//           <button
//             onClick={() => setActiveTab("review")}
//             className={`text-2xl lg:text-5xl font-bold ${
//               activeTab === "review" ? "text-red-500  border-red-500" : "text-blue-950"
//             }`}
//           >
//             Review
//           </button>
//         </div>

//         {activeTab === "desc" && (
//           <div className="mt-10 text-gray-600 text-xl lg:text-5xl leading-relaxed max-w-5xl">
//             Enjoy the delicious taste of <span className="font-bold">{product.title}</span> made
//             with premium ingredients and crafted to perfection. Fresh, flavorful and satisfying —
//             a must-try from Fresh Bites.
//           </div>
//         )}

//         {activeTab === "review" && (
//           <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20">

//             <div className="space-y-10">
//               {[1, 2, 3].map(i => (
//                 <div key={i}>
//                   <h3 className="text-2xl lg:text-4xl font-bold">Utsav Patel</h3>
//                   <p className="text-gray-400 text-lg lg:text-2xl">patelutsav312@gmail.com</p>
//                   <p className="text-gray-600 text-xl lg:text-4xl mt-2">great product</p>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-red-50 p-10 rounded-2xl">
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full bg-transparent border-b border-gray-300 py-4 mb-6 outline-none text-4xl"
//               />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full bg-transparent border-b border-gray-300 py-4 mb-6 outline-none text-4xl"
//               />
//               <textarea
//                 placeholder="Write your review"
//                 rows="4"
//                 className="w-full bg-transparent border-b border-gray-300 py-4 mb-8 outline-none text-4xl resize-none"
//               ></textarea>

//               <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold w-70 h-20 text-5xl">
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//     <div className="mt-40 ml-40 mb-30">
//         <h2 className="text-blue-950 text-5xl font-bold mb-20">
//             You might also like
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
//             {fetchedProducts
//                 .filter(p => p.category === product.category)
//                 .map(item => (
//                 <div
//                     key={item.id}
//                     className="border-2 border-red-500 rounded-2xl p-6 overflow-hidden flex flex-col items-center hover:shadow-2xl transition duration-300"
//                 >
//                     <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-40 lg:w-100 h-40 lg:h-100 transition-all duration-700 ease-in-out hover:scale-110 object-contain"
//                     />

//                     <Link to={`/product/${item.id}`}>
//                     <h2 className="text-2xl lg:text-5xl font-bold text-center mt-6 cursor-pointer hover:text-red-500 transition">
//                     {item.title}
//                     </h2>
//                     </Link>

//                     <div className="flex justify-between items-center w-full mt-8">
//                     <span className="text-red-500 text-3xl lg:text-6xl font-bold">
//                         ₹{item.price}
//                     </span>

//                     <button onClick={() => dispatch(addItem(item))} className="bg-red-500 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-xl lg:rounded-2xl text-xl md:text-2xl lg:text-5xl font-semibold">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//             ))}
//         </div>
//         </div>

//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ProDetails;



// import React, { useState, useEffect } from "react";
// import { useParams , Link} from "react-router-dom";
// import CommonBanner from "./CommonBanner";
// import Footer from "./Footer";

// import { useDispatch } from 'react-redux';
// import { addItem } from '../redux/cartSlice';

// // ────────────────────────────────────────────────
// import { api } from "../services/api";
// // ────────────────────────────────────────────────

// function ProDetails() {
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const [mainImage, setMainImage] = useState("");
//   const [activeTab, setActiveTab] = useState("desc");

//   // ────────────────────────────────────────────────
//   useEffect(() => {
//     // Fetch single product
//     api.getFoodById(id)
//       .then(res => {
//         setProduct(res.data);
//         setMainImage(res.data.image || "");
//       })
//       .catch(err => console.error("Failed to load product:", err));

//     // Fetch all products to get related items
//     api.getFoods()
//       .then(res => {
//         setRelatedProducts(res.data);
//       })
//       .catch(err => console.error("Failed to load related products:", err));
//   }, [id]);
//   // ────────────────────────────────────────────────

//   if (!product) {
//     return <h1 className="text-center text-5xl mt-40">Loading product...</h1>;
//   }

//   // Filter related products (same category, exclude current)
//   const relatedImages = relatedProducts
//     .filter(p => p.category === product.category && p._id !== id)
//     .slice(0, 3);

//   const handleAddToCart = () => {
//     dispatch(addItem({
//       id: product._id,
//       title: product.name,
//       price: product.price,
//       image: product.image,
//       category: product.category
//     }));
//   };

//   return (
//     <>
//       <div className="mt-80 ">
//         <CommonBanner title={product.name}/> 

//       <div className="px-6 md:px-20 lg:px-40 py-20 mt-50 ml-100">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

//           <div className="flex gap-14 mt-12">
            
//             <div className="flex flex-col gap-10 mt-10">
//               {relatedImages.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img.image}
//                   onClick={() => setMainImage(img.image)}
//                   className="
//                     w-32 h-32 
//                     md:w-36 md:h-36 
//                     lg:w-60 lg:h-60
//                     object-contain 
//                     border-2 border-red-500 
//                     rounded-2xl 
//                     cursor-pointer 
//                   "
//                   alt="preview"
//                 />
//               ))}
//             </div>

//             <div className="flex-1 flex justify-center w-200 ml-100 h-300">
//               <img
//                 src={mainImage || product.image}
//                 className="
//                   w-full 
//                   max-w-sm 
//                   md:max-w-md 
//                   lg:max-w-lg 
//                   h-300
//                   border-2 border-red-500 
//                   rounded-2xl 
//                   cursor-pointer
//                   object-contain
//                 "
//                 alt={product.name}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-12 ml-100 mt-10">
//             <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-blue-950">
//               {product.name}
//             </h1>

//             <h2 className="text-red-500 text-4xl md:text-6xl lg:text-8xl font-bold">
//               ₹{product.price}
//             </h2>

//             <div className="flex items-center gap-6">
//               <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-950">
//                 Category :
//               </span>
//               <span className="bg-red-100 text-red-600 px-6 py-3 rounded-xl text-2xl md:text-4xl lg:text-5xl font-bold">
//                 {product.category}
//               </span>
//             </div>

//             <button onClick={handleAddToCart} className="
//               mt-8 
//               bg-red-500 
//               text-white 
//               px-14 
//               py-6 
//               rounded-2xl 
//               text-3xl 
//               md:text-4xl 
//               lg:text-6xl 
//               font-bold 
//               hover:bg-blue-950 
//               transition 
//               w-fit
//             ">
              
//               Add to Cart
//             </button>
//           </div>

//         </div>
//       </div>

//          <div className="px-6 md:px-20 lg:px-40 mb-40">
        
//         <div className="flex gap-10 border-b border-red-200 pb-4">
//           <button
//             onClick={() => setActiveTab("desc")}
//             className={`text-2xl lg:text-5xl font-bold ${
//               activeTab === "desc" ? "text-red-500 border-red-500" : "text-blue-950"
//             }`}
//           >
//             Description
//           </button>

//           <button
//             onClick={() => setActiveTab("review")}
//             className={`text-2xl lg:text-5xl font-bold ${
//               activeTab === "review" ? "text-red-500  border-red-500" : "text-blue-950"
//             }`}
//           >
//             Review
//           </button>
//         </div>

//         {activeTab === "desc" && (
//           <div className="mt-10 text-gray-600 text-xl lg:text-5xl leading-relaxed max-w-5xl">
//             Enjoy the delicious taste of <span className="font-bold">{product.name}</span> made
//             with premium ingredients and crafted to perfection. Fresh, flavorful and satisfying —
//             a must-try from Fresh Bites.
//           </div>
//         )}

//         {activeTab === "review" && (
//           <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20">

//             <div className="space-y-10">
//               {[1, 2, 3].map(i => (
//                 <div key={i}>
//                   <h3 className="text-2xl lg:text-4xl font-bold">Utsav Patel</h3>
//                   <p className="text-gray-400 text-lg lg:text-2xl">patelutsav312@gmail.com</p>
//                   <p className="text-gray-600 text-xl lg:text-4xl mt-2">great product</p>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-red-50 p-10 rounded-2xl">
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full bg-transparent border-b border-gray-300 py-4 mb-6 outline-none text-4xl"
//               />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full bg-transparent border-b border-gray-300 py-4 mb-6 outline-none text-4xl"
//               />
//               <textarea
//                 placeholder="Write your review"
//                 rows="4"
//                 className="w-full bg-transparent border-b border-gray-300 py-4 mb-8 outline-none text-4xl resize-none"
//               ></textarea>

//               <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold w-70 h-20 text-5xl">
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//     <div className="mt-40 ml-40 mb-30">
//         <h2 className="text-blue-950 text-5xl font-bold mb-20">
//             You might also like
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
//             {relatedProducts
//                 .filter(p => p.category === product.category && p._id !== id)
//                 .slice(0, 4)
//                 .map(item => (
//                 <div
//                     key={item._id}
//                     className="border-2 border-red-500 rounded-2xl p-6 overflow-hidden flex flex-col items-center hover:shadow-2xl transition duration-300"
//                 >
//                     <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-40 lg:w-100 h-40 lg:h-100 transition-all duration-700 ease-in-out hover:scale-110 object-contain"
//                     />

//                     <Link to={`/product/${item._id}`}>
//                     <h2 className="text-2xl lg:text-5xl font-bold text-center mt-6 cursor-pointer hover:text-red-500 transition">
//                     {item.name}
//                     </h2>
//                     </Link>

//                     <div className="flex justify-between items-center w-full mt-8">
//                     <span className="text-red-500 text-3xl lg:text-6xl font-bold">
//                         ₹{item.price}
//                     </span>

//                     <button 
//                       onClick={() => dispatch(addItem({
//                         id: item._id,
//                         title: item.name,
//                         price: item.price,
//                         image: item.image,
//                         category: item.category
//                       }))} 
//                       className="bg-red-500 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-xl lg:rounded-2xl text-xl md:text-2xl lg:text-5xl font-semibold">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//             ))}
//         </div>
//         </div>

//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ProDetails;




import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CommonBanner from "./CommonBanner";
import Footer from "./Footer";

import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

import { api } from "../services/api";

function ProDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [activeTab, setActiveTab] = useState("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch single product first
    api.getFoodById(id)
      .then(res => {
        if (!res.data) {
          throw new Error("Product not found");
        }
        setProduct(res.data);
        setMainImage(res.data.image || "");
        
        // Then fetch related products
        return api.getFoods();
      })
      .then(res => {
        setRelatedProducts(res.data || []);
      })
      .catch(err => {
        console.error("Product detail error:", err);
        setError(err.message || "Failed to load product. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addItem({
      id: product._id,
      title: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    }));
  };

  // ────────────────────────────────────────────────
  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-6xl font-bold text-red-500 animate-pulse">
          Loading Product...
        </div>
      </div>
    );
  }

  // Error / Not found UI
  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-10 py-20">
        <h1 className="text-8xl font-bold text-red-600">Oops!</h1>
        <p className="text-4xl text-gray-700 font-semibold text-center max-w-2xl px-6">
          {error || "Product not found or unavailable right now."}
        </p>
        <Link 
          to="/foods" 
          className="bg-red-500 text-white px-12 py-6 rounded-2xl text-3xl font-bold hover:bg-red-700 transition shadow-xl"
        >
          Back to All Foods
        </Link>
      </div>
    );
  }

  // ────────────────────────────────────────────────
  // Related items (safe filter)
  const relatedItems = relatedProducts
    .filter(p => p.category === product.category && p._id !== id)
    .slice(0, 4);

  return (
    <>
      <div className="mt-80">
        <CommonBanner title={product.name || "Product"} />
      </div>

      <div className="px-6 md:px-20 lg:px-40 py-20 mt-50 ml-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          <div className="flex gap-14 mt-12">
            <div className="flex flex-col gap-10 mt-10">
              {relatedItems.map((img, index) => (
                <img
                  key={index}
                  src={img.image || "https://via.placeholder.com/300?text=Preview"}
                  onClick={() => setMainImage(img.image)}
                  className="
                    w-32 h-32 
                    md:w-36 md:h-36 
                    lg:w-60 lg:h-60
                    object-contain 
                    border-2 border-red-500 
                    rounded-2xl 
                    cursor-pointer 
                  "
                  alt="preview"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image"; }}
                />
              ))}
            </div>

            <div className="flex-1 flex justify-center w-200 ml-100 h-300">
              <img
                src={mainImage || product.image || "https://via.placeholder.com/600?text=Product"}
                className="
                  w-full 
                  max-w-sm 
                  md:max-w-md 
                  lg:max-w-lg 
                  h-300
                  border-2 border-red-500 
                  rounded-2xl 
                  cursor-pointer
                  object-contain
                "
                alt={product.name}
                onError={(e) => { e.target.src = "https://via.placeholder.com/600?text=No+Image"; }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-12 ml-100 mt-10">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-blue-950">
              {product.name}
            </h1>

            <h2 className="text-red-500 text-4xl md:text-6xl lg:text-8xl font-bold">
              ₹{product.price}
            </h2>

            <div className="flex items-center gap-6">
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-950">
                Category :
              </span>
              <span className="bg-red-100 text-red-600 px-6 py-3 rounded-xl text-2xl md:text-4xl lg:text-5xl font-bold">
                {product.category || "Uncategorized"}
              </span>
            </div>

            <button 
              onClick={handleAddToCart}
              className="
                mt-8 
                bg-red-500 
                text-white 
                px-14 
                py-6 
                rounded-2xl 
                text-3xl 
                md:text-4xl 
                lg:text-6xl 
                font-bold 
                hover:bg-blue-950 
                transition 
                w-fit
              "
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>

      <div className="px-6 md:px-20 lg:px-40 mb-40">
        <div className="flex gap-10 border-b border-red-200 pb-4">
          <button
            onClick={() => setActiveTab("desc")}
            className={`text-2xl lg:text-5xl font-bold ${
              activeTab === "desc" ? "text-red-500 border-b-4 border-red-500 pb-2" : "text-blue-950"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("review")}
            className={`text-2xl lg:text-5xl font-bold ${
              activeTab === "review" ? "text-red-500 border-b-4 border-red-500 pb-2" : "text-blue-950"
            }`}
          >
            Review
          </button>
        </div>

        {activeTab === "desc" && (
          <div className="mt-10 text-gray-600 text-xl lg:text-5xl leading-relaxed max-w-5xl">
            Enjoy the delicious taste of <span className="font-bold">{product.name}</span> made
            with premium ingredients and crafted to perfection. Fresh, flavorful and satisfying —
            a must-try from Fresh Bites.
          </div>
        )}

        {activeTab === "review" && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              {[1, 2, 3].map(i => (
                <div key={i}>
                  <h3 className="text-2xl lg:text-4xl font-bold">Utsav Patel</h3>
                  <p className="text-gray-400 text-lg lg:text-2xl">patelutsav312@gmail.com</p>
                  <p className="text-gray-600 text-xl lg:text-4xl mt-2">great product</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-10 rounded-2xl">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-gray-300 py-4 mb-6 outline-none text-4xl"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-gray-300 py-4 mb-6 outline-none text-4xl"
              />
              <textarea
                placeholder="Write your review"
                rows="4"
                className="w-full bg-transparent border-b border-gray-300 py-4 mb-8 outline-none text-4xl resize-none"
              ></textarea>

              <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold w-70 h-20 text-5xl">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-40 ml-40 mb-30">
        <h2 className="text-blue-950 text-5xl font-bold mb-20">
          You might also like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {relatedItems.length === 0 ? (
            <p className="text-3xl text-gray-600 col-span-full text-center py-20">
              No related products found
            </p>
          ) : (
            relatedItems.map(item => (
              <div
                key={item._id}
                className="border-2 border-red-500 rounded-2xl p-6 overflow-hidden flex flex-col items-center hover:shadow-2xl transition duration-300"
              >
                <img
                  src={item.image || "https://via.placeholder.com/400?text=Product"}
                  alt={item.name}
                  className="w-40 lg:w-100 h-40 lg:h-100 transition-all duration-700 ease-in-out hover:scale-110 object-contain"
                  onError={e => e.target.src = "https://via.placeholder.com/400?text=No+Image"}
                />

                <Link to={`/product/${item._id}`}>
                  <h2 className="text-2xl lg:text-5xl font-bold text-center mt-6 cursor-pointer hover:text-red-500 transition">
                    {item.name}
                  </h2>
                </Link>

                <div className="flex justify-between items-center w-full mt-8">
                  <span className="text-red-500 text-3xl lg:text-6xl font-bold">
                    ₹{item.price}
                  </span>

                  <button 
                    onClick={() => dispatch(addItem({
                      id: item._id,
                      title: item.name,
                      price: item.price,
                      image: item.image,
                      category: item.category
                    }))} 
                    className="bg-red-500 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-xl lg:rounded-2xl text-xl md:text-2xl lg:text-5xl font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProDetails;