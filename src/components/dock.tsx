"use client";

import {
  Home,
  Search,
  Plus,
  Bell,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Dock = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed inset-x-0 bottom-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className={`bg-white shadow-lg flex items-center gap-4 px-6 py-3 rounded-full border border-gray-200 ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <button className="p-2 text-gray-600 hover:text-blue-500">
          <Home size={24} />
        </button>
        <button className="p-2 text-gray-600 hover:text-blue-500">
          <Search size={24} />
        </button>
        <button className="p-3 bg-blue-500 text-white rounded-full shadow-lg">
          <Plus size={24} />
        </button>
        <button className="p-2 text-gray-600 hover:text-blue-500">
          <Bell size={24} />
        </button>
        <button className="p-2 text-gray-600 hover:text-blue-500">
          <User size={24} />
        </button>
      </motion.div>
      <button
        className="mt-2 bg-gray-200 p-2 rounded-full shadow-md text-gray-600 hover:bg-gray-300"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
      </button>
    </div>
  );
};
