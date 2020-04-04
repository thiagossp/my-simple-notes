import React, {useState, useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { useForm } from 'react-hook-form';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {

    const history = useHistory();

    const { 
        register,
        errors, 
        handleSubmit, 
        watch,
        triggerValidation,
        getValues,
        formState
    } = useForm({});

    const repeatVal = passwordRepeat => passwordRepeat === getValues().password || 'As senhas não conferem';
    const validateRepeat = () => {
        if (formState.isSubmitted) {
            triggerValidation({ name: 'passwordRepeat'});
        }
    ;}
    
    async function onSubmit(data) {
        const dataSend = {
            login: data.login,
            password: data.password
        }

        try {  
            await api.post('/user', dataSend)
            alert(`Usuário registrado com sucesso.`)
            history.push('/');
        } catch (error) {
            alert(`Erro ao realizar o cadastro, tente novamente.`);
        }
    }

    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='My Simple Notes' />
                    <p>Faça o seu cadastro e comece a fazer as suas anotações agora mesmo.</p>
                    <Link className='back-link'to='/'>
                        <FiArrowLeft size={16} color='#00A82D' />
                        Já sou cadastrado.
                    </Link>
                </section>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        name='login'
                        type='email'
                        placeholder='E-mail'
                        ref={register({
                            required:'Você precisa digitar um E-mail.'
                        })}
                    />
                    <input 
                        name='password'
                        type='password'
                        placeholder='Senha'
                        onChange={validateRepeat}
                        ref={register({
                            required: 'Você precisa digitar uma senha.',
                            minLength: {
                                value: 6,
                                message: 'A senha precisa ter no mínimo 6 caracteres.'
                            }
                        })}
                    /> {errors.password && <p>{errors.password.message}</p>}
                    <input 
                        name='passwordCheck'
                        type='password' 
                        placeholder='Confirme a sua senha' 
                        ref={register({
                            required: 'Você precisa confirmar a sua senha.',
                            validate: repeatVal
                        })}
                    /> {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}