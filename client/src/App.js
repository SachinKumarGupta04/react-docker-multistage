import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Docker Multi-Stage Build Demo</h1>
        <p>
          Welcome to the Dockerized React Application!
        </p>
        <div className="info-section">
          <h2>🐳 Docker Multi-Stage Build</h2>
          <ul>
            <li>Stage 1: Node.js for building the React app</li>
            <li>Stage 2: Nginx for serving static files</li>
          </ul>
          <p className="benefit">Result: Optimized image size with separated build and runtime stages</p>
        </div>
        <div className="tech-stack">
          <h3>Tech Stack:</h3>
          <p>React • Docker • Nginx • Multi-Stage Build</p>
        </div>
      </header>
    </div>
  );
}

export default App;
