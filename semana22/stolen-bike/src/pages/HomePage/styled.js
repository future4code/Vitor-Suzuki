import styled from "styled-components";

export const HeaderContainer = styled.div`
` 

export const Header = styled.div`
    background: #111;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 0;
    width: 100%;
    height: 100px;
    z-index: 1030;
`

export const Img = styled.img`
    height: 90px;
    width: auto;
    margin-left: 10vw;
    margin-top: 7.5px;
    transition: transform .2s;

    &:hover {
        transform: scale(1.25);
        cursor: pointer;
    }

`

export const H1 = styled.h1`
    position: fixed;
    top: 20px;
    margin: 0;
    left: 20vw;
    color: #a4a4a4;
    font-family: 'Montserrat';
    font-size: 2.25vw;
    font-weight: lighter;
    transition: 200ms;
` 

export const H2 = styled.h2`
    position: fixed;
    top: 50px;
    left: 20.1vw;
    color: #a4a4a4;
    font-family: 'Montserrat';
    font-size: 1.5vw;
    font-weight: lighter;
    transition: 200ms;
` 