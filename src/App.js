import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    const [theme, setTheme] = useState('');
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    const themeHandler = (mode) => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        // Whenever the user explicitly chooses light mode
        if (mode === 'light') {
            localStorage.theme = 'light';
            setTheme('light');
        }

        // Whenever the user explicitly chooses dark mode
        if (mode === 'dark') {
            localStorage.theme = 'dark';
            setTheme('dark');
        }

        // Whenever the user explicitly chooses to respect the OS preference
        if (mode === 'system') {
            localStorage.removeItem('theme');
            setTheme('');
        }
    };

    return (
        <div className=" bg-gray-100 dark:bg-black dark:text-white ">
            <div className="flex p-4 space-x-4">
                <button
                    onClick={() => themeHandler('light')}
                    className="px-2 py-1 rounded-md ring-2 ring-gray-300 font-medium bg-gray-200  text-gray-800  hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-offset-1 "
                >
                    Light
                </button>
                <button
                    onClick={() => themeHandler('dark')}
                    className="px-2 py-1 rounded-md text-white ring-2 ring-gray-800 font-medium bg-gray-800   hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 focus:ring-offset-1"
                >
                    Dark
                </button>
                <button
                    onClick={() => themeHandler('system')}
                    className="px-2 py-1 rounded-md text-white ring-2 ring-blue-700 font-medium bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-800 focus:ring-offset-1 "
                >
                    System
                </button>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div
                    className="text-center shadow-sm rounded-lg bg-white p-8 space-y-4 sm:flex sm:gap-3 hover:shadow-md hover:translate-x-5 transition-all duration-500 dark:bg-gray-800 dark:text-white"
                    id="#"
                >
                    <img
                        className="h-28 w-28 rounded-full bg-blue-400 ring-4 ring-red-400 mx-auto dark:ring-red-400"
                        src="https://sujonbd.netlify.app/static/media/logo2.c23f0953.png"
                        alt=""
                    />
                    <div className=" space-y-3">
                        <div className="space-y-2">
                            <p className="text-lg font-medium">
                                Learn With Sujon
                            </p>
                            <p className="text-red-500">Youtube Channel</p>
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-600 rounded-full active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-700 px-3 py-2 text-center font-medium text-smew text-white ">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
