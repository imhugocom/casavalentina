import React from 'react';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="text-rose-500" />
            <span className="font-semibold text-xl">Tourism House</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-500">Home</a>
            <a href="#amenities" className="text-gray-700 hover:text-rose-500">Amenities</a>
            <a href="#gallery" className="text-gray-700 hover:text-rose-500">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-500">Contact</a>
          </div>
          <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}