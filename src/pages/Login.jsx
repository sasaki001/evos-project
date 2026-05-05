import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Xush kelibsiz, ${email}!`);
    navigate('/');
  };

  return (
    <div className="pt-32 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-zinc-800">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-orange-500 mb-2">Tizimga kirish</h2>
          <p className="text-gray-400">EVOS oilasiga xush kelibsiz!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 ml-1">Email manzilingiz</label>
            <input 
              type="email" 
              required
              className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-2 border-transparent focus:border-orange-500 outline-none transition-all"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 ml-1">Parol</label>
            <input 
              type="password" 
              required
              className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-2 border-transparent focus:border-orange-500 outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-orange-500 text-white p-4 rounded-2xl font-black text-lg hover:bg-orange-600 shadow-lg shadow-orange-500/30 active:scale-95 transition-all"
          >
            KIRISH
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Hisobingiz yo'qmi? <span className="text-orange-500 font-bold cursor-pointer hover:underline">Ro'yxatdan o'tish</span>
        </p>
      </div>
    </div>
  );
};

export default Login;