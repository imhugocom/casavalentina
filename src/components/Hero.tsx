import React from 'react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
          alt="Cozy house exterior"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome to Our Tourism House
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Experience the perfect blend of comfort and luxury in our beautifully located tourism house.
          Your home away from home awaits.
        </p>
        <div className="mt-8 flex items-center text-white">
          <MapPin className="h-6 w-6" />
          <span className="ml-2 text-lg">123 Scenic View Road, Tourism Valley</span>
        </div>
        <div className="mt-10">
          <button className="bg-rose-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-rose-600 transition-colors">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
}