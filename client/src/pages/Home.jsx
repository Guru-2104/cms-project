export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the CMS Project</h1>
            <p className="text-lg text-gray-600 mb-8">
                Manage your content efficiently and effortlessly.
            </p>
            <a
                href="/dashboard"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                Go to Dashboard
            </a>
        </div>
    );
}
