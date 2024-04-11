import React, { useContext } from 'react'

import './SectionMainHome.css'
import { Link } from 'react-router-dom'

const SectionMainHome = () => {
  return (
    <div className='SectionMainHome'>
        <div className='escola-section'><Link to={'/api/escola'}><img src="/escola2.png" alt="escola"/>Escola</Link></div>

        <div className='leitura-de-prova-section' ><Link to={'/gabaritos'}><img src="/leitura-de-prova.png" alt="gabaritos"/>Gabaritos</Link></div>
        
        <div className='alunos-section'><Link to={'/api/aluno'}><img src="/aluna.png" alt="aluna"/>Alunos</Link></div>

        <div className='painel'><Link to={'https://app.powerbi.com/view?r=eyJrIjoiOWQ4MDlkZTUtZjI1OS00NzYzLWE4ZDctYzY2NjVlMmY2YWU4IiwidCI6IjVmMTYzNWI1LTk5MmMtNDc2NC05NTViLWQyNTg2ZTQyYjQyNSJ9'} 
        target="_blank"><img src="/painel.png" alt="dashboard"/>Dashboard</Link></div>

        <div className='video-tutorial'><img src="/video-tutorial.png" alt="Tutorial"/>Tutorial</div>

        <div className='suporte-online'><img src="/suporte-online.png" alt="suporte"/>Suporte</div>

        <div className='adicionar-usuario-section'><Link to={'/cadastros'}><img src="/adicionar-usuario.png" alt="adicionar novo"/>Adicionar Usuário</Link></div>
    </div>
  )
}

export default SectionMainHome;