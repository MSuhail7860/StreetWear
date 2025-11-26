import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendOtp, verifyOtp } from '../store/authSlice';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { otpSent } = useSelector(state => state.auth);

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
    });
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile || !formData.email) {
            setError('Please fill in all fields');
            return;
        }
        dispatch(sendOtp());
        setError('');
        alert('OTP sent to your email (Check Console for Mock OTP)');
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        try {
            dispatch(verifyOtp({ otp, userData: formData }));
            navigate('/');
        } catch (err) {
            setError('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-heading">
                        {otpSent ? 'Verify OTP' : 'Sign in to your account'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {otpSent ? 'Enter the code sent to your email' : 'Or create a new account'}
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                {!otpSent ? (
                    <form className="mt-8 space-y-6" onSubmit={handleSendOtp}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <Input
                                label="Full Name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <Input
                                label="Mobile Number"
                                type="tel"
                                required
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            />
                            <Input
                                label="Email Address"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Send OTP
                        </Button>
                    </form>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={handleVerifyOtp}>
                        <div>
                            <Input
                                label="Enter OTP"
                                type="text"
                                required
                                maxLength={4}
                                className="text-center tracking-widest text-2xl"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Verify & Login
                        </Button>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => window.location.reload()}
                                className="text-sm text-gray-600 hover:text-black underline"
                            >
                                Change Details
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
