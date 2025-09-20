import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Check if user is in localStorage
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/'); // redirect to login if not logged in
      return;
    }

    setLoggedInUser(JSON.parse(storedUser)); // store user info for greeting

    // ✅ Fetch users after confirming login
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user'); // ✅ clear stored user
    onLogout?.(); // optional callback
    navigate('/'); // redirect to login
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>👥 User Dashboard</h1>
        {loggedInUser && (
          <p className="welcome-text">
            Welcome, <strong>{loggedInUser.name || loggedInUser.email}</strong> 👋
          </p>
        )}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      {loading && <p className="loading">Loading users...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
