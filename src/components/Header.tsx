import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src="./assets/logo.png" 
              alt="Wrist VIP Logo" 
              className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 h-12 w-12 bg-amber-600/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
        
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-base font-medium transition-all duration-300 hover:text-amber-600 group ${
                isActive(item.href) 
                  ? 'text-amber-600' 
                  : 'text-gray-700'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-300 group-hover:w-full ${
                isActive(item.href) ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full px-6">
            <Link to="/auth">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>
          
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-amber-50">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white">
            <div className="flex flex-col space-y-6 mt-12">
               <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src="./assets/logo.png" 
              alt="Wrist VIP Logo" 
              className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 h-12 w-12 bg-amber-600/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
        
        </Link>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 ${
                    isActive(item.href) ? 'text-amber-600 bg-amber-50' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full">
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Link>
              </Button>
              
              <Button asChild className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-full">
                <Link to="/products" onClick={() => setIsOpen(false)}>
                  Explore Collection
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}