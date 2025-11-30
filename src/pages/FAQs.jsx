import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-accent' : 'text-black group-hover:text-gray-600'}`}>
                    {question}
                </span>
                {isOpen ? (
                    <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-black flex-shrink-0" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQs = () => {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all unworn and unwashed items. You can initiate a return through our Returns portal. Refunds are processed within 5-7 business days after we receive your return."
        },
        {
            question: "How do I track my order?",
            answer: "Once your order ships, you will receive an email with a tracking number. You can also visit our 'Track Order' page and enter your order details to see the current status."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location and will be calculated at checkout."
        },
        {
            question: "How do I care for my t-shirts?",
            answer: "To ensure longevity, we recommend washing your t-shirts inside out in cold water and hanging them to dry. Avoid using bleach or ironing directly on the print."
        },
        {
            question: "Can I change or cancel my order?",
            answer: "We process orders quickly, but if you need to make a change, please contact our support team immediately. We cannot guarantee changes once an order has been processed."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay."
        }
    ];

    return (
        <div className="container-custom py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
                    FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
                </h1>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 md:px-10">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
