import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [produto, setProduto] = useState<Produto>()

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
    buscaId(`/produtos/${id}`, setProduto, {
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

  function sim() {
    navigate('/listaprodutos')
    deleteId(`/produtos/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Produto deletado com sucesso!', {
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

  function nao() {
    navigate('/listaprodutos')
  }

  return (
    <>
      <Box m={2} className="categorias-box-prod">
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography className="title-delete-prod" color="textSecondary" gutterBottom>
                Deseja deletar o Produto:
              </Typography>
              <Typography className="text-delete-prod" color="textSecondary">
                Nome: {produto?.nome}
              </Typography>
              <Typography className="text-delete-prod" color="textSecondary">
                Validade: {produto?.validade}
              </Typography>
              <Typography className="text-delete-prod" color="textSecondary">
                {produto?.quantidade} unidades
              </Typography>
              <Typography className="text-delete-prod" color="textSecondary">
                R$ {produto?.preco}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeftprod" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary" className="marginRightprod" >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProduto;