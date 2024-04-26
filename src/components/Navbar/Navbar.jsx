import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { DadosContext } from '../Context/DadosContext'


const Navbar = () => {
  const navigate = useNavigate();
  const [fotoUsuario, setFotoUsuario] = useState('/usuario.png');
  const { userData } = useContext(DadosContext);


  useEffect(() => {
    const storedPhoto = localStorage.getItem('userPhoto');
    if (storedPhoto) {
      setFotoUsuario(storedPhoto);
  }
  }, []);

  const handleGoToDashboard = () => {
    navigate('/home');
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm('Tem certeza que deseja sair? Voltará para página de login.');
    if (isConfirmed) {
      navigate('/');
    }
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const photoURL = reader.result;
      setFotoUsuario(photoURL);
      localStorage.setItem('userPhoto', photoURL);
    };
  };


  return (
    <div className='Navbar'>
      <nav className='navegation'>
        <img src="\avaliando-com-vc.jpg" alt="logo" className='logo-plataforma-2'/>
        <img src="\logo_secretaria.jpeg" alt="logo" className='logo-secretaria'/>
        <img src="\logo_prefeitura.jpeg" alt="logo" className='logo-prefeitura'/>       

        {/* <div className="buttons-back">
          <span className='back-arrow' onClick={() => window.history.back()}>
            &#8592;
          </span>
        </div> */}


        <h1 className='file-gestor'>
          <label htmlFor="file-upload" className="custom-file-upload">
            <img src={fotoUsuario} alt="foto" id='foto-usuario' />
            <i className="fa fa-plus">+</i>
          </label>
          <input type="file" accept="image/*" id="file-upload" onChange={handleFotoChange} style={{ display: 'none' }} />
          <div className="info-user">
          <p className='usuario'>{userData ? userData.nome_completo : "Nome do Gestor"}</p>
          </div>
        </h1>

        <button className="btn-go-home" onClick={handleGoToDashboard}>Página Principal</button>

        <button className='btn-logout' onClick={handleLogout}>Sair</button>
      </nav>


      <div className='escola-info'>
        <img src="/logo_avaliaedu 2c2c.jpeg" alt="logo" className="logo-plataforma"/>

        <div className="gestor-escola-info">
        <h1 className='escola'>{userData ? userData.escola : "Escola do Gestor"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


