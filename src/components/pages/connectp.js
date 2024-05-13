// ConnectPage.js
import React from 'react';
import './connectp.css';

const ConnectPage = () => {
  return (
    <div className="page-container">
      <div className="container-box">
        <div className="centered-container">
          <h1>Welcome to In-Sightz</h1>
          <p>Annalyse Your Content with one click </p>
          <button className="connect-button" onClick={() => console.log('Connect clicked')}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
