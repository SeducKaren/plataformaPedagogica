import React from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Dashboard = () => {
  const powerBiLink2022 = 'https://app.powerbi.com/view?r=eyJrIjoiOWQ4MDlkZTUtZjI1OS00NzYzLWE4ZDctYzY2NjVlMmY2YWU4IiwidCI6IjVmMTYzNWI1LTk5MmMtNDc2NC05NTViLWQyNTg2ZTQyYjQyNSJ9&pageName=ReportSection&year=2022';
  const powerBiLink2023 = 'https://app.powerbi.com/view?r=eyJrIjoiZTRiNTVmMjAtYTZmZC00MzI0LTljNGUtMzEyMjRhYjQ0NTNiIiwidCI6IjlhYTU0YWNjLWQzNGEtNDJlNy1iMTVhLTc0NGU2NDMyOTI5MiJ9&pageName=ReportSection&year=2023';

  return (
    <>
      <Navbar />
      <h1 className='title-dash'>Dashboards Power BI</h1>
      <div className='painel-dash'>
        <a href={powerBiLink2022} target='_blank' rel='noopener noreferrer'>
          <img src="/dahsboard1.png" alt="painel" className='img-1'/>
          Seduc 2022
        </a>
        <a href={powerBiLink2023} target='_blank' rel='noopener noreferrer'>
          <img src="/dashboard2.png" alt="painel" className='img-2'/>
          Seduc 2023
        </a>
      </div>
      <div className="footer-dash">
          <Footer />
      </div>
    </>
  );
};

export default Dashboard;