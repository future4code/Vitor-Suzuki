import styled from 'styled-components';
import React from 'react';

export class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input type="text" />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </div>
        )
    }
}