import React from 'react';

//componentes
import Navbar from '../components/Navbar';
import Invitado from '../components/Invitado';
import Fecha from '../components/Fecha';

//Estilos diseño
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
        <div className='header-container'></div>  

          <div>
            <Invitado />
          </div> 

          <div>
            <Fecha />
          </div>         

    </>
  )
}

export default Home