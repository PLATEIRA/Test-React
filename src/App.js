/*import logo from './logo.svg';*/
import React, { Component } from 'react';
import ListaDeNotas from './componentes/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './componentes/FormularioCadastro';
import './componentes/ListaDeNotas/App.css';

class App extends Component {
  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
 
  
}


export default App;
