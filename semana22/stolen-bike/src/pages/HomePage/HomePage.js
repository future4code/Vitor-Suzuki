import React from 'react';
import { Header, Img, H1, H2, HeaderContainer } from './styled';

const HomePage = () => {
    return (
        <HeaderContainer>
            <Header>
                <Img src="https://bikeindex.org/assets/revised/logo-b5b90b10f3084a33e26097ffff6528ca15766eaeb008c5a6d0e242605ccad3b8.svg" />
                    <H1>Police Department of Berlin</H1>
                    <H2>Stolen Bykes</H2>
            </Header>
        </HeaderContainer>
    )
}

export default HomePage