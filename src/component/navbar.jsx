import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        
        <img src="/logo.png" alt="Influencexrn" className="h-10 w-auto mr-3" />
<span className="font-bold text-xl">Influencexrn</span>

        <Link to="/home" className="text-xl font-bold tracking-wide hover:opacity-80">
          InfluenceXrn
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/" className="hover:underline">Logout</Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
