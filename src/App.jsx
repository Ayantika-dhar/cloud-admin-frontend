import { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      {isLoggedIn ? <Dashboard /> : <LoginForm onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App;
