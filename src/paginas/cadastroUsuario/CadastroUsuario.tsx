import { useEffect, useState, ChangeEvent } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from "react-toastify";
import FormHelperText from '@mui/material/FormHelperText';


function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''

        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''

        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
                await cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            } catch (error) {
                console.log(`Error: ${error}`)

                toast.error('Erro ao cadastrar usuário!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            }
        } else {
            toast.error('Dados inconsistentes. Verifique as informações de cadastro', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            setUser({ ...user, senha: "" })
            setConfirmarSenha("")
        }
    }

    return (
        <Box className='container-cadastro'>
            <Paper elevation={16} className='paperStyle-cadastro'>
                <form onSubmit={cadastrar}>

                    <Box className='box-cadastro'>
                        <Typography variant='h5' align='center' className='loginText'>Cadastro</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome'
                            margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usario' label='Usuário' variant='outlined' name='usuario'
                            margin='normal' fullWidth />
                        <FormHelperText>Usuário deve ser um e-mail válido.</FormHelperText>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' type='password'
                            margin='normal' fullWidth />
                        <FormHelperText>Mínimo de oito dígitos</FormHelperText>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarsenha' label='Confirmar Senha' variant='outlined'
                            type='password' name='confirmarsenha' margin='normal' fullWidth />
                    </Box>
                    <Box className='botao-checar'>
                    </Box>
                    <Box marginTop={3} textAlign='center'>
                        <Button type='submit' className='button' variant="contained" fullWidth>
                            Cadastrar
                        </Button>
                    </Box>
                </form>
                <Box display='flex' justifyContent='end' marginTop={5}>
                    <Link to='/login' className='text-decorator-none'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='loginText' >Login</Typography>
                    </Link>
                </Box>
            </Paper>
        </Box>
    );

}

export default CadastroUsuario;