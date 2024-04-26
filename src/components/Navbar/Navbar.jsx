import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [fotoUsuario, setFotoUsuario] = useState('/usuario.png');

  useEffect(() => {
    const storedPhoto = localStorage.getItem('userPhoto');
    if (storedPhoto) {
      setFotoUsuario(storedPhoto);
    }
  }, []);

  const gestorInfo = {
    nome: "vitor gabriel silva de lima"
  };

  const gestorEscola = {
    escola: "Escola Estadual Pedro Barros",
    tipoDeEnsino: ["Eja", "Anos finais", "Anos iniciais"]
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

  const handleGoToHomePage = () => {
    // Navegar até a página principal
    navigate('/');
   
  };

  const handleGoToDashboard = () => {
    // Navegar de volta para a página sectionhome
    navigate('/home');
  };

  return (
    <div className='Navbar'>
      <nav className='navegation'>
        <img src="\logo_avaliandocomvoce.jpeg" alt="logo" className='logo-plataforma'/>              
        <img src="\logo_secretaria.jpeg" alt="logo" className='logo-secretaria'/>
        <img src="\logo_prefeitura.jpeg" alt="logo" className='logo-prefeitura'/>        

        <h1 className='file-gestor' onClick={handleGoToDashboard}>
          <label htmlFor="file-upload" className="custom-file-upload">
            <img src={fotoUsuario} alt="foto" id='foto-usuario' />
            <i className="fa fa-plus">+</i>
          </label>
          <input type="file" accept="image/*" id="file-upload" onChange={handleFotoChange} style={{ display: 'none' }} />
          <div className="info-user">
            <p className='usuario'>{gestorInfo.nome.toUpperCase()}</p>
          </div>
        </h1>

        {/* Botão para voltar para a página principal */}
        <button className="btn-go-home" onClick={handleGoToDashboard}>Página Principal</button>
        
        <button className='btn-logout' onClick={handleLogout}>Sair</button>
      </nav>

      <div className='escola-info'>
        <img src="/logo_avaliaedu 2c2c.jpeg" alt="logo" className='logo-plataforma'/>
        <div className="gestorescolar"><h1>{gestorEscola.escola}</h1></div>
      </div>
    </div>
  );
};

export default Navbar;
