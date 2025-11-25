import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { LanguageProvider } from './i18n/LanguageContext';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import Restaurant from './pages/Restaurant';
import Wellness from './pages/Wellness';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="accommodation" element={<Accommodation />} />
            <Route path="restaurant" element={<Restaurant />} />
            <Route path="wellness" element={<Wellness />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);
