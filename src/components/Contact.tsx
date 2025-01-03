import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@tourismhouse.com</p>
            </div>
            <div className="text-center">
              <Instagram className="h-8 w-8 mx-auto text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <p className="text-gray-600">@tourismhouse</p>
            </div>
          </div>
          <form className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}