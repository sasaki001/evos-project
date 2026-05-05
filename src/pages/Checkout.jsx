import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    
    setTimeout(() => {
      alert("Buyurtmangiz qabul qilindi! Tezkunda operatorimiz bog'lanadi.");
      clearCart();
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Savatchangiz bo'sh</h2>
        <button onClick={() => navigate('/menu')} className="text-orange-500 font-bold">Menyuga qaytish</button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-10 tracking-tighter">Rasmiylashtirish</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Forma qismi */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">Ma'lumotlaringiz</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2 ml-1">Ism va Familiya</label>
              <input required type="text" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 outline-none border-2 border-transparent focus:border-orange-500 transition-all" placeholder="Shaxzod Alimov" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 ml-1">Telefon raqam</label>
              <input required type="tel" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 outline-none border-2 border-transparent focus:border-orange-500 transition-all" placeholder="+998 90 123 45 67" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 ml-1">Yetkazib berish manzili</label>
              <textarea required className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 outline-none border-2 border-transparent focus:border-orange-500 transition-all" rows="3" placeholder="Toshkent sh., Chilonzor tumani..."></textarea>
            </div>
            <button 
              disabled={loading}
              className="w-full bg-orange-500 text-white p-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-500/30"
            >
              {loading ? "Yuborilmoqda..." : "BUYURTMANI TASDIQLASH"}
            </button>
          </form>
        </div>

        
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-zinc-800/50 p-8 rounded-[2.5rem]">
            <h2 className="text-2xl font-bold mb-6">Sizning buyurtmangiz</h2>
            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b border-gray-200 dark:border-zinc-700 pb-3">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.quantity} x {item.price.toLocaleString()} so'm</p>
                  </div>
                  <p className="font-bold text-orange-500">{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 dark:border-zinc-600">
              <div className="flex justify-between items-center text-2xl font-black">
                <span>Jami:</span>
                <span className="text-orange-500">{totalPrice.toLocaleString()} so'm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;