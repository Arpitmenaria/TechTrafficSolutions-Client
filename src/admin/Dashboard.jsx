import React, { useEffect, useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const navigate = useNavigate();

  const fetchInquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await axios.get('http://localhost:5000/api/admin/inquiries', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setInquiries(res.data);
    } catch (err) {
      console.error(err);
      navigate('/admin'); // redirect to login if unauthorized
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Welcome, Admin</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <h3>Service Inquiries</h3>

      <div className="inquiry-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq) => (
              <tr key={inq._id}>
                <td>{inq.name}</td>
                <td>{inq.email}</td>
                <td>{inq.service}</td>
                <td>{inq.message}</td>
                <td>{new Date(inq.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
