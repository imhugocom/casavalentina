import React from 'react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80",
      alt: "Living Room"
    },
    {
      url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&q=80",
      alt: "Bedroom"
    },
    {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80",
      alt: "Kitchen"
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}