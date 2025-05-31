/*import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password === 'admin123') onLogin();
    else alert('Incorrect password');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}*/


import { useState } from 'react';
import Dashboard from './Dashboard';

export default function Login() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (password === 'admin123') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (loggedIn) return <Dashboard />;

  return (
    <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      padding: '2rem'
    }}>
      <h1 style={{ marginBottom: '1.5rem' }}>🔐 Admin Login</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #333',
          backgroundColor: '#1e1e1e',
          color: 'white',
          marginBottom: '1rem',
          width: '250px'
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: '#1db954',
          color: 'white',
          border: 'none',
          padding: '0.6rem 1.2rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background 0.2s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1ed760'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#1db954'}
      >
        Login
      </button>
    </div>
  );
}

