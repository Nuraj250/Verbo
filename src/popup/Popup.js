import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

const Popup = () => {
  return (
    <div className="popup-container">
      <h1>Verbo</h1>
      <p>Click the button to start voice recognition.</p>
      <button id="start-btn">Start Listening</button>
    </div>
  );
};

// Event listener to start recognition from popup
document.getElementById('start-btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ command: 'start' });
});

ReactDOM.render(<Popup />, document.getElementById('root'));
