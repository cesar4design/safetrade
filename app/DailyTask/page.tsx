'use client'

import React, { useState } from 'react';

import "./page.css";

export default function Home() {

  const [activeTab, setActiveTab] = useState('Abiertas');
  const tabs = ['Abiertas', 'Pendientes', 'Cerradas'];

  return <>

    <section className='main-section'>

      <section className='market-top'>
        <h1>Mis ordenes</h1>

        <nav className="tabbed-nav">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

      </section>

      <section className='my-order-section'>
        <div className='order-container'>
          <div className='order-top'>
            <h1 className='order-user-img'>U</h1>
            <p className='order-user'>Usuario 1</p>
            <p>| ✦ 4,5  | ☑︎ 110 ordenes</p>
          </div>
          <div className='order-info'>
            <p>Vende <span className='order-token'>100 $USDT</span> </p>
            <p>Por <span className='order-token'>100 $USDT</span> </p>
          </div>
          <div className='order-bottom'>
            <p className='order-payment'>Efectivo, Paypal</p>
            <button>Cerrar</button>
          </div>
        </div>
        
      </section>

    </section>



  </>;
}


