import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Client () {
    return (
        <div className='client-container'>
            <header>
                <img src={logoImg} alt='My Simple Notes' />
                <span>Seja bem vindo(a), Fulano</span>
                <Link className='button' to='/notes/new'>Nova nota</Link>
                <button type='button'>
                    <FiPower size={18} color='#E02041' />
                </button>
            </header>

            <h1>Minhas anotações</h1>
            <ul>
                <li>
                    <strong>#TITULO#</strong>
                    <p>#Corpo da nota</p>
                    <p>Data de criação: 31/03/2020 09:00</p>
                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>#TITULO#</strong>
                    <p>#Corpo da nota</p>
                    <p>Data de criação: 31/03/2020 09:00</p>
                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>#TITULO#</strong>
                    <p>#Corpo da nota</p>
                    <p>Data de criação: 31/03/2020 09:00</p>
                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>
                
                <li>
                    <strong>#TITULO#</strong>
                    <p>#Corpo da nota</p>
                    <p>Data de criação: 31/03/2020 09:00</p>
                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>
                
                <li>
                    <strong>#TITULO#</strong>
                    <p>#Corpo da nota</p>
                    <p>Data de criação: 31/03/2020 09:00</p>
                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>#TITULO#</strong>
                    <p>#Corpo da nota</p>
                    <p>Data de criação: 31/03/2020 09:00</p>
                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

            </ul>
        </div>
    );
}