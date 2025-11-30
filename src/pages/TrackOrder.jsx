import React, { useState } from 'react';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tracking order:', { orderId, email });
        alert(`Tracking information for Order #${orderId} sent to ${email}`);
    };

    return (
        <div className="container-custom py-12 md:py-20 min-h-[60vh]">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-heading font-bold mb-8 text-center">
                    TRACK YOUR <span className="text-accent">ORDER</span>
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Enter your order ID and email address to get the latest update on your shipment.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div>
                        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                            Order ID
                        </label>
                        <input
                            type="text"
                            id="orderId"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                            placeholder="e.g. #12345"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors transform active:scale-[0.98]"
                    >
                        Track Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TrackOrder;
