import React from 'react';
import ReactDOM from 'react-dom';
import './Options.css';

const Options = () => {
  return (
    <div className="options-container">
      <h1>Verbo Options</h1>
      <p>Manage your voice commands here.</p>
      {/* Additional options for command customization can be added here */}
    </div>
  );
};

ReactDOM.render(<Options />, document.getElementById('root'));
