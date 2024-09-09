import React, { useState } from 'react';

function App() {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePing = async () => {
    setLoading(true);
    setResult('');
    try {
      const response = await window.api.ping(ip);
      setResult(response);
    } catch (error) {
      setResult('Error occurred while pinging.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Ping Application</h1>
      <input
        style={styles.input}
        type="text"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        placeholder="Enter IP address"
      />
      <button style={styles.button} onClick={handlePing} disabled={loading}>
        {loading ? 'Pinging...' : 'Ping'}
      </button>
      {loading && <p style={styles.loading}>Pinging in progress...</p>}
      {result && <pre style={styles.result}>{result}</pre>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  input: {
    width: '90%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  loading: {
    marginTop: '20px',
    color: '#999',
    fontStyle: 'italic',
  },
  result: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
  },
};

export default App;
