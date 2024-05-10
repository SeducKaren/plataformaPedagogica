import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import api from '../../services/apiConfig';

import './Cadastros.css'

const Cadastros = () => {
  const [formDataGestor, setFormDataGestor] = useState({
    nome_completo: '',
    cpf: '',
    email: '',
    funcao: '',
    telefone: '',
    celular: '',
    escola: '',
    matricula: ''
  });
  
  const [cpfValido, setCpfValido] = useState(true);

  const handleInputChangeGestor = (e) => {
    const { name, value } = e.target;
    setFormDataGestor({ ...formDataGestor, [name]: value });

    if (name === 'cpf') {
      setCpfValido(validateCPF(value));
    }
  };

  const validateCPF = (cpf) => {
    if (!cpf || cpf.length !== 11) return false;
    
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

  const handleSubmitGestor = async (e) => {
    e.preventDefault();
    try {      
      console.log('Dados do formulário gestor:', formDataGestor)
      const response = await api.post('/api/gestor', formDataGestor);
      console.log('Resposta do servidor:', response.data)

      setFormDataGestor({
        nome_completo: '',
        cpf: '',
        email: '',
        funcao: '',
        telefone: '',
        celular: '',
        escola: '',
        matricula: ''
      });

      alert('Dados enviados')
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
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
            <input type='text' name='nome_completo' value={formDataGestor.nome_completo} onChange={handleInputChangeGestor} placeholder='Digite seu nome'/>
          </label>
          <br />
          <label>
            CPF:
            <input type='text' name='cpf' value={formDataGestor.cpf} onChange={handleInputChangeGestor} placeholder='Digite seu CPF'/>
            {!cpfValido && <span style={{ color: 'red' }}>CPF inválido</span>}
          </label>
          <br />
          <label>
            E-mail:
            <input type='text' name='email' value={formDataGestor.email} onChange={handleInputChangeGestor} placeholder='Digite seu E-mail'/>
          </label>
          <br />
          <label>
            Função:
            <input type='text' name='funcao' value={formDataGestor.funcao} onChange={handleInputChangeGestor} placeholder='Digite sua função'/>
          </label>
          <br />
          <label>
            Telefone:
            <input type='text' name='telefone' value={formDataGestor.telefone} onChange={handleInputChangeGestor} placeholder='Digite seu telefone'/>
          </label>
          <br />
          <label>
            Celular:
            <input type='text' name='celular' value={formDataGestor.celular} onChange={handleInputChangeGestor} placeholder='Digite seu celular'/>
          </label>
          <br />
          <label>
            Escola:
            <input type='text' name='escola' value={formDataGestor.escola} onChange={handleInputChangeGestor} placeholder='Digite sua escola'/>
          </label>
          <br />
          <label>
            Matrícula:
            <input type='text' name='matricula' value={formDataGestor.matricula} onChange={handleInputChangeGestor} placeholder='Digite sua matrícula'/>
          </label>
          <br />
          <button type='submit' className='submit-button'>Cadastrar</button>
        </form>
      </div>

      <div className='footer'>
      <Footer />
      </div>
    </div>
  );
};

export default Cadastros;
