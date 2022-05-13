/*import logo from './logo.svg';
import './App.css';*/
import React from 'react';
import { FormularioCadastro } from './componentes/FormularioCadastro';
import { ListaDeNotas } from './componentes/ListaDeNotas';
function App() {
  return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
  );
}

export default App;
