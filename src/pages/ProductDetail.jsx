import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { menuData } from '../data/menuData'; // Ma'lumotlar bazangiz
import { FaArrowLeft, FaCartPlus } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();

  // ID bo'yicha taomni topamiz
  const product = menuData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="pt-32 text-center text-2xl font-bold">Mahsulot topilmadi 😕</div>;
  }

  return (
    <div className="pt-32 max-w-5xl mx-auto px-4 pb-20">
      {/* Orqaga qaytish */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-500 hover:text-orange-500 font-bold mb-8 transition-colors"
      >
        <FaArrowLeft /> Orqaga qaytish
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Rasm qismi */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[3rem] shadow-xl border border-gray-100 dark:border-zinc-800">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Ma'lumotlar qismi */}
        <div>
          <span className="bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-1 rounded-full text-sm font-black uppercase">
            {product.category}
          </span>
          <h1 className="text-5xl font-black mt-4 mb-6 tracking-tighter">{product.name}</h1>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-400 mb-2">Tarkibi:</h3>
              <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                {product.ingredients || "Yangi pishirilgan xamir, maxsus sous va eng sarxil mahsulotlar."}
              </p>
            </div>

            <div className="flex items-center justify-between pt-8 border-t dark:border-zinc-800">
              <div>
                <p className="text-gray-400 font-bold">Narxi:</p>
                <span className="text-4xl font-black text-orange-500">{product.price.toLocaleString()} so'm</span>
              </div>
              
              <button 
                onClick={() => addToCart(product)}
                className="bg-orange-500 text-white flex items-center gap-3 px-8 py-5 rounded-3xl font-black text-lg hover:bg-orange-600 transition-all active:scale-95 shadow-xl shadow-orange-500/30"
              >
                <FaCartPlus /> Savatga qo'shish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;