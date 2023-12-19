import React from 'react';
import "../css/boton.css";
/* agrego las funciones por parametro*/ 
function Boton({texto, esBotonDeClic, manejarClic })   {  
    return (
        <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } onClick={manejarClic}>   {/* agrego con condicional*/ }
            {texto}    
        </button>
    )
}

export default Boton;