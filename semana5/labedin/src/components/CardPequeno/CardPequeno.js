import React from 'react';
import './CardPequeno.css';

function EmailEndereco(props) {
    return (
        <div className="smallcard-container">
            <h4>{props.email}</h4>
            <p>{props.descricao}</p>
            <h4>{props.endereco}</h4>
            <p>{props.descricao2}</p>
        </div>
    )
}

export default EmailEndereco