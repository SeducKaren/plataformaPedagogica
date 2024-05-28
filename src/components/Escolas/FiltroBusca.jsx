import React, { useState } from 'react';
import api from '../../services/apiConfig';
import ServidorListagem from './ServidorListagem'; // Importe o componente ServidorListagem

import './FiltroBusca.css';

const FiltroBusca = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [funcao, setFuncao] = useState('');
  const [servidores, setServidores] = useState([]); // Estado para armazenar os dados dos servidores encontrados

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get('/api/escola/gestores', {
        params: {
          nome,
          cpf,
          funcao,
        },
      });
      console.log('Resultado da busca:', response.data);
      setServidores(response.data); // Atualize o estado com os dados dos servidores encontrados
    } catch (error) {
      console.error('Erro ao buscar gestores escolares:', error);
    }
  };

  return (
    <div className="formulario-container">
      <div className="formulario-header">
        <h3>Filtro de Busca de Gestores Escolares</h3>
      </div>
      <form onSubmit={handleSearch}>
        {/* Inputs para filtrar a busca */}
        <div className="filtro_formulario">
          <label htmlFor="nome">Nome do servidor:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />
        </div>
        <div className="filtro_formulario setcpf">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
          />
        </div>
        <div className="filtro_formulario setFuncao">
          <label htmlFor="funcao">Função:</label>
          <select
            id="funcao"
            value={funcao}
            onChange={(e) => setFuncao(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Diretor">Diretor</option>
            <option value="Vice-diretor">Vice-diretor</option>
            <option value="Interino">Interino</option>
            <option value="Professor">Professor</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <button className="butao-buscar" type="submit">Buscar</button>
      </form>
      {/* Se houver dados dos servidores, exiba o componente ServidorListagem */}
      {servidores.length > 0 && <ServidorListagem servidores={servidores} />}
    </div>
  );
};

export default FiltroBusca;
