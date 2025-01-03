import React from 'react';
import { Wifi, Car, Utensils } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: 'Free Wi-Fi',
      description: 'Stay connected with high-speed internet throughout your stay'
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Free Parking',
      description: 'Convenient on-site parking for all our guests'
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: 'Fully Equipped Kitchen',
      description: 'Modern kitchen with all the amenities you need'
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Amenities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-rose-500 flex justify-center mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}