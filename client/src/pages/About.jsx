import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
                <p className="text-gray-600 text-lg mb-6 text-center">
                    Welcome to our CMS Project! Our mission is to provide a simple, efficient, and user-friendly content management system for everyone.
                </p>
                <div className="border-t border-gray-200 pt-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Team</h2>
                    <p className="text-gray-600 mb-4">
                        We are a passionate group of developers dedicated to building modern web applications using the latest technologies.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Vision</h2>
                    <p className="text-gray-600">
                        To empower users to manage their content effortlessly and efficiently, enabling them to focus on what matters most.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;