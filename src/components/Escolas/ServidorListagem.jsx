import React from 'react';

const ServidorListagem = ({ servidores }) => {
  return (
    <div className="servidor-container">
      <div className="servidor_formulario">
        <h3>Servidor - Listgem</h3>
      </div>
      <div className="filtro_formulario">
        
        {servidores.map((gestor, index) => (
          <div key={index}>
            <p>Nome: {gestor.nome}</p>
            <p>CPF: {gestor.cpf}</p>
            <p>Função: {gestor.funcao}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServidorListagem;