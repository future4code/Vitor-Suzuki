import styled from "styled-components"

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'Bonheur Royale', cursive;
    font-size: 1.5em;

    .cart_icon {
        transform: scale(1.8);
    }

    h1 {
        cursor: pointer;
        transition: ease-in-out 300ms;

        &:hover {
            transform: scale(1.2);
        }
    }
`

export const CardsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`