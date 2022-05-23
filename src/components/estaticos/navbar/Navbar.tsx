
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import Dropdown from './Dropdown';
import { Button } from './Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    var navbarComponent;



    if (token != "") {
        navbarComponent =
            <nav className='navbar'>
                <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src="https://i.imgur.com/OQaT7uV.png" width="75px"></img>
                    <i className='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/listacategorias'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Categorias <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/listaprodutos'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Produtos
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link
                            to='/steps'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <ShoppingCartIcon />
                        </Link>
                    </li>

                    <li>

                        <Link
                            to='login'
                            className='btn'
                            onClick={goLogout}>
                            Logout
                        </Link>

                    </li>
                </ul>
                <Button />
            </nav>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;