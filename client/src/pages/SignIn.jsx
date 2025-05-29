import React, { useState } from 'react';

const SignIn = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError('Please fill in all fields.');
            return;
        }
        try {
            // Example: await api.signIn(form);
            alert('Signed in successfully!');
        } catch (err) {
            setError('Invalid credentials.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                {error && <div className="text-red-600 mb-4">{error}</div>}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;