import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand qismi */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-black text-orange-500 tracking-tighter mb-6 block">
              EVOS
            </Link>
            <p className="text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
              Toshkentdagi eng mazali va tezkor lavashlar maskani.
            </p>
          </div>

          
          <div>
            <h4 className="text-lg font-bold mb-6">Sahifalar</h4>
            <ul className="space-y-4 font-medium">
              <li><Link to="/" className="text-gray-500 dark:text-zinc-400 hover:text-orange-500 transition-colors">Asosiy</Link></li>
              <li><Link to="/menu" className="text-gray-500 dark:text-zinc-400 hover:text-orange-500 transition-colors">Menyu</Link></li>
              <li><Link to="/cart" className="text-gray-500 dark:text-zinc-400 hover:text-orange-500 transition-colors">Savat</Link></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-bold mb-6">Bog'lanish</h4>
            <ul className="space-y-4 text-gray-500 dark:text-zinc-400 font-medium">
              <li>📞 +998 71 203 12 12</li>
              <li>📍 Toshkent sh., Chilonzor</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-bold mb-6">Bizni kuzating</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" 
                 className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-xl text-gray-700 dark:text-zinc-300 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <FaInstagram />
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer"
                 className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-xl text-gray-700 dark:text-zinc-300 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <FaTelegramPlane />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                 className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-xl text-gray-700 dark:text-zinc-300 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <FaFacebookF />
              </a>
            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-100 dark:border-zinc-800 pt-8 text-center md:text-left text-sm text-gray-400">
          <p>© 2026 EVOS. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;