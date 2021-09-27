import styled from "styled-components"

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    margin-top: 15vh;
    padding: 50px;
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;

    h1 {
        color: white;
        font-family: 'Courier New', Courier, monospace;
        font-size: 3em;
        letter-spacing: 10px;
        padding: 30px;
    }

    h2 {
        color: white;
        font-family: 'Courier New', Courier, monospace;
    }
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px;
`