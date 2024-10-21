'use client'

import React, { useState } from 'react';

import "./page.css";

export default function Home() {

  const [selected, setSelected] = useState('comprar')

  const [activeTab, setActiveTab] = useState('USDT');
  const tabs = ['USDT', 'USD', 'Transferencia'];

  return <>

    <section className='main-section'>

      <section className='market-top'>
        <h1>SafeTrade Mkt</h1>

        <div className="toggle-container">
          <button
            className={`toggle-button ${selected === 'comprar' ? 'selected comprar' : ''}`}
            onClick={() => setSelected('comprar')}
          >
            Comprar
          </button>
          <button
            className={`toggle-button ${selected === 'vender' ? 'selected vender' : ''}`}
            onClick={() => setSelected('vender')}
          >
            Vender
          </button>
        </div>

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

      <section className='order-section'>
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
            <button>Contactar</button>
          </div>
        </div>
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
            <button>Contactar</button>
          </div>
        </div>
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
            <button>Contactar</button>
          </div>
        </div>
      </section>

    </section>



  </>;
}


