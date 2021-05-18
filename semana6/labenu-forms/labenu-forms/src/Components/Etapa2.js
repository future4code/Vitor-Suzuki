import styled from 'styled-components';
import React from 'react';

export class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5. Qual o curso?</p>
                <input type="text" />
                <p>6. Qual a unidade de ensino?</p>
                <input type="text" />
            </div>
        )
    }
}