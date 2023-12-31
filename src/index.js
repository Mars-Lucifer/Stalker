//Sistem
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
//My Page
import ScreenOne from './base/js/screen1';
import ScreenTwo from './base/js/screen2';
import ScreenThree from './base/js/screen3';
import ScreenFour from './base/js/screen4';
import ScreenFive from './base/js/screen5';
import ScreenSix from './base/js/screen6';
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
  <ScreenTwo />
  <ScreenThree />
  <ScreenFour />
  <ScreenFive />
  <ScreenSix />

  <Analytics/>
</div>)