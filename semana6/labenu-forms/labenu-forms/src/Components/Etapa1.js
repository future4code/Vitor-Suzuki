import styled from 'styled-components';
import React from 'react';

export class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input type="text"></input>
                <p>2. Qual a sua idade?</p>
                <input type="text"></input>
                <p>3. Qual o seu e-mail?</p>
                <input type="text"></input>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </div>
        );
    }
}
