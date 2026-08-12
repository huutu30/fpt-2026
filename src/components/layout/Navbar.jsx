import React from 'react';
import { Phone } from 'lucide-react';
import { HOTLINE } from '../../data/menuConfig';

export default function Navbar() {
  return (
    <header className="site-header" style={{
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #eef2f6',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/logo-ftel.svg"
            alt="FPT Telecom Logo"
            style={{ height: '36px', objectFit: 'contain' }}
          />
        </a>
      </div>
      <div>
        <a
          href={`tel:${HOTLINE.replace(/\s/g, '')}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#f97316',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'background-color 0.2s',
            boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.2)'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
        >
          <Phone size={14} fill="currentColor" />
          <span>Hotline: {HOTLINE}</span>
        </a>
      </div>
    </header>
  );
}
