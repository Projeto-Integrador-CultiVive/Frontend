import { Box, Step, StepLabel, Stepper, Typography, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Alert } from "@mui/material";
import React, { useEffect, useState, ChangeEvent } from 'react';
import { Entrega } from "../entrega/Entrega";
import { Pagamento } from "../pagamento/Pagamento";
import { ProdutosCarrinho } from '../produtosCarrinho/ProdutosCarrinho';




export function Steps() {

    const [currentStep, setCurrentStep] = useState(0);

    function next() {
        setCurrentStep(currentStep + 1);
    }

    function back() {
        setCurrentStep(currentStep - 1);
    }

    return (
        <Box m={10}>
            <Box sx={{ width: "100%" }}>
                <Stepper activeStep={currentStep}>
                    <Step>
                        <StepLabel>Produtos</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Entrega</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Pagamento</StepLabel>
                    </Step>
                </Stepper>

                {currentStep === 0 && <ProdutosCarrinho />}
                {currentStep === 1 && <Entrega />}
                {currentStep === 2 && <Pagamento />}

                {currentStep === 3 ? (<Alert severity="success">Sua compra foi realizada com sucesso! Confira seu emai.</Alert>)
                    : (
                        <>
                            <Button onClick={back}>
                                Voltar
                            </Button>

                            <Button onClick={next}>
                                Próximo
                            </Button>
                        </>

                    )}



            </Box>
        </Box>
    )

}
