import React from "react";
import Box from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';


export function Pagamento() {
    return (
        <Card
            sx={{
                margin: 2,
                padding: 2,
            }}
        >

            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >

                <Stack
                    component="form"
                    sx={{
                        width: "50vw",
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"

                >

                    <TextField
                        type="number"
                        label="Número do cartão"
                        variant="standard"
                    />
                    <TextField label="Nome" variant="standard" />
                    <TextField label="validade" variant="standard" />
                    <TextField type="number" label="CCV" variant="standard" />
                </Stack>
            </Container>
        </Card>
    );
}