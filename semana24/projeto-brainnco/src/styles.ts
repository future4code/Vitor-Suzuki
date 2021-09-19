import styled from "styled-components"

type Props = {
    backgroundColor: string

}

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #EFEFEF;

    section {
        width: 50%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
    }
    section:first-of-type {
        color: white;
        flex-direction: column;
        justify-content: space-between; 
        padding: 92px 256.08px 92.76px 96px;
        height: 104%;
    }
    section:nth-of-type(2) {
        justify-content: center;
        align-items: center;
        margin-right: 10vw;
        flex-wrap: wrap;
        width: 100vw;
    }

    b {
        z-index: 1;
        background-color: white;
        margin: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100vw;
        box-sizing: border-box;
        font-size: 27px;
        padding: 32px;
        min-width: 98px;
    }

    svg {
        position: absolute;
        left: -36vw;
        top: 0;

    }

    select, p, img, h1, div {
        z-index: 1;
    } 

    img {
        width: 60px;
        height: 56px;
    }

    select {
        width: 215.91px;
        height: 45.2px;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        color: #333333;
        padding: 0.5rem;
        border-radius: 10px;
        border: none;
        
        &:hover {
            cursor: pointer
        }
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    
    h1 {
        margin-left: 30px;
        font-size: 2rem;
    }

    img {
        margin-top: 15px;
    }
`