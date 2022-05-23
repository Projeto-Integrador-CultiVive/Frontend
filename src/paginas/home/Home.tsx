import React, { useEffect } from "react";
import { Box, Button, Grid, Typography } from '@material-ui/core';
import './Home.css';
import CarouselComponent from '../../components/Carousel/CarouselComponent';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import ListaProdutos from "../../components/produtos/listaProduto/ListaProduto";
import TabProduto from "../../components/produtos/tabProduto/TabProduto";



function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );



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
    return (
        <>



            <Grid container>
                <Grid item xs={12}>

                    <CarouselComponent />
                </Grid>
            </Grid>
            {/* <Grid container className='grid-home2'>
                <Grid item xs={12} justifyContent="center">
                    <a href="https://imgur.com/Ae7KQpZ" ><img className="img-banner" src="https://i.imgur.com/Ae7KQpZ.png" title="source: imgur.com" /></a>
                </Grid>
            </Grid> */}
            <Grid container className='grid-banner'>
                <Grid item xs={4} justifyContent="center">
                    <a href="https://i.imgur.com/jhDhrMx.png" ><img className="img-banner" src="https://i.imgur.com/jhDhrMx.png" title="source: imgur.com" /></a>
                </Grid>
                <Grid item xs={4} justifyContent="center">
                    <a href="https://i.imgur.com/tkkrJar.png" ><img className="img-banner" src="https://i.imgur.com/tkkrJar.png" title="source: imgur.com" /></a>
                </Grid>
                <Grid item xs={4} justifyContent="center">
                    <a href="https://i.imgur.com/8QyaPAt.png" ><img className="img-banner" src="https://i.imgur.com/8QyaPAt.png" title="source: imgur.com" /></a>
                </Grid>
            </Grid>

            <Grid xs={12} className="container-prod-tab" >
                <h1 className="produto-title">Nossos Produtos</h1>
                <TabProduto />


            </Grid>
            {/* <Grid xs={12} className="produto-logo" >
                <img src="https://i.imgur.com/C6vdCrK.png" alt="" width="400px" height="200px" />


            </Grid> */}

            {/* 
            <h1>Sobre</h1>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa' style={{ backgroundColor: "grey" }}>

                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >

                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Conheça a cultivive</Typography>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/C6vdCrK.png" alt="" width="400px" height="200px" />
                </Grid>
            </Grid> */}




        </>
    );
}

export default Home;

{/* <Grid className="Container-home" xs={12} style={{ backgroundColor: "white" }}>
            </Grid>
            <Grid className="bem-vinde" container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#D8E59E" }}>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} >
                        <Typography className="title-bem" variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "purple", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography className="title-cult" variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "purple", fontWeight: "bold" }}>Cultivive</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box className="marginRight" marginRight={1}>
                            <ModalProduto />
                        </Box>
                        <Link to='/listaprodutos' className=' text-decorator-none '>
                            <Button className="marginRight" variant="outlined" style={{ borderColor: "white", backgroundColor: "#c57e03", color: "black" }}>Produtos</Button>
                        </Link>
                    </Box>
                </Grid>

            </Grid> */}

