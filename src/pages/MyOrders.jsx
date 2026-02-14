import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Clock, CheckCircle, XCircle, ShoppingBag, AlertCircle } from "lucide-react";
import CommonBanner from "./CommonBanner";
import Footer from "./Footer";
import Navbar from "./navbar";
import { api } from "../services/api";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const customerUser = JSON.parse(localStorage.getItem('customerUser'));
    const email = customerUser ? customerUser.email : null;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!email) {
            setLoading(false);
            return;
        }
        fetchOrders();
        const interval = setInterval(fetchOrders, 5000);
        return () => clearInterval(interval);
    }, [email]);

    const fetchOrders = async () => {
        try {
            const response = await api.getOrdersByEmail(email);
            setOrders(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };

    const getStatusUserInfo = (status) => {
        switch (status) {
            case 'pending':
                return { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', label: 'Preparing' };
            case 'accepted':
                return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', label: 'Delivered' };
            case 'rejected':
                return { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', label: 'Canceled' };
            default:
                return { icon: Clock, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200', label: status };
        }
    };

    if (!email) {
        return (
            <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
                <Navbar />
                <div className="pt-24 flex-grow flex items-center justify-center p-4">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-slate-100">
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="w-10 h-10 text-slate-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Please Log In</h2>
                        <p className="text-slate-500 mb-8">You need to be logged in to view your order history.</p>
                        <Link
                            to="/account"
                            className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                        >
                            Go to Login
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="font-sans bg-slate-50 min-h-screen flex flex-col">
            <Navbar />

            <div className="pt-20 lg:pt-24">
                <CommonBanner title="My Orders" />
            </div>

            <div className="flex-grow max-w-5xl mx-auto px-4 md:px-8 py-12 w-full">

                {/* Header Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Package className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Total Orders</p>
                            <h3 className="text-2xl font-bold text-slate-900">{orders.length}</h3>
                        </div>
                    </div>
                    {/* Add more stats if available, e.g. Total Spent */}
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600"></div>
                    </div>
                ) : orders.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Package className="w-10 h-10 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No orders yet</h3>
                        <p className="text-slate-500 mb-8 max-w-xs mx-auto">Looks like you haven't placed any orders yet. Start exploring our delicious menu!</p>
                        <Link
                            to="/foods"
                            className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                        >
                            Browse Menu
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => {
                            const statusInfo = getStatusUserInfo(order.status);
                            const StatusIcon = statusInfo.icon;

                            return (
                                <div key={order._id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                                    {/* Order Header */}
                                    <div className="px-6 py-4 border-b border-slate-50 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-full ${statusInfo.bg}`}>
                                                <StatusIcon className={`w-5 h-5 ${statusInfo.color}`} />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-slate-900">Order #{order._id.slice(-6).toUpperCase()}</span>
                                                    <span className={`px-2 py-0.5 rounded text-xs font-bold capitalize ${statusInfo.bg} ${statusInfo.color} border ${statusInfo.border}`}>
                                                        {statusInfo.label}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-slate-500 font-medium">
                                                    {new Date(order.orderTime).toLocaleDateString('en-IN', {
                                                        year: 'numeric', month: 'short', day: 'numeric',
                                                        hour: '2-digit', minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Amount</p>
                                            <p className="text-xl font-black text-slate-900">₹{order.totalPrice}</p>
                                        </div>
                                    </div>

                                    {/* Order Items */}
                                    <div className="p-6">
                                        <div className="space-y-3">
                                            {order.foods.map((food, idx) => (
                                                <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-100 last:border-0">
                                                    <div className="flex items-center gap-3">
                                                        <span className="flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 text-xs font-bold rounded">
                                                            {food.quantity}x
                                                        </span>
                                                        <span className="text-slate-700 font-medium">{food.name}</span>
                                                    </div>
                                                    <span className="text-slate-900 font-bold">₹{food.price * food.quantity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyOrders;
