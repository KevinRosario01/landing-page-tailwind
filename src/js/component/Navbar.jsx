import React from 'react';


export function Navbar ()  {
    return <nav className="bg-gray-800 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          
            <a href="#" className="text-white text-lg font-bold">Start Tailwinds</a>
        </div>
        <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
    </div>
</nav>

}

