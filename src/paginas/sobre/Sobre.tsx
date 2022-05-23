import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import './Sobre.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Sobre() {
  return (
    <>
      <Grid className='container-titulo-equipe'>
        <Typography variant="h4" color="initial" className='titulo-equipe'>Nossa Equipe</Typography>
      </Grid>
      <Grid className='container-equipe'>
        <Card className='cartao'>
          <CardMedia
            component="img"
            height="300px"
            image="https://i.imgur.com/15EiNyJ.png"
            alt="emanuel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="nome">
              Emanuel Avelino
            </Typography>
            <Typography variant="body2" color="text.secondary" className="texto-card">
              22 anos, São Paulo -SP. Desenvolvedor java Junior, gosta de filosofia, rock e música clássica. Tem um gatinho chamado Elliot.
            </Typography>
          </CardContent>

          <CardActions className="botao-card" >
            <Box mx={1}>
              <a href="https://github.com/Emanuelit" target="_blank" className='text-decorator-none'>
                <GitHubIcon className='git' />
              </a>
            </Box>
            <Box mx={1}>
              <a href="https://www.linkedin.com/in/emanuel-avelino-418873227/" target="_blank" className='text-decorator-none'>
                <LinkedInIcon className='linkedin' />
              </a>
            </Box>
          </CardActions>
        </Card>

        <Card className='cartao'>
          <CardMedia
            component="img"
            height="300px"
            image="https://i.imgur.com/RUNyVED.jpg"
            alt="joao"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="nome">
              João Pedro Flauzino
            </Typography>
            <Typography variant="body2" color="text.secondary" className="texto-card">
              19 anos, Diadema-SP. Desenvolvedor Java Junior, apaixonado por tecnologia, viagens e história.
            </Typography>
          </CardContent>

          <CardActions className="botao-card" >
            <Box mx={1}>
              <a href="https://github.com/JoaoPedroFN19" target="_blank" className='text-decorator-none'>
                <GitHubIcon className='git' />
              </a>
            </Box>
            <Box mx={1}>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-flauzino-nascimento-4a931b232/" target="_blank" className='text-decorator-none'>
                <LinkedInIcon className='linkedin' />
              </a>
            </Box>
          </CardActions>
        </Card>

        <Card className='cartao'>
          <CardMedia
            component="img"
            height="300px"
            image="https://i.imgur.com/kHxHt7i.jpg"
            alt="miguel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="nome">
              Miguel Veríssimo
            </Typography>
            <Typography variant="body2" color="text.secondary" className="texto-card">
              19 anos, Diadema - SP. Desenvolvedor Front-End Junior, curte esportes em geral, música kpop e livros de fantasia.
            </Typography>
          </CardContent>

          <CardActions className="botao-card" >
            <Box mx={1}>
              <a href="https://github.com/miguel-vr" target="_blank" className='text-decorator-none'>
                <GitHubIcon className='git' />
              </a>
            </Box>
            <Box mx={1}>
              <a href="https://www.linkedin.com/in/miguel-verissimo/" target="_blank" className='text-decorator-none'>
                <LinkedInIcon className='linkedin' />
              </a>
            </Box>
          </CardActions>
        </Card>

        <Card className='cartao'>
          <CardMedia
            component="img"
            height="300px"
            image="https://i.imgur.com/OkVZAVD.jpg"
            alt="rosi"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="nome">
              Rosi Martins
            </Typography>
            <Typography variant="body2" color="text.secondary" className="texto-card">
              30 anos, Goiânia - GO. Desenvolvedora Front-End, fotógrafa, apaixonada por cinema, gatos e jogos digitais.
            </Typography>
          </CardContent>

          <CardActions className="botao-card" >
            <Box mx={1}>
              <a href="https://github.com/rrrmars" target="_blank" className='text-decorator-none'>
                <GitHubIcon className='git' />
              </a>
            </Box>
            <Box mx={1}>
              <a href="https://www.linkedin.com/in/rosi-martins-379482139/" target="_blank" className='text-decorator-none'>
                <LinkedInIcon className='linkedin' />
              </a>
            </Box>
          </CardActions>
        </Card>

        <Card className='cartao'>
          <CardMedia
            component="img"
            height="300px"
            image="https://i.imgur.com/NKAPkWR.jpg"
            alt="sabrina"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="nome">
              Sabrina Barros
            </Typography>
            <Typography variant="body2" color="text.secondary" className="texto-card">
              31 anos, Americana -SP. Desenvolvedora Back-end Junior, gosta de Geografia, Cosmologia e milka.
            </Typography>
          </CardContent>

          <CardActions className="botao-card" >
            <Box mx={1}>
              <a href="https://github.com/Sabrinabarsil" target="_blank" className='text-decorator-none'>
                <GitHubIcon className='git' />
              </a>
            </Box>
            <Box mx={1}>
              <a href="https://www.linkedin.com/in/sabrina-barros-bb9914231/" target="_blank" className='text-decorator-none'>
                <LinkedInIcon className='linkedin' />
              </a>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}