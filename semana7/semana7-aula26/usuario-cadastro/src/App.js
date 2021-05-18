import './App.css';
import React from 'react';
import Usuarios from './Usuarios';
import Home from './Home';

export default class App extends React.Component {

  state = {
    pagina: "home",
  }

  trocaDePagina = () => {
    if (this.state.pagina === "home"){
    this.setState({pagina: "usuarios"})
  } else if (this.state.pagina === "usuarios") {
    this.setState({pagina: "home"})
  }
}

  render() {

    const renderizaPagina = () => {
      if(this.state.pagina === "usuarios") {
        return <Usuarios trocaDePagina={this.trocaDePagina}/>
      } else if(this.state.pagina === "home") {
        return <Home trocaDePagina={this.trocaDePagina}/>
      }
    }


    return (
      <div className="App">
        {renderizaPagina()}
      </div>
    );
  }
}

