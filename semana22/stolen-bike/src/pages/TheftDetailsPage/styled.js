import styled from "styled-components";
import { Pagination as MaterialPagination } from '@material-ui/lab';


export const Header = styled.div`
    background: #111;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 0;
    width: 100%;
    max-width: 100vw;
    height: 100px;
    z-index: 1030;

    :hover {

    h1, h2 {
           color: white;
           cursor: pointer;
    }
    img{
        
        transform: scale(1.25);
        cursor: pointer;
    }
}

`

export const Img = styled.img`
    height: 90px;
    width: auto;
    margin-left: 10vw;
    margin-top: 7.5px;
    transition: transform .2s;

`

export const H1 = styled.h1`
    position: fixed;
    top: 30px;
    margin: 0;
    left: 20vw;
    color: #a4a4a4;
    font-family: 'Montserrat', sans-serif;
    font-size: 2.25vw;
    font-weight: 200;
    transition: 200ms;
`

export const H2 = styled.h2`
    position: fixed;
    top: 50px;
    left: 20.1vw;
    color: #a4a4a4;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5vw;
    font-weight: 200;
    transition: 200ms;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 100vw;
`

export const Loading = styled.div`
    margin-top: 50vh;
`

export const Map = styled.div`
    margin-top: 5vh;
    height: 50vh;
    width: 60%;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 25vh;
    font-family: 'Montserrat', sans-serif;
    padding: 5px;
    width: 65%;

`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 7vh 0;
    font-family: 'Montserrat', sans-serif;
    width: 65%;
    padding: 5px;
`