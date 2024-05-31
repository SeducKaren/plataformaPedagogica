import React, { useState } from 'react';
import './EscolasList.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import EscolasForm from './EscolasForm';
import FiltroBusca from './FiltroBusca';  // Importando o novo componente para o formulário de busca

const EscolasList = () => {
  const [section, setSection] = useState('detalhe');

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };

  return (
    <div className='EscolasList'>
      <Navbar />
      <main>
        <div className='ancora_escola'>
          <button onClick={() => handleSectionChange('detalhe')}>Detalhe da Escola</button>
          {/* <button onClick={() => handleSectionChange('endereco')}>Endereço</button> */}
          {/* <button onClick={() => handleSectionChange('modalidade')}>Modalidade</button> */}
          <button onClick={() => handleSectionChange('equipe')}>Equipe Gestores da Escola</button>
        </div>

        <div className='main-container'>
          {section === 'detalhe' && (
            <div>
              <EscolasForm />
            </div>
          )}
          {/* {section === 'endereco' && (
            <div>
              Endereço Escola
            </div>
          )}
          {section === 'modalidade' && (
            <div>
              Modalidade
            </div>
          )} */}
          {section === 'equipe' && (
            <div>
              <FiltroBusca /> {/* Utilizando o novo componente para o formulário de busca */}
            </div>
          )}
        </div>
      </main>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default EscolasList;