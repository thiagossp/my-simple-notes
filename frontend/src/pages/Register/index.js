import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {

    const history = useHistory();

    const [login, setLogin] = useState('');
    const [password, setpassword] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = ({
            login,
            password,
        });

        try {
            await api.post('/user', data);
            alert(`Usuário registrado com sucesso.`)
            history.push('/');
        } catch (error) {
            alert('Erro ao realizar o cadastro, tente novamente.');
        }
    }

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
                <form onSubmit={handleRegister}>
                    <input 
                        type='email'
                        placeholder='E-mail'
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input 
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={e => setpassword(e.target.value)}
                    />
                    <input type='password' placeholder='Confirme sua senha' />
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}