import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated method
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
