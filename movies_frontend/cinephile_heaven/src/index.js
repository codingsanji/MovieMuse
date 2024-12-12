import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
=======
import { BrowserRouter, Route , Routes  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
>>>>>>> 5c4cb7fe03ff652749d285c6b7e91f6b0ee61395

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
