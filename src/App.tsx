import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sobre from './paginas/sobre/Sobre';
import { Steps } from './components/steps/Steps';
import { Step } from '@material-ui/core';


function App() {
  return (


    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/sobre" element={<Sobre />} />

            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/listacategorias" element={<ListaCategoria />} />

            <Route path="/listaprodutos" element={<ListaProduto />} />

            <Route path="/formularioProduto" element={<CadastroProduto />} />

            <Route path="/formularioProduto/:id" element={<CadastroProduto />} />

            <Route path="/formularioCategoria" element={<CadastroCategoria />} />

            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

            <Route path="/steps" element={<Steps />} />

            <Route path="steps/:id" element={<Steps />} />

          </Routes>
        </div>
        <Footer />
      </Router>

    </Provider>



  );
}

export default App;

