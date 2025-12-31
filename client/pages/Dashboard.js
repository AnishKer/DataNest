import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user info and analytics
    const fetchData = async () => {
      try {
        const userRes = await axios.get('/api/auth/me', { withCredentials: true });
        setUser(userRes.data.user);
        const statsRes = await axios.get('/api/analytics/summary', { withCredentials: true });
        setStats(statsRes.data);
      } catch (err) {
        setError('Failed to load dashboard');
      }
    };
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!user || !stats) return <div>Loading...</div>;

  return (
    <div>
      <h2>Welcome, {user.username} ({user.role})</h2>
      <h3>Dashboard</h3>
      {user.role === 'admin' && (
        <div>
          <h4>Admin Panel</h4>
          <p>User Management, Full CRUD, Analytics</p>
        </div>
      )}
      {user.role === 'user' && (
        <div>
          <h4>User Panel</h4>
          <p>Limited CRUD, Personal Stats</p>
        </div>
      )}
      {user.role === 'viewer' && (
        <div>
          <h4>Viewer Panel</h4>
          <p>Read-only access</p>
        </div>
      )}
      <div>
        <h4>Analytics Summary</h4>
        <pre>{JSON.stringify(stats, null, 2)}</pre>
      </div>
    </div>
  );
}
