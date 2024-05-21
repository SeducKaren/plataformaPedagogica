import React, { useState } from 'react';
import './CadastroAluno.css';
import api from '../../../services/apiConfig';

const CadastroAluno = () => {
  const [formDataAluno, setFormDataAluno] = useState({
    matricula: '',
    nomeAluno: '',
    dataNascimento: '',
    genero: '',
    escola: '',
    cpf: '',
    turma: '',
    serie: [],
    curso: [],
    ano: '',
    turno: [],
    nomeMae: '',
    nomePai: '',
    nomeResponsavel: '',
    deficiencia: ''
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleInputChangeAluno = (e) => {
    const { name, value } = e.target;
    let inputPonto = value;

    switch (name) {
      case 'cpf':
        inputPonto = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
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

  const handleDeficienciaChange = (e) => {
    const { value } = e.target;
    setFormDataAluno({ ...formDataAluno, deficiencia: value });
  };

  const handleSubmitAluno = async (e) => {
    e.preventDefault();
    setIsButtonClicked(true); // Adiciona a classe 'clicked' ao botão

    const validationErrors = {};
    Object.keys(formDataAluno).forEach((key) => {
      if (!formDataAluno[key]) {
        validationErrors[key] = 'Este campo é obrigatório';
      }
    });
    setErrors(validationErrors);
    setFormSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await api.post('/api/aluno', formDataAluno);
        const turnoString = formDataAluno.turno.toString()
        const cursoString = formDataAluno.curso.toString()
        const serieString = formDataAluno.serie.toString()

        setFormDataAluno({
          matricula: '',
          nomeAluno: '',
          dataNascimento: '',
          genero: '',
          escola: '',
          cpf: '',
          turma: '',
          serie: serieString,
          curso: cursoString,
          ano: '',
          turno: turnoString,
          nomeMae: '',
          nomePai: '',
          nomeResponsavel: '',
          deficiencia: ''
        });
        setFormSubmitted(false);
      } catch (error) {
        console.error('Erro ao cadastrar aluno:', error);
      }
    }

    setTimeout(() => {
      setIsButtonClicked(false); // Remove a classe 'clicked' após 2 segundos
    }, 2000);
  };

  const handleTurnoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormDataAluno((prevFormData) => ({
        ...prevFormData,
        turno: [...prevFormData.turno, value], 
      }));
    } else {
      setFormDataAluno((prevFormData) => ({
        ...prevFormData,
        turno: prevFormData.turno.filter((item) => item !== value), 
      }));
    }
  };

  const handleCursoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormDataAluno((prevFormData) => ({
        ...prevFormData,
        curso: [...prevFormData.curso, value], 
      }));
    } else {
      setFormDataAluno((prevFormData) => ({
        ...prevFormData,
        curso: prevFormData.curso.filter((item) => item !== value), 
      }));
    }
  };

  const handleSerieChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormDataAluno((prevFormData) => ({
        ...prevFormData,
        serie: [...prevFormData.serie, value], 
      }));
    } else {
      setFormDataAluno((prevFormData) => ({
        ...prevFormData,
        serie: prevFormData.serie.filter((item) => item !== value), 
      }));
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
          <input
            style={inputStyle(errors.matricula)}
            type='text'
            name='matricula'
            value={formDataAluno.matricula}
            onChange={handleInputChangeAluno}
            placeholder='Matrícula'
          />
          {errors.matricula && <span className='error-msg'>{errors.matricula}</span>}
        </label>
        <br />

        <label>
          Nome Aluno:
          <input
            style={inputStyle(errors.nomeAluno)}
            type='text'
            name='nomeAluno'
            value={formDataAluno.nomeAluno}
            onChange={handleInputChangeAluno}
            placeholder='Nome Aluno'
          />
          {errors.nomeAluno && <span className='error-msg'>{errors.nomeAluno}</span>}
        </label>
        <br />

        <label>
          CPF:
          <input
            style={inputStyle(errors.cpf)}
            type='text'
            name='cpf'
            value={formDataAluno.cpf}
            onChange={handleInputChangeAluno}
            placeholder='CPF'
          />
          {errors.cpf && <span className='error-msg'>{errors.cpf}</span>}
        </label>
        <br />

        <label>
          Data de Nascimento:
          <input
            style={inputStyle(errors.dataNascimento)}
            type='date'
            name='dataNascimento'
            value={formDataAluno.dataNascimento}
            onChange={handleInputChangeAluno}
          />
          {errors.dataNascimento && <span className='error-msg'>{errors.dataNascimento}</span>}
        </label>
        <br />

        <label>
          Gênero:
          <select
            style={inputStyle(errors.genero)}
            name='genero'
            value={formDataAluno.genero}
            onChange={handleInputChangeAluno}
          >
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

        <div className="checkbox_group">
          <label>Deficiência:</label>
          <div className='column'>
            <label>
              <input
                type="radio"
                name="deficiencia"
                value="Não Possuo"
                checked={formDataAluno.deficiencia === "Não Possuo"}
                onChange={handleDeficienciaChange}
              />
              Não Possuo
            </label>
            <label>
              <input
                type="radio"
                name="deficiencia"
                value="Autista"
                checked={formDataAluno.deficiencia === "Autista"}
                onChange={handleDeficienciaChange}
              />
              Autista
            </label>
            <label>
              <input
                type="radio"
                name="deficiencia"
                value="Deficiencia multipla"
                checked={formDataAluno.deficiencia === "Deficiencia multipla"}
                onChange={handleDeficienciaChange}
              />
              Deficiência múltipla
            </label>
            <label>
              <input
                type="radio"
                name="deficiencia"
                value="Deficiencia auditiva"
                checked={formDataAluno.deficiencia === "Deficiencia auditiva"}
                onChange={handleDeficienciaChange}
              />
              Deficiência auditiva
            </label>
          </div>

          <div className='column'>
            <label>
              <input
                type="radio"
                name="deficiencia"
                value="Deficiente Fisico"
                checked={formDataAluno.deficiencia === "Deficiente Fisico"}
                onChange={handleDeficienciaChange}
              />
              Deficiente físico
            </label>
            <label>
              <input
                type="radio"
                name="deficiencia"
                value="Deficiente visual"
                checked={formDataAluno.deficiencia === "Deficiente visual"}
                onChange={handleDeficienciaChange}
              />
              Deficiente visual
            </label>
            <label>
              <input
                type="radio"
                name="deficiencia"
                value="Outra"
                checked={formDataAluno.deficiencia === "Outra"}
                onChange={handleDeficienciaChange}
              />
              Outra
            </label>
          </div>
        </div>
        <hr />
        <label>
          Escola:
          <input
            style={inputStyle(errors.escola)}
            type='text'
            name='escola'
            value={formDataAluno.escola}
            onChange={handleInputChangeAluno}
            placeholder='Escola'
          />
          {errors.escola && <span className='error-msg'>{errors.escola}</span>}
        </label>
        <br />

        <label>
          Curso:
        </label>
        <div className="checkbox-container">
          <input
            type="checkbox"
            value="Anos Iniciais"
            checked={formDataAluno.curso.includes("Anos Iniciais")}
            onChange={handleCursoChange}
          />
          <span>Ensino Fundamental</span>
          <input
            type="checkbox"
            value="Ensino Médio"
            checked={formDataAluno.curso.includes("Ensino Médio")}
            onChange={handleCursoChange}
          />
          <span>Ensino Médio</span>
          <input
            type="checkbox"
            value="EJA anos Finais"
            checked={formDataAluno.curso.includes("EJA anos Finais")}
            onChange={handleCursoChange}
          />
          <span>EJA Anos Finais</span>
          <input
            type="checkbox"
            value="EJA anos Iniciais"
            checked={formDataAluno.curso.includes("EJA anos Iniciais")}
            onChange={handleCursoChange}
          />
          <span>EJA Anos Iniciais</span>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            value="Atendimento"
            checked={formDataAluno.curso.includes("Atendimento")}
            onChange={handleCursoChange}
          />
          <span>(AEE) (Migração até 2021)</span>
          <input
            type="checkbox"
            value="Educação Infantil"
            checked={formDataAluno.curso.includes("Educação Infantil")}
            onChange={handleCursoChange}
          />
          <span>Educação Infantil</span>
          <input
            type="checkbox"
            value="Anos Finais"
            checked={formDataAluno.curso.includes("Anos Finais")}
            onChange={handleCursoChange}
          />
          <span>Anos Finais</span>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            value="9 anos"
            checked={formDataAluno.curso.includes("9 anos")}
            onChange={handleCursoChange}
          />
          <span>Ensino Fundamental de 9° ano - Multi (migração até 2021)</span>
        </div>
        <hr/>

        {/* parte das series */}
        <label>
          Séries:
        </label>
        <div className="checkbox-container-two">
          <div className="checkbox-item">
            <input
              type="checkbox"
              value="Anos Iniciais"
              checked={formDataAluno.serie.includes("Anos Iniciais")}
              onChange={handleSerieChange}
            />
            <span>Anos Iniciais (1º ano, 2º ano, 3º ano, 4º ano, 5º ano)</span>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              value="Anos Finais"
              checked={formDataAluno.serie.includes("Anos Finais")}
              onChange={handleSerieChange}
            />
            <span>Anos Finais (6º ano, 7º ano, 8º ano, 9º ano)</span>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              value="Ensino Medio"
              checked={formDataAluno.serie.includes("Ensino Medio")}
              onChange={handleSerieChange}
            />
            <span>Ensino Médio (1º ano, 2º ano, 3º ano)</span>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              value="EJA"
              checked={formDataAluno.serie.includes("EJA")}
              onChange={handleSerieChange}
            />
            <span>EJA (Fase 1, Fase 2, Fase 3, Fase 4)</span>
          </div>
          <hr />
        </div>
        <br />

        <div className="form-row">
          <label>
            Turnos:
          </label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Manhã"
              checked={formDataAluno.turno.includes("Manhã")}
              onChange={handleTurnoChange}
            />
            <span>Manhã</span>
            <input
              type="checkbox"
              value="Tarde"
              checked={formDataAluno.turno.includes("Tarde")}
              onChange={handleTurnoChange}
            />
            <span>Tarde</span>
            <input
              type="checkbox"
              value="Noite"
              checked={formDataAluno.turno.includes("Noite")}
              onChange={handleTurnoChange}
            />
            <span>Noite</span>
          </div>
          <hr />
        </div>
        <br />
        
        <label>
          Ano Letivo:
          <input
            style={inputStyle(errors.ano)}
            type='text'
            name='ano'
            value={formDataAluno.ano}
            onChange={handleInputChangeAluno}
            placeholder='Ano Letivo'
          />
          {errors.ano && <span className='error-msg'>{errors.ano}</span>}
        </label>
        <br />

        <label>
          Nome da Mãe:
          <input
            style={inputStyle(errors.nomeMae)}
            type='text'
            name='nomeMae'
            value={formDataAluno.nomeMae}
            onChange={handleInputChangeAluno}
            placeholder='Nome da Mãe'
          />
          {errors.nomeMae && <span className='error-msg'>{errors.nomeMae}</span>}
        </label>
        <br />

        <label>
          Nome do Pai:
          <input
            style={inputStyle(errors.nomePai)}
            type='text'
            name='nomePai'
            value={formDataAluno.nomePai}
            onChange={handleInputChangeAluno}
            placeholder='Nome do Pai'
          />
          {errors.nomePai && <span className='error-msg'>{errors.nomePai}</span>}
        </label>
        <br />

        <label>
          Nome do Responsável:
          <input
            style={inputStyle(errors.nomeResponsavel)}
            type='text'
            name='nomeResponsavel'
            value={formDataAluno.nomeResponsavel}
            onChange={handleInputChangeAluno}
            placeholder='Nome do Responsável'
          />
          {errors.nomeResponsavel && <span className='error-msg'>{errors.nomeResponsavel}</span>}
        </label>
        <br />

        <button 
          type='submit' 
          className={isButtonClicked ? 'clicked' : ''}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroAluno;