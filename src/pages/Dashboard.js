import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 800 },
  { name: 'Mar', users: 600 },
  { name: 'Apr', users: 1100 },
  { name: 'May', users: 900 },
];

const Dashboard = () => {
  useEffect(() => {
    toast.success('Welcome to the Dashboard!');
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Widget title="Total Users" value="1,234" />
        <Widget title="Active Users" value="321" />
        <Widget title="Campaigns Running" value="12" />
        <Widget title="Revenue" value="$8,450" />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

const Widget = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow text-center">
    <h4 className="text-gray-500">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default Dashboard;
