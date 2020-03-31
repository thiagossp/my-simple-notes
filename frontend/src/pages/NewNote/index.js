import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewNote () {
    return (
        <div className='new-note-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='My Simple Note' />
                    </section>
                <form>
                    <input placeholder='Título da nota' />
                    <textarea placeholder='Anotação' />
                    <div className='button-group'>
                        <button className='button' type='submit'>Salvar</button>
                        <Link className='button' to='/client'>Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}