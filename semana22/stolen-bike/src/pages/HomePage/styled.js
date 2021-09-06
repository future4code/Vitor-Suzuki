import styled from "styled-components";
import {Pagination as MaterialPagination} from '@material-ui/lab';


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

export const SearchContainer = styled.div`
    display: flex;
    padding: 0 100px;
    justify-content: space-between;
    margin: 200px 150px 0 150px;
`

export const List = styled.div`
    margin-top: 10px;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em 10em;
    max-width: 100vw;

    article{
        display:flex;
        align-items: center;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
        width: 100%;
        margin: 1em 0;
        padding: 1em;

        img {
            width: 120px;
            height: 120px;
        }

        div {
            width: 9em;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        section{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            
            p{
                display: flex;
                word-wrap: break-word;
            }
        }    
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 100vw;
`

export const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding: 0 1em 0 2em;    
    width: 80%;
` 

export const SelectContainer = styled.div`
    display: flex;
    justify-content: space-around;
    font-family: 'Montserrat', sans-serif;

    select{
        border: none;
        color: #a4a4a4
    }

    p{
        color: #a4a4a4
    }
`

export const StyledPagination = styled(MaterialPagination)`
    .MuiPaginationItem-page.Mui-selected {
    background-color: rgba(52, 152, 219, 0.15);
}
`

export const Loading = styled.div`
    margin-top: 100px;
`

