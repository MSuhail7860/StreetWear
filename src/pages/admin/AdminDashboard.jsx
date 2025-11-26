import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Plus, Edit, Trash2, X } from 'lucide-react';
import { addProduct, updateProduct, deleteProduct } from '../../store/productSlice';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Modal from '../../components/ui/Modal';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: 'Men',
        image: '',
        description: '',
    });

    const handleOpenModal = (product = null) => {
        if (product) {
            setEditingProduct(product);
            setFormData(product);
        } else {
            setEditingProduct(null);
            setFormData({
                name: '',
                price: '',
                category: 'Men',
                image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800', // Default image
                description: '',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['Black', 'White'],
                isNew: true,
                isTrending: false,
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingProduct) {
            dispatch(updateProduct({ ...formData, id: editingProduct.id }));
        } else {
            dispatch(addProduct(formData));
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id));
        }
    };

    return (
        <div className="container-custom py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold font-heading">Admin Dashboard</h1>
                <Button onClick={() => handleOpenModal()}>
                    <Plus className="w-5 h-5 mr-2" /> Add Product
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-gray-500 mb-2">Total Products</h3>
                    <p className="text-3xl font-bold">{products.length}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-gray-500 mb-2">Total Orders</h3>
                    <p className="text-3xl font-bold">12</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-gray-500 mb-2">Revenue</h3>
                    <p className="text-3xl font-bold">$1,240</p>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="p-4 font-medium text-gray-500">Product</th>
                            <th className="p-4 font-medium text-gray-500">Category</th>
                            <th className="p-4 font-medium text-gray-500">Price</th>
                            <th className="p-4 font-medium text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="p-4 flex items-center gap-4">
                                    <img src={product.image} alt={product.name} className="w-10 h-10 rounded-md object-cover" />
                                    <span className="font-medium">{product.name}</span>
                                </td>
                                <td className="p-4 text-gray-600">{product.category}</td>
                                <td className="p-4 font-medium">${product.price}</td>
                                <td className="p-4 text-right space-x-2">
                                    <button
                                        onClick={() => handleOpenModal(product)}
                                        className="p-2 text-gray-400 hover:text-black transition-colors"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingProduct ? 'Edit Product' : 'Add New Product'}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Product Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Price"
                            type="number"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                            required
                        />
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                            </select>
                        </div>
                    </div>
                    <Input
                        label="Image URL"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        required
                    />
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                            rows="3"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button type="submit">{editingProduct ? 'Update' : 'Add'} Product</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AdminDashboard;
