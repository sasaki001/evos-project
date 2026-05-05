import { Link } from 'react-router-dom'; // Link-ni import qilamiz
import { useStore } from '../store/useStore';

const Card = ({ item }) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-[2.5rem] p-4 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-zinc-700 flex flex-col h-full group">
      
      {/* Rasm va Nomni Link bilan o'raymiz */}
      <Link to={`/product/${item.id}`} className="flex flex-col flex-grow">
        <div className="h-52 w-full overflow-hidden rounded-[2rem] mb-4 bg-gray-50 dark:bg-zinc-900">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1561651823-34fed022540e?w=500'; }}
          />
        </div>

        <div className="px-2 flex flex-col flex-grow">
          <h3 className="font-bold text-xl mb-1 group-hover:text-orange-500 transition-colors">
            {item.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 italic">{item.category}</p>
        </div>
      </Link>

      {/* Narx va Tugma qismi Link-dan tashqarida qolishi kerak */}
      <div className="px-2 mt-auto flex justify-between items-center pb-2">
        <span className="font-black text-lg text-orange-600 dark:text-orange-400">
          {item.price.toLocaleString()} so'm
        </span>
        <button 
          onClick={(e) => {
            e.preventDefault(); // Har ehtimolga qarshi link ishlashini to'xtatamiz
            addToCart(item);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-2xl shadow-lg shadow-orange-500/30 active:scale-90 transition-all flex items-center justify-center text-xl font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;