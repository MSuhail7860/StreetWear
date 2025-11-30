import React from 'react';

const Returns = () => {
    return (
        <div className="container-custom py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
                    RETURNS & <span className="text-accent">EXCHANGES</span>
                </h1>

                <div className="space-y-8 text-gray-600">
                    <section className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                        <h2 className="text-xl font-bold text-black mb-4">30-Day Return Policy</h2>
                        <p className="mb-4">
                            We want you to love your purchase. If you are not completely satisfied, you may return items within 30 days of delivery for a full refund or exchange.
                        </p>
                        <p>
                            Items must be unworn, unwashed, and in their original condition with tags attached.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">How to Initiate a Return</h2>
                        <ol className="list-decimal list-inside space-y-4 ml-4">
                            <li>Visit our <span className="font-medium text-black">Returns Portal</span> (link below).</li>
                            <li>Enter your Order ID and Email Address.</li>
                            <li>Select the items you wish to return and the reason.</li>
                            <li>Print the prepaid shipping label provided.</li>
                            <li>Pack your items and drop them off at the nearest shipping carrier location.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">Refunds</h2>
                        <p>
                            Once we receive your return, please allow 5-7 business days for processing. Refunds will be issued to the original payment method.
                        </p>
                    </section>

                    <div className="pt-8 text-center">
                        <button className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">
                            Start a Return
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Returns;
