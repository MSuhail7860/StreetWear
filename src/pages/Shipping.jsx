import React from 'react';

const Shipping = () => {
    return (
        <div className="container-custom py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
                    SHIPPING <span className="text-accent">INFO</span>
                </h1>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Domestic Shipping (USA)</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-4 font-bold">Method</th>
                                        <th className="py-4 font-bold">Timeframe</th>
                                        <th className="py-4 font-bold">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr className="border-b border-gray-100">
                                        <td className="py-4">Standard Shipping</td>
                                        <td className="py-4">5-7 Business Days</td>
                                        <td className="py-4">$5.99 (Free over $100)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-4">Express Shipping</td>
                                        <td className="py-4">2-3 Business Days</td>
                                        <td className="py-4">$14.99</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4">Overnight Shipping</td>
                                        <td className="py-4">1 Business Day</td>
                                        <td className="py-4">$29.99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">International Shipping</h2>
                        <p className="text-gray-600 mb-4">
                            We ship worldwide! International shipping rates are calculated at checkout based on destination and weight.
                        </p>
                        <p className="text-gray-600">
                            Please note that international customers are responsible for any customs duties or taxes that may apply.
                        </p>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-2">Order Processing</h3>
                        <p className="text-sm text-gray-600">
                            Orders are processed within 1-2 business days. You will receive a confirmation email with tracking information once your order ships.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
