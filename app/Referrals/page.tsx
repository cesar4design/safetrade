'use client'

import React, { useState } from 'react';

import "./page.css";

export default function Home() {

    return <>

        <section className='main-section'>

            <section className='market-top'>
                <h1>Mi perfil</h1>
            </section>

            <div className='ola'></div>


            <section className='global-perfil'>

                <section className='perfil-section'>
                    <div className='user-container'>
                        <h1 className='user-profile'>U</h1>
                        <p className='user-name'>Usuario</p>
                    </div>
                    <p className='user-stats'>✦ 4,5  | ☑︎ 110 ordenes</p>
                </section>


                <div className='ubicación-section'>
                    <p>Ubicación: Buenos Aires</p>
                    <button>Cambiar</button>
                </div>

            </section>



        </section>



    </>;
}


