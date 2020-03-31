import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css'

import coverImg from '../../assets/cover.png'
import logoImg from '../../assets/logo.svg';

export default function Logon () {
    return (
        <div className='logon-container'>
            <img src={coverImg} alt='Capa' />

            <section className='form'>
                <img src={logoImg} alt='My Simple Notes' />
                <form>
                    <input placeholder='Usuário' />
                    <input placeHolder='Senha' />
                    <button className='button' type='submit'>Entrar</button>

                    <Link className='back-link' to='/register'>
                        <FiLogIn size={16} color="#00A82D" />
                        Novo Usuário
                    </Link>
                </form>
            </section>    
        </div>
    );
}