import React, { useState } from 'react'

import './SectionMainHome.css'
import { Link } from 'react-router-dom'

const SectionMainHome = () => {

  const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  }

    const handleDashboardClick = () => {
    if (selectedYear === '2022') {
      window.open('https://app.powerbi.com/view?r=eyJrIjoiOWQ4MDlkZTUtZjI1OS00NzYzLWE4ZDctYzY2NjVlMmY2YWU4IiwidCI6IjVmMTYzNWI1LTk5MmMtNDc2NC05NTViLWQyNTg2ZTQyYjQyNSJ9&pageName=ReportSection&year=2022', '_blank');
    } else if (selectedYear === '2023') {
      window.open('https://app.powerbi.com/view?r=eyJrIjoiZTRiNTVmMjAtYTZmZC00MzI0LTljNGUtMzEyMjRhYjQ0NTNiIiwidCI6IjlhYTU0YWNjLWQzNGEtNDJlNy1iMTVhLTc0NGU2NDMyOTI5MiJ9&pageName=ReportSection&year=2023', '_blank');
    }
  };


  return (
    <div className='SectionMainHome'>
        <Link to={'/api/escola'}><div className='escola-section'><img src="/escola2.png" alt="escola"/>Escola</div></Link>

        <Link to={'/gabaritos'}><div className='leitura-de-prova-section'><img src="/leitura-de-prova.png" alt="gabaritos"/>Gabaritos</div></Link>
        
        <Link to={'/api/aluno'}><div className='alunos-section'><img src="/aluna.png" alt="aluna"/>Alunos</div></Link>

        <div className='painel'>
        <img src="/painel.png" alt="dashboard"/>
         <select value={selectedYear} onChange={handleYearChange}>
           <option value="2022">2022</option>
           <option value="2023">2023</option>
         </select>
        <Link onClick={handleDashboardClick} target="_blank">
         Dashboard
         </Link>
         </div> 

        <div className='video-tutorial'><img src="/video-tutorial.png" alt="Tutorial"/>Tutorial</div>

        <Link to={'/suporte'}>
        <div className='suporte-online'><img src="/suporte-online.png" alt="suporte"/>Suporte</div>
        </Link>
        <Link to={'/cadastros'}><div className='adicionar-usuario-section'><img src="/adicionar-usuario.png" alt="adicionar novo"/>Adicionar Usuário</div></Link>
    </div>
  )
}

export default SectionMainHome;


// import React, { useState } from 'react';
// import './SectionMainHome.css';
// import { Link } from 'react-router-dom';

// const SectionMainHome = () => {
//   const [selectedYear, setSelectedYear] = useState('2023');

//   const handleYearChange = (e) => {
//     setSelectedYear(e.target.value);
//   };

//   const handleDashboardClick = () => {
//     if (selectedYear === '2022') {
//       window.open('https://app.powerbi.com/view?r=eyJrIjoiOWQ4MDlkZTUtZjI1OS00NzYzLWE4ZDctYzY2NjVlMmY2YWU4IiwidCI6IjVmMTYzNWI1LTk5MmMtNDc2NC05NTViLWQyNTg2ZTQyYjQyNSJ9&pageName=ReportSection&year=2022', '_blank');
//     } else if (selectedYear === '2023') {
//       window.open('https://app.powerbi.com/view?r=eyJrIjoiZTRiNTVmMjAtYTZmZC00MzI0LTljNGUtMzEyMjRhYjQ0NTNiIiwidCI6IjlhYTU0YWNjLWQzNGEtNDJlNy1iMTVhLTc0NGU2NDMyOTI5MiJ9&pageName=ReportSection&year=2023', '_blank');
//     }
//   };

//   return (
//     <div className='SectionMainHome'>
//       <div className='escola-section'><img src="/escola2.png" alt="escola"/><Link to={'/api/escola'}>Escola</Link></div>
//       <div className='leitura-de-prova-section'><img src="/leitura-de-prova.png" alt="gabaritos"/><Link to={'/gabaritos'} target='_blank'>Gabaritos</Link></div>
//       <div className='alunos-section'><img src="/aluna.png" alt="aluna"/><Link to={'/api/aluno'}>Alunos</Link></div>
//       <div className='painel'>
//         <img src="/painel.png" alt="dashboard"/>
//         <select value={selectedYear} onChange={handleYearChange}>
//           <option value="2022">2022</option>
//           <option value="2023">2023</option>
//         </select>
//         <Link onClick={handleDashboardClick} className='dashboard-link'>Dashboard</Link>
//       </div>
//       <div className='video-tutorial'><img src="/video-tutorial.png" alt="Tutorial"/>Tutorial</div>
//       <div className='suporte-online'><img src="/suporte-online.png" alt="suporte"/> <Link to='/Suporte'>Suporte</Link></div>
//       <div className='adicionar-usuario-section'><img src="/adicionar-usuario.png" alt="adicionar novo"/><Link to={'/cadastros'}>Adicionar Usuário</Link></div>
//     </div>
//   );
// };

// export default SectionMainHome;
