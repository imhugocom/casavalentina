import React from 'react';
import { Heart, MapPin, Wifi, Car, Utensils, Phone, Mail, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Amenities />
      <Gallery />
      <Contact />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Local Tourism House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;