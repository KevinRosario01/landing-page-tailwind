import React from "react";
{/*<div className='w-full bg-red-100 rounded flex flex-col items-center justify-center h-20'>Card</div>*/}

export function Card () {
    return <div class="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg">
    <img class="w-full h-56 object-cover" src="https://via.placeholder.com/500x325" alt="Placeholder Image"/>
    <div class="p-6">
        <div class="font-bold text-xl text-center mb-2">Card Title</div>
        <p class="text-gray-700 text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        <div class="bg-gray-200 p-4 flex justify-center">
            <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-medium transition duration-300">Find out more!</a>
        </div>
    
</div>

}
