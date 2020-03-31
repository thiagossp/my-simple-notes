import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register () {
    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='My Simple Notes' />
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro e começe suas anotações agora mesmo.</p>
                    <Link className='back-link'to='/'>
                        <FiArrowLeft size={16} color='#00A82D' />
                        Já sou cadastrado.
                    </Link>
                </section>
                <form>
                    <input type='email' placeholder='E-mail' />
                    <input type='password' placeholder='Senha' />
                    <input type='password' placeholder='Confirme sua senha' />
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}