import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

import coverImg from '../../assets/cover.png'
import logoImg from '../../assets/logo.svg';

export default function Logon () {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault()

        const data = ({
            login,
            password,
        });
        
        try {
            await api.post('sessions', data);
            localStorage.setItem('login', login);
            history.push('client');
        } catch (error) {
            alert('Falha no login, tente novamente.')
        }
    }
    
    return (
        <div className='logon-container'>
            <img src={coverImg} alt='Capa' />

            <section className='form'>
                <img src={logoImg} alt='My Simple Notes' />
                <form onSubmit={handleLogin}>
                    <input 
                        placeholder='Usuário'
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input 
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
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