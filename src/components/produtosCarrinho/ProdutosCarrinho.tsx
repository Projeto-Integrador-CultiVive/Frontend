import React, { useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, Card, TextField, Typography, Paper } from '@material-ui/core'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Produto from '../../models/Produto'
import { buscaId } from '../../services/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'
import './ProdutosCarrinho.css'


export function ProdutosCarrinho() {

    let history = useNavigate()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [quantidadeFinal, setQuantidadeFinal] = useState(0)

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "",
        preco: 0,
        quantidade: 0,
        validade: "",
    })


    useEffect(() => {
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let valor = +e.target.value
        setQuantidadeFinal(valor);
    }

    function valorTotal() {
        return quantidadeFinal * produto.preco
    }

    return (

        <Box p={4}>
            <Paper elevation={3} className="paper">

                <Typography variant="h5" component="h2">
                    Produto: {produto.nome}
                </Typography>

                <Typography variant="body2" component="p">
                    R$ {produto.preco}
                </Typography>

                <Typography variant="body2" component="p">
                    Quantidade: {produto.quantidade}
                </Typography>

            </Paper>
        </Box>
    )
}

