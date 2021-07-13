import React from 'react';
import Typography from '@material-ui/core/Typography';
import Error404 from '../../assets/img/Error404.png';
import { ErrorPageContainer, ErrorImage, GlobalStyle } from './styled';

const ErrorPage = () => {
    return (

        <ErrorPageContainer>
            <GlobalStyle />
            <ErrorImage src={Error404} />
            <Typography color={'#000000'} variant={'h4'} align={'center'}>Erro 404 - Página não encontrada :(</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage