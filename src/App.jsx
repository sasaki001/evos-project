import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useStore } from './store/useStore';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Branches from './pages/Branches';

const Home = () => {
  const banners = [
    {
      id: 1,
      title: "MACHO LAVASH",
      desc: "Eng mazali va to'yimli lavash — faqat bizda!",
      image: "https://media.sports.uz/uploads/news/2026/04/21/69e775525539d.png",
      color: "bg-orange-500"
    },
    {
      id: 2,
      title: "MAXI BURGER",
      desc: "Sershira va ulkan burgerlar bilan haqiqiy lazzat!",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop",
      color: "bg-red-600"
    }
  ];

  return (
    /* mt-16 dan mt-6 ga kamaytirildi, bo'shliqni yo'qotish uchun */
    <div className="mt-6 md:mt-10 px-3 md:px-0 flex flex-col overflow-x-hidden">
      
      {/* Header - mb-6 dan mb-4 ga tushirildi */}
      <div className="text-center mb-4 md:mb-8">
        <div className="inline-block bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">
          Toshkent bo'ylab tezkor yetkazib berish
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-orange-500 mb-0 tracking-tighter">
          EVOS
        </h1>

        <p className="text-xs md:text-xl font-medium dark:text-zinc-400">
          Eng tezkor va mazali lavash Toshkentda! 🌯
        </p>
      </div>

      {/* Carousel - Balandlik mobil uchun optimallashdi */}
      <section className="w-full max-w-[1400px] mx-auto mb-6 md:mb-12">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-[2rem] md:rounded-[4rem] overflow-hidden h-[380px] sm:h-[450px] md:h-[600px] shadow-2xl"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className={`relative w-full h-full ${banner.color} flex items-center`}>

                {/* Image - Rasm mobil qurilmalarda ham ko'rinadi */}
                <div className="absolute inset-0 md:relative md:w-1/2 h-full z-10">
                  <img 
                    src={banner.image} 
                    alt={banner.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 md:relative md:w-1/2 md:p-16 text-white">
                  <h2 className="text-3xl md:text-7xl font-black mb-3 italic drop-shadow-xl">
                    {banner.title}
                  </h2>

                  <p className="text-sm md:text-2xl mb-5 opacity-90 font-medium max-w-sm">
                    {banner.desc}
                  </p>

                  <Link to="/menu">
                    <button className="bg-white text-zinc-900 px-6 py-2.5 md:px-8 md:py-4 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95">
                      Batafsil
                    </button>
                  </Link>
                </div>

                <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

function App() {
  const { isDarkMode, toggleTheme, cart } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300 flex flex-col">
        <Router>

          {/* NAVBAR */}
          <nav className="fixed top-0 w-full px-4 h-16 md:h-20 flex items-center bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 shadow-sm z-50">
            <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">

              <Link to="/" className="font-black text-orange-500 text-2xl md:text-3xl">
                EVOS
              </Link>

              <div className="flex items-center gap-3 md:gap-6">
                <div className="hidden md:flex gap-6">
                  <Link to="/menu" className="font-bold hover:text-orange-500">Menyu</Link>
                  <Link to="/branches" className="font-bold hover:text-orange-500">Filiallar</Link>
                </div>

                <button 
                  onClick={() => setMenuOpen(!menuOpen)} 
                  className="md:hidden text-2xl"
                >
                  ☰
                </button>

                <Link to="/login" className="font-bold bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-sm md:text-base">
                  Kirish
                </Link>

                <Link to="/cart" className="relative text-xl">
                  🛒
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                      {cartCount}
                    </span>
                  )}
                </Link>

                <button 
                  onClick={toggleTheme} 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-50 dark:bg-zinc-800 flex items-center justify-center"
                >
                  {isDarkMode ? '🌙' : '☀️'}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden fixed top-16 left-0 w-full bg-white dark:bg-zinc-900 shadow-lg z-40 flex flex-col items-center py-6 gap-4 text-lg font-semibold border-b border-gray-100 dark:border-zinc-800">
              <Link to="/menu" onClick={() => setMenuOpen(false)}>Menyu</Link>
              <Link to="/branches" onClick={() => setMenuOpen(false)}>Filiallar</Link>
            </div>
          )}

          {/* Routes - Paddinglar kamaytirildi */}
          <main className="flex-grow pt-16 md:pt-20 pb-10 md:pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;