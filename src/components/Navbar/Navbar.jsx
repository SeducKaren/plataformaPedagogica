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

  return (
    <div className='Navbar'>
      <nav className='navegation'>        
        <img src="\logo_avaliandocomvoce.jpeg" alt="logo" className='logo-plataforma'/>
        <img src="\logo_secretaria.jpeg" alt="logo" className='logo-prefeitura'/>
        <img src="\logo_prefeitura.jpeg" alt="logo" className='logo-plataforma'/>

        <div className="buttons-back">
          <span className='back-arrow' onClick={() => window.history.back()}>
            &#8592;
          </span>
        </div>

        <h1 className='file-gestor'>
          <label htmlFor="file-upload" className="custom-file-upload">
            <img src={fotoUsuario} alt="foto" id='foto-usuario' />
            <i className="fa fa-plus">+</i>
          </label>
          <input type="file" accept="image/*" id="file-upload" onChange={handleFotoChange} style={{ display: 'none' }} />
          <div className="info-user">
            <p className='usuario'>{gestorInfo.nome}</p>
          </div>
        </h1>

        <button className='btn-logout' onClick={handleLogout}>Sair</button>
      </nav>

      <div className='escola-info'>
      <img src="/logo_avaliaedu 2c2c.jpeg" alt="logo" className='logo-plataforma'/>
        <div className="gestorescolar"><h1>{gestorEscola.escola}</h1></div>
        {/* <div></div> */}
        {/* <h3>
          {gestorEscola.tipoDeEnsino.map((tipo, index) => (
            <span key={index}>{tipo}{index !== gestorEscola.tipoDeEnsino.length - 1 ? " - " : ""}</span>
          ))}
        </h3> */}
      </div>
    </div>
  );
};

export default Navbar;
