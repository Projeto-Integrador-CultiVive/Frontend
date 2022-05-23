import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, Grid, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: '',
        descricao: ''
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

    const [produtos, setProdutos] = useState<Produto>({
        id: 0,
        nome: '',
        preco: 0,
        quantidade: 0,
        validade: '',
        categoria: null
    })

    useEffect(() => {
        setProdutos({
            ...produtos,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProdutos({
            ...produtos,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(token)
        console.log(produtos)

        if (id !== undefined) {
            put(`/produtos`, produtos, setProdutos, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto atualizado com sucesso!', {
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
            post(`/produtos`, produtos, setProdutos, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto cadastrado com sucesso!', {
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
        navigate('/listaprodutos')
    }

    return (
        <body className='body-cadastro'>


            <Grid className="container-form" container direction='row' justifyContent='center' alignItems='center'>
                {/* <Grid item xs={4} className='imagem2'>
                <img src="https://i.imgur.com/8DnIx2S.jpg" alt="" width="472.4px" height="600.5px" />
            </Grid> */}
                <Grid item xs={4} alignItems='center'>
                    <Container maxWidth="sm" className="topo">
                        <form onSubmit={onSubmit} className="form-prod">
                            {/* <img src="https://i.imgur.com/OORgFQD.png" alt="" className='img-form' width="80px" height="80px" /> */}
                            <Typography variant="h3" color="textSecondary" component="h1" align="center" > Cadastre um Produto</Typography>

                            <TextField value={produtos.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />

                            <TextField value={produtos.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço R$" name="preco" variant="outlined" margin="normal" fullWidth />

                            <TextField value={produtos.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="Quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />

                            <TextField value={produtos.validade} InputLabelProps={{
                                shrink: true,
                            }} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="date" label="Validade" type="date" name="validade" variant="outlined" margin="normal" defaultValue="2017-05-24" fullWidth />


                            <FormControl >
                                <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"

                                    onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                                        headers: {
                                            'Authorization': token
                                        }
                                    })}>
                                    {
                                        categorias.map(categoria => (
                                            <MenuItem className="categor" value={categoria.id}>{categoria.descricao} </MenuItem>
                                        ))
                                    }
                                </Select>
                                <FormHelperText>Escolha uma categoria para produto</FormHelperText>
                                <Button type="submit" className="finalizar" >
                                    Finalizar
                                </Button>
                            </FormControl>
                        </form>
                    </Container>
                </Grid>
            </Grid>
        </body>
    )
}
export default CadastroProduto;

