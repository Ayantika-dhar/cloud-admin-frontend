/*import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books');
    setBooks(res.data);
  };

  const scrapeNow = async () => {
    setLoading(true);
    await axios.post('http://localhost:5000/api/scrape');
    await fetchBooks();
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  return (
  <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
    <h2>Scraped Books</h2>
    <button
      onClick={scrapeNow}
      disabled={loading}
      style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}
    >
      {loading ? 'Scraping...' : 'Scrape Now'}
    </button>

    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {books.map((b, i) => (
          <tr key={i}>
            <td>{b.title}</td>
            <td>{b.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

}*/


import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    //const res = await axios.get('http://localhost:5000/api/books');
    const res = await axios.get('https://cloud-admin-backend-ff8y.onrender.com/api/books');
    setBooks(res.data);
  };

  const scrapeNow = async () => {
    setLoading(true);
    //await axios.post('http://localhost:5000/api/scrape');
    await axios.post('https://cloud-admin-backend-ff8y.onrender.com/api/scrape');

    await fetchBooks();
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: 'white',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>📚 Scraped Books</h2>

      <button
        onClick={scrapeNow}
        disabled={loading}
        style={{
          backgroundColor: '#1db954',
          color: 'white',
          border: 'none',
          padding: '0.7rem 1.5rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '2rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          transition: '0.2s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1ed760'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#1db954'}
      >
        {loading ? 'Scraping...' : 'Scrape Now'}
      </button>

      <table style={{
        width: '90%',
        maxWidth: '800px',
        borderCollapse: 'collapse',
        backgroundColor: '#1e1e1e',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#282828' }}>
            <th style={{ padding: '12px', borderBottom: '1px solid #333' }}>Title</th>
            <th style={{ padding: '12px', borderBottom: '1px solid #333' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b, i) => (
            <tr key={i}>
              <td style={{ padding: '10px', borderBottom: '1px solid #333' }}>{b.title}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #333' }}>{b.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

