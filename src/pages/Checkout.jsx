import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Checkout = () => {
    const { items, total } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    if (items.length === 0) {
        navigate('/cart');
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert('Order placed successfully!');
            navigate('/');
        }, 2000);
    };

    return (
        <div className="container-custom py-12">
            <h1 className="text-3xl font-bold font-heading mb-8">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Form */}
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Shipping Info */}
                        <section>
                            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="First Name" required />
                                <Input label="Last Name" required />
                                <Input label="Email" type="email" required className="md:col-span-2" />
                                <Input label="Address" required className="md:col-span-2" />
                                <Input label="City" required />
                                <Input label="Postal Code" required />
                                <Input label="Phone" type="tel" required className="md:col-span-2" />
                            </div>
                        </section>

                        {/* Payment Info */}
                        <section>
                            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 mb-4">
                                <p className="text-sm text-gray-500">This is a demo store. No payment is required.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="Card Number" placeholder="0000 0000 0000 0000" className="md:col-span-2" />
                                <Input label="Expiry Date" placeholder="MM/YY" />
                                <Input label="CVC" placeholder="123" />
                            </div>
                        </section>

                        <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                            Place Order (${(total * 1.1).toFixed(2)})
                        </Button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="lg:w-96">
                    <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                        <h3 className="text-xl font-bold font-heading mb-6">Order Summary</h3>
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                                    <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-sm">{item.name}</h4>
                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        <p className="text-sm font-medium">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="border-t border-gray-200 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal</span>
                                    <span>${total}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Tax (10%)</span>
                                    <span>${(total * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg pt-2">
                                    <span>Total</span>
                                    <span>${(total * 1.1).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
