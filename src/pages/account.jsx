// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { User, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
// import CommonBanner from './CommonBanner';
// import Footer from './Footer';
// import Navbar from './navbar';
// import { api } from "../services/api";

// const Account = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const response = await api.registerUser({
//         name: formData.fullName,
//         email: formData.email,
//         password: formData.password
//       });

//       if (response.data.success) {
//         navigate('/admin'); // Redirect to login
//       } else {
//         setError(response.data.message || 'Registration failed');
//       }
//     } catch (err) {
//       console.error('Registration Error:', err);
//       setError(err.response?.data?.message || 'Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="font-sans bg-slate-50 min-h-screen flex flex-col">
//       <Navbar />

//       <div className="pt-20 lg:pt-24">
//         <CommonBanner title="Join Us" />
//       </div>

//       <div className="flex-grow flex items-center justify-center px-4 py-12 md:py-20">
//         <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
//           <div className="p-8 md:p-10">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
//               <p className="text-slate-500">Sign up to start your food journey</p>
//             </div>

//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <User className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
//                   </div>
//                   <input
//                     type="text"
//                     required
//                     placeholder="John Doe"
//                     className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border-transparent text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl transition-all font-medium"
//                     value={formData.fullName}
//                     onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
//                   </div>
//                   <input
//                     type="email"
//                     required
//                     placeholder="you@example.com"
//                     className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border-transparent text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl transition-all font-medium"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
//                   </div>
//                   <input
//                     type="password"
//                     required
//                     placeholder="••••••••"
//                     className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border-transparent text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl transition-all font-medium"
//                     value={formData.password}
//                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex items-center justify-center gap-2 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-200 disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Sign Up <ArrowRight className="w-5 h-5" /></>}
//               </button>
//             </form>
//           </div>

//           <div className="bg-slate-50 px-8 py-6 text-center border-t border-slate-100">
//             <p className="text-slate-600 font-medium">
//               Already have an account?{' '}
//               <Link to="/admin" className="text-red-600 font-bold hover:underline">
//                 Log In
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };


// export default Account;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import CommonBanner from './CommonBanner';
import Footer from './Footer';
import Navbar from './navbar';
import { api } from "../services/api";

const Account = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.register({
        name: formData.fullName,
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        navigate('/admin'); // Redirect to login
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration Error:', err);
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20 lg:pt-24">
        <CommonBanner title="Join Us" />
      </div>

      <div className="flex-grow flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
              <p className="text-slate-500">Sign up to start your food journey</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border-transparent text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl transition-all font-medium"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border-transparent text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl transition-all font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border-transparent text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl transition-all font-medium"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Sign Up <ArrowRight className="w-5 h-5" /></>}
              </button>
            </form>
          </div>

          <div className="bg-slate-50 px-8 py-6 text-center border-t border-slate-100">
            <p className="text-slate-600 font-medium">
              Already have an account?{' '}
              <Link to="/admin" className="text-red-600 font-bold hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
