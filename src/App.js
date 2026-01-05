import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Cloud Status Dashboard</h1>
      <p>This is a placeholder dashboard demonstrating cloud-aware frontend skills.</p>

      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Network Status</h3>
          <p>All systems operational.</p>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Server Status</h3>
          <p>Running on cloud infrastructure.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
