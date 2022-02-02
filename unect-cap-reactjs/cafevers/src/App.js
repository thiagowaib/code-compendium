//import FOTO from URL;
//import CSS from URL;
import React from "react";
import { BrowserRouter } from 'react-router-dom';

import './css/reset.css';
import Rotas from './routes';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
