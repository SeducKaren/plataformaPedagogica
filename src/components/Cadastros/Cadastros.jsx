import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Cadastros.css';

const Cadastros = () => {
  const [formDataGestor, setFormDataGestor] = useState({
    nome: '',
    cpf: '',
    escola: '',
    contato: '',
    email: ''
  });
  
  const [cpfValido, setCpfValido] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para controlar a exibição do balão de confirmação

  const handleInputChangeGestor = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'contato') {
      newValue = value.replace(/\D/g, '');
      newValue = newValue.substring(0, 11);
    }

    setFormDataGestor({ ...formDataGestor, [name]: newValue });

    if (name === 'cpf') {
      setCpfValido(validateCPF(value));
    }
  };

  const validateCPF = (cpf) => {
    if (!cpf || cpf.length > 12) return false;
    
    if (/^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  };

  const handleSubmitGestor = (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos e o CPF é válido
    const camposPreenchidos = Object.values(formDataGestor).every((value) => value.trim() !== '');
    if (camposPreenchidos && cpfValido) {
      console.log('Dados do formulário gestor:', formDataGestor);

      // Definir o estado "showConfirmation" como true para exibir o balão de confirmação
      setShowConfirmation(true);

      // Resetar o formulário após 3 segundos
      setTimeout(() => {
        setShowConfirmation(false);
        setFormDataGestor({
          nome: '',
          cpf: '',
          escola: '',
          contato: '',
          email: '',
        });
      }, 3000);
    } else {
      // Se algum campo estiver vazio ou o CPF for inválido, exibir mensagem de erro
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <div className='Cadastros'>
      <Navbar />

      <div className="main-container">
        <form onSubmit={handleSubmitGestor} className="cadastro-gestor">
          <h1 className='title-gestor'>Cadastro Usuário</h1>
          <label>
            Nome:
            <input type='text' name='nome' placeholder='Digite aqui seu nome' value={formDataGestor.nome} onChange={handleInputChangeGestor} />
          </label>
          <br />
          <label>
            CPF:
            <input type='text' name='cpf' placeholder='Digite aqui seu CPF' value={formDataGestor.cpf} onChange={handleInputChangeGestor} maxLength={12} />
            {!cpfValido && <span style={{ color: 'red' }}>CPF inválido</span>}
          </label>
          <br />
          <label>
            Escola:
            <input type='text' name='escola' placeholder='Digite aqui sua escola' value={formDataGestor.escola} onChange={handleInputChangeGestor} />
          </label>
          <br />
          <label>
            Telefone:
            <input type='text' name='contato' placeholder='Digite aqui seu contato' value={formDataGestor.contato} onChange={handleInputChangeGestor} maxLength={11} />
          </label>
          <br />
          <label>
            E-mail:
            <input type='text' name='email' placeholder='Digite aqui seu e-mail' value={formDataGestor.email} onChange={handleInputChangeGestor} />
          </label>
          <br />
          <button type='submit' className='submit-button'>Cadastrar</button>
        </form>
        {showConfirmation && (
          <div className="confirmation-balloon">
            Cadastrado com sucesso!
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cadastros;
