import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import Card from '../components/Card';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredMenu = menuData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-4xl font-black italic">Bizning Menu</h1>
        
        
        <div className="relative w-full md:w-96">
          <input 
            type="text"
            placeholder="Yoqtirkan taomingizni qidiring..."
            className="w-full p-4 rounded-2xl bg-gray-100 dark:bg-zinc-800 border-2 border-transparent focus:border-orange-500 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute right-4 top-4 text-xl">🔍</span>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredMenu.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {filteredMenu.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl font-bold text-gray-400">Biz topaolmadik "{searchTerm}" 😢</p>
        </div>
      )}
    </div>
  );
};

export default Menu;