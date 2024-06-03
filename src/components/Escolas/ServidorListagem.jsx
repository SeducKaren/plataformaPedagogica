import React, { useState } from 'react';
import api from '../../services/apiConfig';
import './ServidorListagem.css';

const ServidorListagem = () => {
  const [servidores, setServidores] = useState([]);
  const [busca, setBusca] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [servidorSelecionado, setServidorSelecionado] = useState(null);

  const buscarServidores = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get(`/servidores?busca=${busca}`);
      if (response.data) {
        setServidores(response.data);
      } else {
        setServidores([]);
      }
    } catch (error) {
      console.error('Erro ao buscar servidores:', error);
      setError('Erro ao buscar servidores');
    } finally {
      setIsLoading(false);
    }
  };

  const selecionarServidor = (servidor) => {
    setServidorSelecionado(servidor);
  };

  return (
    <div className="servidor-container">
      <div className="servidor_formulario">
        <h3>Servidor - Listagem</h3>
      </div>
      <div className="filtro_formulario">
        <input 
          type="text" 
          value={busca} 
          onChange={(e) => setBusca(e.target.value)} 
          placeholder="Digite o nome ou CPF do gestor"
        />
        <button onClick={buscarServidores} disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="lista_servidores">
        {servidores.length > 0 ? (
          servidores.map((gestor, index) => (
            <div 
              key={index} 
              className="gestor-item" 
              onClick={() => selecionarServidor(gestor)}
            >
              <p>Nome: {gestor.nome}</p>
              <p>CPF: {gestor.cpf}</p>
              <p>Função: {gestor.funcao}</p>
              {/* Adicione aqui os demais campos de informação dos gestores */}
            </div>
          ))
        ) : (
          !isLoading && <p>Nenhum servidor encontrado.</p>
        )}
      </div>
      {servidorSelecionado && (
        <div className="servidor-selecionado">
          <h3>Servidor Selecionado</h3>
          <p><strong>Nome:</strong> {servidorSelecionado.nome}</p>
          <p><strong>CPF:</strong> {servidorSelecionado.cpf}</p>
          <p><strong>Função:</strong> {servidorSelecionado.funcao}</p>
        </div>
      )}
    </div>
  );
};

export default ServidorListagem;