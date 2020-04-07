import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

import coverImg from '../../assets/cover.png'
import logoImg from '../../assets/logo.svg';

export default function Logon () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleemail(e) {
        e.preventDefault()

        const data = ({
            email,
            password,
        });
        
        try {
            const result = await api.post('sessions', data);
            console.log(result.data);
            localStorage.setItem('id', result.data.id);
            localStorage.setItem('email', result.data.email);
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
                <form onSubmit={handleemail}>
                    <input 
                        placeholder='Usuário'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        Quero me cadastrar
                    </Link>
                </form>
            </section>    
        </div>
    );
}