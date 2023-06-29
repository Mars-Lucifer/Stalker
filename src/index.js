//Sistem
import React from 'react';
import ReactDOMClient from 'react-dom/client';
//My Page
import ScreenOne from './base/js/screen1';
//CSS
import './index.css';
import "./base/css/3D.css"
import "./base/css/box.css"
import "./base/css/button.css"
import "./base/css/font.css"
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<div>
  <ScreenOne />
</div>)