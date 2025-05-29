import React from "react";

const developers = [
    {
        name: "Raja Guru",
        role: "Frontend Developer",
        bio: "Passionate about building scalable web applications and user interfaces.",
        avatar: "https://i.pravatar.cc/150?img=1",
        github: "https://github.com/rajaguru",
        linkedin: "https://linkedin.com/in/rajaguru",
    },
    // Add more developers as needed
];

const Developer = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Meet the Developers
                </h1>
                <div className="grid gap-8 md:grid-cols-2">
                    {developers.map((dev) => (
                        <div
                            key={dev.name}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
                        >
                            <img
                                src={dev.avatar}
                                alt={dev.name}
                                className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-200"
                            />
                            <h2 className="text-2xl font-semibold text-gray-700">{dev.name}</h2>
                            <p className="text-indigo-600 font-medium">{dev.role}</p>
                            <p className="text-gray-500 text-center mt-2">{dev.bio}</p>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href={dev.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                                    </svg>
                                </a>
                                <a
                                    href={dev.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 hover:text-blue-900"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Developer;