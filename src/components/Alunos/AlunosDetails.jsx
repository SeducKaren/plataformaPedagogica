import React, { useState, useEffect } from 'react';
import api from '../../services/apiConfig';
import './AlunosDetails.css'; 

const AlunosDetails = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('api/aluno');
        setAlunos(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados dos alunos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='AlunosDetails'>
      <h1>Lista dos Alunos</h1>
      <div className='alunos-container'>
        {alunos.map((aluno) => (
          <div key={aluno.id} className='aluno-card'>
            <p>Nome do aluno: {aluno.nome_completo}</p>
            <p>CPF{aluno.cpf}</p>
            <p>Serie {aluno.serie}</p>
            <p>turno: {aluno.turno}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlunosDetails;
