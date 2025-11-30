import React from 'react';

const About = () => {
    return (
        <div className="container-custom py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">
                    ABOUT <span className="text-accent">STREETWEAR</span>
                </h1>

                <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Born in the heart of the city, <span className="font-bold text-black">STREETWEAR</span> is more than just a clothing brand. It's a movement. We believe in the power of self-expression through fashion that defies the ordinary.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                            <p>
                                To provide high-quality, sustainable, and cutting-edge streetwear that empowers individuals to showcase their unique identity to the world.
                            </p>
                        </div>
                        <div className="bg-black text-white p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-300">
                                To become the global standard for urban fashion, bridging the gap between comfort, style, and luxury for the modern generation.
                            </p>
                        </div>
                    </div>

                    <p>
                        Every piece in our collection is meticulously crafted with attention to detail, from the fabric selection to the final stitch. We draw inspiration from art, music, and the vibrant energy of street culture.
                    </p>

                    <p>
                        Join us on this journey. Redefine your style. Own the streets.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
