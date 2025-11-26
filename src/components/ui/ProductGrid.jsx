import ProductCard from './ProductCard';

const ProductGrid = ({ products, title }) => {
    return (
        <section className="py-12">
            <div className="container-custom">
                {title && (
                    <h2 className="text-3xl font-bold font-heading mb-8 text-center">{title}</h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
