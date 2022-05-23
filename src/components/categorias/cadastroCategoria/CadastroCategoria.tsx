import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core"
import './CadastroCategoria.css';
import { useNavigate, useParams } from "react-router-dom";
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";


function CadastroCategoria() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        tipo: ''

    })

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            navigate('/login')
        }
    }, [token])

    async function findById(id: String) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (id !== undefined) {
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('A Categoria foi atualizada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('A categoria foi cadastrada com sucesso!', {
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
        back()
    }

    function back() {
        navigate('/listaCategorias')
    }

    return (
        <body className='body-cadastro'>
            <Container maxWidth='sm' className='topo'>
                <form onSubmit={onSubmit}
                    className="form-cat">
                    {/* <img src="https://i.imgur.com/OORgFQD.png" alt="" className='img-cat' width="60px" height="60px" /> */}
                    <Typography variant='h3' color='textSecondary' component="h1" align='center' >Cadastro Categoria</Typography>
                    <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id='tipo' label='Tipo' className="tipo-cat" variant='outlined' name='tipo' />
                    <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id='descricao' className="desc-cat" label='Descrição' variant='outlined' name='descricao' />
                    <Button type='submit' className="finalizar-cat">
                        Finalizar
                    </Button>
                </form>

            </Container>
        </body>
    )
}

export default CadastroCategoria