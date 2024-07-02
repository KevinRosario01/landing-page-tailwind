import React from 'react';


export function Navbar ()  {
    return <nav class="bg-gray-800 p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex-shrink-0">
          
            <a href="#" class="text-white text-lg font-bold">Start Tailwinds</a>
        </div>
        <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
    </div>
</nav>

}

