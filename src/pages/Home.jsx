// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 800 },
  { name: 'Mar', users: 1600 },
  { name: 'Apr', users: 3200 },
];

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 5000 ? prev + 50 : 5000));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to InfluenceXrn 🌟</h1>
      
      <p className="mb-8 italic text-lg max-w-3xl">
        “You don’t need 1 million followers to make a difference — just the right brand.” – <strong>@fakeinfluencer</strong>
      </p>

      <motion.div 
        className="bg-white text-black p-6 rounded-2xl shadow-lg max-w-md mb-8"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl font-semibold mb-2">Total Users Reached:</p>
        <p className="text-4xl font-bold text-indigo-700">{count.toLocaleString()}</p>
      </motion.div>

      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl">
        <h2 className="text-2xl font-semibold text-black mb-4">Growth Preview 📈</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#6366f1" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <motion.div 
        className="mt-10 max-w-3xl bg-indigo-800 p-6 rounded-xl shadow-md"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-2">📢 Success Story</h3>
        <p>
          “InfluenceXrn helped me collaborate with 3 major brands in 2 months. The dashboard analytics made it super easy to understand my growth.”  
          – <strong>Riya, Lifestyle Influencer</strong>
        </p>
      </motion.div>
      <CountUp start={0} end={2500} duration={3} separator="," />
<p className="text-sm text-gray-300">Influencers Connected</p>
<blockquote className="italic text-white mt-4">
  "Influencexrn helped me grow from 10K to 100K in 3 months!" 
  <span className="block mt-2 text-sm text-gray-300">– @trendify_queen</span>
</blockquote>
<section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-8 rounded-lg shadow-lg mt-10">
  <h3 className="text-xl font-bold mb-2">Our Journey</h3>
  <p>
    Started with a vision to connect brands with real voices, Influencexrn now supports over 2500 creators and 120+ brands.
  </p>
</section>
    <LineChart width={300} height={200} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="growth" stroke="#9333EA" />
    </LineChart>
    

    </div>
  );
};

export default Home;
