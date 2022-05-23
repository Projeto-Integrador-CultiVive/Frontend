import { Select, MenuItem, Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import './Entrega.css';

export function Entrega() {

    return (

        <Box p={4}>
            <Paper elevation={3} className="paper2">
                <Typography variant="h6" component="h2">
                    Selecione o método de transporte
                </Typography>

                <Select label="Selecione o método de transporte">
                    <MenuItem value={10}>Transportadora Cultivive</MenuItem>
                    <MenuItem value={20}>Rappi</MenuItem>
                </Select>

            </Paper>
        </Box >
    )
}