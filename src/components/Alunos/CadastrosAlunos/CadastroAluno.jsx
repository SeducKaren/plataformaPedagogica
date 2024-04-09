import React, { useState } from 'react';
import './CadastroAluno.css';
import api from '../../../services/apiConfig'

const CadastroAluno = () => {
  const [formDataAluno, setFormDataAluno] = useState({
    matricula: '',
    nomeAluno: '',
    dataNascimento: '',
    genero: '',
    escola: '',
    cpf: '',
    turma: '',
    serie: '',
    curso: '',
    ano: '',
    turno: '',
    nomeMae: '',
    nomePai: '',
    nomeResponsavel: ''
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChangeAluno = (e) => {
    const { name, value } = e.target;
    let inputPonto = value;

    switch (name) {
      case 'cpf':
        inputPonto = value
          .slice(0, 14)
          // .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        break;
      default:
        inputPonto = value.slice(0, 50);
        break;
    }

    setFormDataAluno({ ...formDataAluno, [name]: inputPonto });

    if (formSubmitted) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmitAluno = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.keys(formDataAluno).forEach(key => {
      if (!formDataAluno[key]) {
        validationErrors[key] = 'Este campo é obrigatório';
      }
    });
    setErrors(validationErrors);
    setFormSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await api.post('/api/aluno', formDataAluno);

        setFormDataAluno({
          matricula: '',
          nomeAluno: '',
          dataNascimento: '',
          genero: '',
          escola: '',
          cpf: '',
          turma: '',
          serie: '',
          curso: '',
          ano: '',
          turno: '',
          nomeMae: '',
          nomePai: '',
          nomeResponsavel: ''
        });
        setFormSubmitted(false);

      } catch (error) {
        console.error('Erro ao cadastrar aluno:', error);
      }
    }
  };

  const inputStyle = (error) => ({
    border: error ? '2px solid red' : '1px solid black'
  });

  return (
    <div className='CadastroAluno'>
      <h1>Cadastro Aluno</h1>

      <form onSubmit={handleSubmitAluno}>
        <label>
          Matrícula:
          <input style={inputStyle(errors.matricula)} type='text' name='matricula' value={formDataAluno.matricula} onChange={handleInputChangeAluno} placeholder="Matrícula" />
          {errors.matricula && <span className='error-msg'>{errors.matricula}</span>}
        </label>
        <br />

        <label>
          Nome Aluno:
          <input style={inputStyle(errors.nomeAluno)} type='text' name='nomeAluno' value={formDataAluno.nomeAluno} onChange={handleInputChangeAluno} placeholder="Nome Aluno" />
          {errors.nomeAluno && <span className='error-msg'>{errors.nomeAluno}</span>}
        </label>
        <br />

        <label>
          CPF:
          <input style={inputStyle(errors.cpf)} type='text' name='cpf' value={formDataAluno.cpf} onChange={handleInputChangeAluno} placeholder="CPF" />
          {errors.cpf && <span className='error-msg'>{errors.cpf}</span>}
        </label>
        <br />

        <label>
          Data de Nascimento:
          <input style={inputStyle(errors.dataNascimento)} type='date' name='dataNascimento' value={formDataAluno.dataNascimento} onChange={handleInputChangeAluno} />
          {errors.dataNascimento && <span className='error-msg'>{errors.dataNascimento}</span>}
        </label>
        <br />

        <label>
          Gênero:
          <select style={inputStyle(errors.genero)} name='genero' value={formDataAluno.genero} onChange={handleInputChangeAluno} placeholder='Gênero'>
            <option value=''>Selecione o Gênero</option>
            <option value='mulher'>Mulher</option>
            <option value='homem'>Homem</option>
            <option value='mulher trans'>Mulher Trans</option>
            <option value='travesti'>Travesti</option>
            <option value='homem trans'>Homem Trans</option>
            <option value='não binário'>Não Binário</option>
            <option value='outra'>Outra</option>
          </select>
          {errors.genero && <span className='error-msg'>{errors.genero}</span>}
        </label>
        <br />

        <label>
          Escola:
          <input style={inputStyle(errors.escola)} type='text' name='escola' value={formDataAluno.escola} onChange={handleInputChangeAluno} placeholder='Escola' />
          {errors.escola && <span className='error-msg'>{errors.escola}</span>}
        </label>
        <br />

        <label>
          Turma:
          <input style={inputStyle(errors.turma)} type='text' name='turma' value={formDataAluno.turma} onChange={handleInputChangeAluno} placeholder="Turma" />
          {errors.turma && <span className='error-msg'>{errors.turma}</span>}
        </label>
        <br />

        <label>
          Serie:
          <input style={inputStyle(errors.serie)} type='text' name='serie' value={formDataAluno.serie} onChange={handleInputChangeAluno} placeholder="Serie" />
          {errors.serie && <span className='error-msg'>{errors.serie}</span>}
        </label>
        <br />

        <label>
          Curso:
          <input style={inputStyle(errors.curso)} type='text' name='curso' value={formDataAluno.curso} onChange={handleInputChangeAluno} placeholder="Curso" />
          {errors.curso && <span className='error-msg'>{errors.curso}</span>}
        </label>
        <br />

        <label>
          Ano Letivo:
          <input style={inputStyle(errors.ano)} type='text' name='ano' value={formDataAluno.ano} onChange={handleInputChangeAluno} placeholder="Ano Letivo" />
          {errors.ano && <span className='error-msg'>{errors.ano}</span>}
        </label>
        <br />

        <label>
          Turno:
          <input style={inputStyle(errors.turno)} type='text' name='turno' value={formDataAluno.turno} onChange={handleInputChangeAluno} placeholder="Turno" />
          {errors.turno && <span className='error-msg'>{errors.turno}</span>}
        </label>
        <br />
        
        <label>
          Nome da Mãe:
          <input style={inputStyle(errors.nomeMae)} type='text' name='nomeMae' value={formDataAluno.nomeMae} onChange={handleInputChangeAluno} placeholder="Nome da Mãe" />
          {errors.nomeMae && <span className='error-msg'>{errors.nomeMae}</span>}
        </label>
        <br />

        <label>
          Nome do Pai:
          <input style={inputStyle(errors.nomePai)} type='text' name='nomePai' value={formDataAluno.nomePai} onChange={handleInputChangeAluno} placeholder="Nome do Pai" />
          {errors.nomePai && <span className='error-msg'>{errors.nomePai}</span>}
        </label>
        <br />


        <label>
          Nome do Responsável:
          <input style={inputStyle(errors.nomeResponsavel)} type='text' name='nomeResponsavel' value={formDataAluno.nomeResponsavel} onChange={handleInputChangeAluno} placeholder="Nome do Responsável" />
          {errors.nomeResponsavel && <span className='error-msg'>{errors.nomeResponsavel}</span>}
        </label>
        <br />

        <button type='submit'>Cadastrar</button>

      </form>

    </div>
  );
};

export default CadastroAluno;