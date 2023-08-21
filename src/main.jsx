import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import AuthProvider from './context/AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer position='top-center'/>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
