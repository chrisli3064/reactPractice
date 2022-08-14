import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// injects the app compnent into the root element in the div with tag root

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
