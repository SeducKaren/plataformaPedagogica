import React, { useContext } from 'react'

import './SectionMainHome.css'
import { Link } from 'react-router-dom'

const SectionMainHome = () => {
  return (
    <div className='SectionMainHome'>
        <Link to={'/api/escola'}><div className='escola-section'><img src="/escola2.png" alt="escola"/>Escola</div></Link>

        <Link to={'/gabaritos'}><div className='leitura-de-prova-section'><img src="/leitura-de-prova.png" alt="gabaritos"/>Gabaritos</div></Link>
        
        <Link to={'/api/aluno'}><div className='alunos-section'><img src="/aluna.png" alt="aluna"/>Alunos</div></Link>

        <Link to={'https://app.powerbi.com/view?r=eyJrIjoiOWQ4MDlkZTUtZjI1OS00NzYzLWE4ZDctYzY2NjVlMmY2YWU4IiwidCI6IjVmMTYzNWI1LTk5MmMtNDc2NC05NTViLWQyNTg2ZTQyYjQyNSJ9'} 
        target="_blank"><div className='painel'><img src="/painel.png" alt="dashboard"/>Dashboard</div></Link>

        <div className='video-tutorial'><img src="/video-tutorial.png" alt="Tutorial"/>Tutorial</div>

        <div className='suporte-online'><img src="/suporte-online.png" alt="suporte"/>Suporte</div>

        <Link to={'/cadastros'}><div className='adicionar-usuario-section'><img src="/adicionar-usuario.png" alt="adicionar novo"/>Adicionar Usuário</div></Link>
    </div>
  )
}

export default SectionMainHome;