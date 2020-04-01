import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewNote () {
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    
    const login = localStorage.getItem('login');
    const history = useHistory();

    async function handleNewNote(e) {
        e.preventDefault();

        const data = ({
            name,
            body,
        });

        try {
            await api.post('notes', data, {
                headers: {
                    authorization: login,
                }
            });
            history.push('/client');
        } catch (error) {
            alert('Erro ao cadastrar a nota, tente novamente.')
        }
    }

    return (
        <div className='new-note-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='My Simple Note' />
                    </section>
                <form onSubmit={handleNewNote}>
                    <input 
                        placeholder='Título da nota' 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <textarea 
                        placeholder='Anotação'
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                    <div className='button-group'>
                        <button className='button' type='submit'>Salvar</button>
                        <Link className='button' to='/client'>Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}