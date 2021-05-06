import React from 'react';
import styled from "styled-components";

const ContainerPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    h4 {
        margin: 0 20px 0 40px;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    }
`

function EmailEndereco(props) {
    return (
        <ContainerPequeno>
            <h4>{props.email}</h4>
            <p>{props.descricao}</p>
            <h4>{props.endereco}</h4>
            <p>{props.descricao2}</p>
        </ContainerPequeno>
    )
}

export default EmailEndereco