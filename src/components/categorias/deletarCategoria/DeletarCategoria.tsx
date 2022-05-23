import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categoria, setCategoria] = useState<Categoria>()

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


  function sim() {
    navigate('/listacategorias')
    deleteId(`/categorias/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Categoria deletada com sucesso!', {
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
    navigate('/listacategorias')
  }

  return (
    <>
      <Box m={2} className="categorias-box-cat">
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography className="title-delete-cat" color="textSecondary" gutterBottom>
                Deseja deletar a Categoria:
              </Typography>
              <Typography className="text-delete-cat" color="textSecondary">
                Tipo: {categoria?.tipo}
              </Typography>
              <Typography className="text-delete-cat" color="textSecondary">
                Descrição: {categoria?.descricao}
              </Typography>

            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} className="marginLeftcate" >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} className="marginRightcate" >
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
export default DeletarCategoria;