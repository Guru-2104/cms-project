import { useState } from "react";

export default function SignUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // Simulate API call
        setSuccess("Sign up successful!");
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                {error && (
                    <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
                )}
                {success && (
                    <div className="mb-4 text-green-600 text-sm text-center">{success}</div>
                )}
                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-medium" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}