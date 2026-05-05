import React from 'react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom'; // Link-ni import qilamiz

const Cart = () => {
  const { cart, removeFromCart } = useStore();
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Savatingiz bo'sh 🌯</h2>
        <p className="text-gray-500 dark:text-zinc-400">Menyudan mazali narsa qo'shing!</p>
        <Link to="/menu" className="inline-block mt-6 text-orange-500 font-bold hover:underline">
          Menyuga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 max-w-2xl mx-auto px-4">
      <h1 className="text-4xl font-black mb-8 tracking-tighter">Savat</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white dark:bg-zinc-800 p-5 rounded-[2rem] shadow-sm border border-gray-100 dark:border-zinc-700 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-50 dark:bg-zinc-700 rounded-2xl overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-zinc-400">{item.quantity} x {item.price.toLocaleString()} so'm</p>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-500/10 px-4 py-2 rounded-xl transition-all active:scale-95"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t-2 border-dashed dark:border-zinc-700 pt-8 flex justify-between items-center">
        <span className="text-2xl font-bold">Jami:</span>
        <span className="text-3xl font-black text-orange-500">{totalPrice.toLocaleString()} so'm</span>
      </div>
      
      {/* Buyurtma berish sahifasiga o'tish tugmasi */}
      <Link to="/checkout" className="block mt-8">
        <button className="w-full bg-orange-500 text-white py-5 rounded-[2rem] font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 active:scale-[0.98]">
          Buyurtma berish
        </button>
      </Link>
    </div>
  );
};

export default Cart;