import './App.css';
import Boton from './componentes/boton.jsx' // importar el componente boton para que funcione
import logo from './img/logo.svg'; // importar una imagen a tráves de import

function App() {
  const manejarClic = () => {console.log('Clic')}

  const reiniciarContador = () => { console.log('Reiniciar')}

  return (
    <div className="App"> 
      <div className='logo-contenedor'> 
        <img className='logo' src={logo} alt='Logo' />  
      </div>
      <div className='contenedor-principal'>
        <Boton texto='Clic' esBotonClic={true} manejarClic={manejarClic} /> 
        {/* boton true agrega a contador*/ }
        <Boton texto='Reiniciar' esBotonClic={false} manejarClic={reiniciarContador}/>
         {/* boton false reinicia contador*/ }
      </div>
    </div>
  );
}

export default App;
