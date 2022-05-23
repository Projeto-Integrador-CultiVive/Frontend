import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaCategoria.css';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
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
            navigate("/login")
        }
    }, [token])

    async function getCategoria() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categorias.length])
    return (
        <>
            {
                categorias.map(categoria => (
                    <Box m={2} className="categorias-box" >
                        <Card className='produto-box' variant="outlined">
                            <CardContent>
                                <Typography
                                    className="title-prod-cat" color="textSecondary" gutterBottom>
                                    Categoria
                                </Typography>
                                <img className="img-categoria" src="https://i.imgur.com/UTmxrdY.jpg" alt="" />

                                <Typography className="title-prod" variant="h5" component="h2">
                                    Tipo: {categoria.tipo}
                                </Typography>
                                <Typography className="title-prod" variant="h5" component="h2">
                                    Descrição: {categoria.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button className="marginLeftcat"  >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button className="marginRightcat">
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}

export default ListaCategoria;