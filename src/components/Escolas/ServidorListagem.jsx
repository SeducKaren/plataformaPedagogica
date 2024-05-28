import React from 'react';

const ServidorListagem = ({ servidores }) => {
  return (
    <div className="servidor-container">
      <div className="servidor_formulario">
        <h3>Lista de Gestores Escolares</h3>
      </div>
      <div className="filtro_formulario">            
        {/* Iterar sobre os gestores encontrados e exibir suas informações */}
        {servidores.map((gestor, index) => (
          <div key={index}>
            <p>Nome: {gestor.nome}</p>
            <p>CPF: {gestor.cpf}</p>
            <p>Função: {gestor.funcao}</p>
            {/* Adicione aqui os demais campos de informação dos gestores */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServidorListagem;
