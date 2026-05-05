import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

const branches = [
    {
        id: 1,
        name: "EVOS Chilonzor",
        address: "Toshkent sh., Chilonzor 1-kvartal, 4-uy",
        orientir: "Chilonzor metrosi yaqinida",
        phone: "+998 71 203 12 12",
        workTime: "09:00 - 03:00"
    },
    {
        id: 2,
        name: "EVOS Amir Temur",
        address: "Toshkent sh., Amir Temur ko'chasi, 25",
        orientir: "Oloy bozori qarshisida",
        phone: "+998 71 203 12 12",
        workTime: "24/7 (Kun-u tun)"
    },
    {
        id: 3,
        name: "EVOS Sergeli",
        address: "Toshkent sh., Sergeli 7-dahasi",
        orientir: "Dehqon bozori yonida",
        phone: "+998 71 203 12 12",
        workTime: "10:00 - 23:00"
    }
];

const Branches = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4">
            <h1 className="text-4xl font-black mb-10 tracking-tighter">Bizning Filiallar</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                <div className="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {branches.map((branch) => (
                        <div key={branch.id} className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-gray-100 dark:border-zinc-800 shadow-lg hover:border-orange-500 transition-all cursor-pointer group">
                            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500">{branch.name}</h3>
                            <div className="space-y-2 text-sm text-gray-500 dark:text-zinc-400">
                                <p className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-orange-500" /> {branch.address}</p>
                                <p className="flex items-center gap-2"><FaClock className="text-orange-500" /> {branch.workTime}</p>
                                <p className="flex items-center gap-2"><FaPhoneAlt className="text-orange-500" /> {branch.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="lg:col-span-2 h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 bg-gray-100 dark:bg-zinc-800">
                    <iframe
                        title="EVOS Locations"
                        src="https://maps.google.com/maps?q=EVOS%20Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Branches;