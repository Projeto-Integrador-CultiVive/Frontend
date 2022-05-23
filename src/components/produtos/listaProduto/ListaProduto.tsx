import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import './ListaProduto.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function ListaProdutos() {


  const [produto, setProduto] = useState<Produto[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

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

  async function getProduto() {
    await busca("/produtos/all", setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getProduto()
  }, [produto.length])

  return (
    <>

      {

        produto.map(produto => (
          <div className="container-prod">
            <Box m={4} display="flex" justifyContent="space-between" >
              <Card className='produto-box' variant="outlined" >
                <CardContent>
                  <img className="img-produtos" src="https://i.imgur.com/UN2h0bU.jpg" alt="" />
                  <Typography className="produto-titulo" variant="h4" component="h1" color="textSecondary" gutterBottom>
                    {/* Produto */}
                  </Typography>
                  <Typography className="produto-nome" >
                    {produto.nome}
                  </Typography>
                  <Typography className="produto-info">
                    {produto.quantidade} unidades
                  </Typography>
                  <Typography className="produto-info">
                    R$ {produto.preco}
                    <Typography className="produto-infos" >
                      Validade: {produto.validade}
                    </Typography>

                  </Typography>
                </CardContent>
                <CardActions>
                  <Box className="button-produto" display="flex" justifyContent="space-around" mb={1.5} >


                    <Link to={`/steps/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' >
                          Comprar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginRight" size='small' >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button className="margintop" variant="contained" size='small'>
                          deletar
                        </Button>
                      </Box>

                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          </div>
        ))
      }
    </>
  );

}

export default ListaProdutos;