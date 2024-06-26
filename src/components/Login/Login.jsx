import React, { useState, useContext } from 'react';
import { DadosContext } from '../Context/DadosContext';
// import SectionText from './SectionText/SectionText';
import { useNavigate } from 'react-router-dom';
import api from '../../services/apiConfig';

import './Login.css'

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate()
  const { setUserData } = useContext(DadosContext);
  
  const handleNavigate = () => {
     navigate('/home')
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    const cleanedValue = value.replace(/[^\d]/g, '');
    setCpf(cleanedValue);

    setError(false)
  };

  const validateCPF = (cpf) => {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }

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


  const handleLogin = async () => {
    if (!validateCPF(cpf)) {
      const inputCpf = document.getElementById('input-cpf');
      inputCpf.style.border = '3px solid red';
      
      const paragrafo2 = document.getElementById('paragrafo2');
      paragrafo2.style.display = 'flex';
      paragrafo2.style.color = 'red';
      paragrafo2.style.fontSize = '14px';
      
      setError(true);
      return;
    }
  
    try {
      setLoading(true);
      
      const response = await api.get(`/api/gestor/cpf/${cpf}`);

      if (response.data) {
        setUserData(response.data);
        setError(false);

        const inputCpf = document.getElementById('input-cpf');
        inputCpf.style.border = '3px solid green';
  
        const paragrafo3 = document.getElementById('paragrafo3');
        paragrafo3.style.display = 'flex';
        paragrafo3.style.color = 'green';
        paragrafo3.style.fontSize = '14px';
  
        handleNavigate();
      } else {

        const paragrafo2 = document.getElementById('paragrafo2');
        paragrafo2.style.display = 'flex';
        paragrafo2.style.color = 'red';
        paragrafo2.style.fontSize = '14px';
        
        setError(true);
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    } finally {
      setLoading(false); 
    }
  };
  


  return (
    <div className='login'>
      <div className="section-text">
        {/* <SectionText /> */}
      </div>  
      <div className="section-input">
        <h1><img src="./logo.png" alt="logo" /></h1>
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={handleInputChange}
            placeholder='Digite seu cpf'
            id='input-cpf'
            style={{ border: error ? '3px solid red' : '3px solid black' }}
          />
        </label>

        {<p id='paragrafo1'><strong>*Apenas números</strong></p>}

        <p id='paragrafo2' style={{ display: error ? 'flex' : 'none', color: 'red', fontSize: '14px' }}><strong>*CPF inválido.</strong></p>
        
        <p id='paragrafo3'><strong>*Login feito com sucesso</strong></p>
        <br />
        <button 
        onClick={handleLogin} 
        id='btn-login'
        disabled={loading} 
        >
          {loading ? 'Carregando...' : 'Entrar'} 
        </button>
      </div>
    </div>
  );
};

export default Login;
