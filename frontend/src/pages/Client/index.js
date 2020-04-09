import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Client () {
    const [notes, setNotes] = useState([]);
    const history = useHistory();

    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');

    useEffect(() => {
        api.get('notes', {
            headers: {
                authorization: id,
            }
        }).then(response => {
            setNotes(response.data)
        })
    }, [id]);

    async function handleDeleteNote(id) {
        try {
            await api.delete(`notes/${id}`, {
                header: {
                    authorization: id
                }
            });
            setNotes(notes.filter(note => note.id !== id));
        } catch (error) {
            alert('Erro ao deletar a nota, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    
    return (
        <div className='client-container'>
            <header>
                <img src={logoImg} alt='My Simple Notes' />
                <span>Seja bem vindo(a), {email}</span>
                <Link className='button' to='/notes/new'>Nova nota</Link>
                <button type='button' onClick={handleLogout}>
                    <FiPower size={18} color='#E02041' />
                </button>
            </header>

            <h1>Minhas anotações</h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <strong>{note.name}</strong>
                        <pre>{note.body}</pre>
                        <p>{
                            Intl.DateTimeFormat('pt-BR', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric'
                            }).format(note.datetime)
                        }</p>
                        <button type='button' onClick={() => handleDeleteNote(note.id)}>
                            <FiTrash2 size={20} color='#a8a8b3' />
                        </button>
                    </li>
                ))}
                
            </ul>
        </div>
    );
}