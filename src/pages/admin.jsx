import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Mail, Lock, ArrowRight, Loader2, LogIn } from 'lucide-react';
import CommonBanner from './CommonBanner';
import Footer from './Footer';
import Navbar from './navbar';
import { api } from "../services/api";
import { loadCartFromDB } from '../redux/cartSlice';

const Admin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await api.login(loginData);

      if (res.data?.user) {
        localStorage.setItem('customerUser', JSON.stringify(res.data.user));

        // Load user's cart from database
        dispatch(loadCartFromDB(res.data.user._id));

        // alert("Logged in successfully!"); // Removed alert for better UX
        navigate('/');
      } else {
        setError("Login failed - no user data returned");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.msg ||
        err.response?.data?.error ||
        err.message ||
        "Invalid credentials or server error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20 lg:pt-24">
        <CommonBanner title="Welcome Back" />
      </div>

      <div className="flex-grow flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Login</h2>
              <p className="text-slate-500">Access your account to order food</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
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
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
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
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Login <ArrowRight className="w-5 h-5" /></>}
              </button>
            </form>
          </div>

          <div className="bg-slate-50 px-8 py-6 text-center border-t border-slate-100">
            <p className="text-slate-600 font-medium">
              Don't have an account?{' '}
              <Link to="/account" className="text-red-600 font-bold hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;