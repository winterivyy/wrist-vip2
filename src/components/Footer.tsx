import { Link } from 'react-router-dom';
import { Watch, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Watch className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">Wrist VIP</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your premier destination for authentic luxury and enthusiast watches. 
              Every timepiece is curated with passion and guaranteed for authenticity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-amber-500 transition-colors">Collection</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Watch Authentication</li>
              <li>Global Shipping</li>
              <li>VIP Concierge</li>
              <li>Watch Sourcing</li>
              <li>Collection Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>sales@wristvip.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Wrist VIP. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}