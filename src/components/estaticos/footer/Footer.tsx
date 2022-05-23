
import InstagramIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Footer() {

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

    return (
        <>
            <Grid className="box" container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box" >
                        <Box paddingTop={1}>
                            {/* <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright

                            </Typography> */}

                        </Box>
                        <Box className="footer">

                            <li className='nav-item'>
                                <Link
                                    to='/sobre'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Sobre
                                </Link>
                            </li>

                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">
                                <img src="https://i.imgur.com/C6vdCrK.png" alt="" width="150px" height="30px" />
                            </Typography>

                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}

export default Footer;