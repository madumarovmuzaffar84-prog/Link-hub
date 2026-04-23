"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Wrench, Award } from "lucide-react";

// Data Configuration
const PORTFOLIO = [
  {
    id: 1,
    title: "iPhone 14 Pro - CPU Reballing",
    image: "https://images.unsplash.com/photo-1605141165049-9010ee4fc3f3?q=80&w=600&auto=format&fit=crop",
    url: "https://www.instagram.com/reel/DRSCmeHjO0b/",
  },
  {
    id: 2,
    title: "MacBook Pro M2 - Logic Board Ta'miri",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
    url: "https://www.instagram.com/reel/DXZg3LeDNTT/",
  },
];

const LINKS = [
  {
    name: "Telegram",
    url: "https://t.me/yourusername",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    ),
    color: "text-blue-400",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/muzaffar_idoctor/reels/",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    color: "text-pink-500",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/yourusername",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
      </svg>
    ),
    color: "text-red-500",
  },
];

const STATS = [
  { label: "18+ Yil Tajriba", icon: Award },
  { label: "10k+ Qurilmalar", icon: Wrench },
  { label: "Original extiyot qismlar", icon: ShieldCheck },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="relative min-h-screen pb-20 overflow-x-hidden selection:bg-indigo-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600 rounded-full blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-violet-600 rounded-full blur-[120px] opacity-20 animate-blob-reverse"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-cyan-600 rounded-full blur-[120px] opacity-20 animate-blob"></div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-[600px] mx-auto px-4 sm:px-6 pt-16 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center w-full mb-10">
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute -inset-1 rounded-[28%] ring-1 ring-white/20 bg-gradient-to-tr from-white/10 to-transparent"></div>
            <img 
              src="https://ui-avatars.com/api/?name=iDoctor&background=2563eb&color=fff&size=512&rounded=false&bold=true" 
              alt="iDoctor" 
              className="w-full h-full object-cover squircle shadow-2xl"
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            iDoctor Apple maxsulotlarini ta'mirlash serivisi
          </h1>
          <p className="text-gray-300 font-medium max-w-md text-base sm:text-lg leading-relaxed">
            to'gri diagnostika orqali ta'mirni osonlashtirib Sizni vaqtingizni tejaymiz.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full grid grid-cols-3 gap-2 mb-10">
          {STATS.map((stat, idx) => (
            <div key={idx} className="glass-panel flex flex-col items-center justify-center p-3 sm:p-4 text-center group hover:bg-white/10 transition-colors">
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 mb-2 group-hover:text-white transition-colors" />
              <span className="text-[10px] sm:text-xs font-semibold text-gray-300 tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="w-full mb-10">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 pl-2">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO.map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full h-48 sm:h-56 rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-3 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium text-white truncate">{item.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex flex-col">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 pl-2">Aloqa va Tarmoqlar</h2>
          {LINKS.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 mb-3 sm:mb-4 w-full flex items-center justify-between bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <link.icon className={`w-5 h-5 ${link.color}`} />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                  {link.name}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
