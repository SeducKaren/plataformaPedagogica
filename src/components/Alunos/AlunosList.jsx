import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CadastroAluno from './CadastrosAlunos/CadastroAluno'
import PaginaConstrucao from '../PaginaConstrucao/PaginaConstrucao'

import './AlunoList.css'

const AlunosList = () => {

  const [section, setSection] = useState('cadastros');

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };


  return (
    <div className='AlunoList'>
      <Navbar />
      <div className="navbar">
        <button onClick={() => handleSectionChange('cadastros')}>Cadastrar Aluno</button>
        <button onClick={() => handleSectionChange('lista-alunos')}>Lista de Alunos</button>
        <button onClick={() => handleSectionChange('grafico')}>Gráficos e Resultados</button>
      </div>

      <div className="main-container">
        {section === 'cadastros' && (
          <div>
            <CadastroAluno />
          </div>
        )}
        {section === 'lista-alunos' && (
          <div>
            <PaginaConstrucao />
          </div>
        )}
        {section === 'grafico' && (
          <PaginaConstrucao />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default AlunosList;