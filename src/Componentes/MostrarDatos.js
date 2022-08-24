


import React from 'react';

 export function MostrarDatos(){
    return(
          <div className='Contenedor-MostrarDatos'>
            <img className='imagen-Avatar'src={require('../imagenes/Avatar.jpeg')}/>
             <div className='Contenedor-Nombre-MostarDatos'>
                <p className='Nombre-MostarDato'>Nombre: Daniel Alejandro Molina Menjivar</p>
                <p className='Carrera-MostarDato'>Carrera: Ingenieria en ciencias de la computacion</p>
                <p className='Skill-MostarDato'>Mi skill en programacion considero que es de un nivel intermedio pero siempre estoy listo para aprender nuevas cosas.</p>
             </div>
          </div>

    );
}

