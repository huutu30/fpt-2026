import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider, HelmetData } from 'react-helmet-async';

// Layout & Common
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/common/FloatingContact';

// Pages
import Home from './pages/home/Home';

export function getRoutes() {
  return ['/'];
}

export function render(url) {
  const helmetData = new HelmetData({});
  const activeCity = 'toan-quoc';
  const region = 'hcm';

  const html = renderToString(
    <HelmetProvider context={helmetData.context}>
      <StaticRouter location={url}>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <FloatingContact />

          <main id="main-content" role="main" style={{ flex: '1 0 auto' }}>
            <Routes>
              <Route path="/" element={<Home region={region} activeCity={activeCity} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetData.context.helmet };
}

