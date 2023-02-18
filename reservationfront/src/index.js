import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Resset/resset.scss"
import App from './App';
import { SearchContextProvider } from './Context/SearchContext';
import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider >
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

