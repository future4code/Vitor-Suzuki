import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import { Etapa1 } from './Components/Etapa1';
import { Etapa2 } from './Components/Etapa2';
import { Etapa3 } from './Components/Etapa3';
import { Final } from './Components/Final';

export default class App extends React.Component {

  state = {
    etapa: 1,
  }

  trocaDeEtapa = () => {
    if (this.state.etapa === 1) {
      this.setState({etapa: this.state.etapa + 1 });
    }if (this.state.etapa === 2) {
      this.setState({etapa: this.state.etapa + 1});
    }if (this.state.etapa === 3) {
      this.setState({etapa: this.state.etapa + 1});
    }if (this.state.etapa === 4) {
      this.setState({etapa: this.state.etapa + 1});
    }
  }



  render() {
    
  
   const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
        case 4:
          return <Final />;
        default:
          return <p>Deu ruim!</p>;
      }
    };
    return (
      <div className="App">
        {renderizaEtapa()}
        {this.state.etapa !== 4 && <button onClick={this.trocaDeEtapa}>Próxima etapa</button>}
      </div>
      
    );
    
  }
}

