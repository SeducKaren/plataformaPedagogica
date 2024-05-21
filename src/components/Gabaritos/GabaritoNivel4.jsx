import React, { useState } from 'react';
import './GabaritoNivel1.css';

const renderOptions = (isEditing, handleRadioChange, index) => {
  const options = [];
  const letters = ['A', 'B', 'C', 'D', 'E'];
  for (let letter of letters) {
    options.push(
      <div key={letter}>
        <input
          type="radio"
          id={`${letter}-${index}`}
          name={`multipleChoice-${index}`}
          value={letter}
          onChange={handleRadioChange}
          disabled={!isEditing}
        />
        <label htmlFor={`${letter}-${index}`}>{letter}</label>
        <hr />
      </div>
    );
  }
  options.push(
    <div key="npme">
      <input
        type="radio"
        id={`np-${index}`}
        name={`multipleChoice-${index}`}
        value="np"
        onChange={handleRadioChange}
        disabled={!isEditing}
      />
      <label htmlFor={`np-${index}`}>N/P</label>
      <input
        type="radio"
        id={`me-${index}`}
        name={`multipleChoice-${index}`}
        value="me"
        onChange={handleRadioChange}
        disabled={!isEditing}
      />
      <label htmlFor={`me-${index}`}>M/E</label>
    </div>
  );
  return options;
};

const renderQuestions = (subject, isEditing, handleRadioChange) => {
  const questions = [];
  for (let i = 1; i <= 26; i++) {
    questions.push(
      <div className="question1" key={`${subject}-${i}`}>
        <p>{i} -</p>
        {renderOptions(isEditing, handleRadioChange, i)}
      </div>
    );
  }
  return questions;
};

const GabaritoNivel1 = ({ background }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions({ ...selectedOptions, [name]: value });
  };

  return (
    <>
      <div style={{ backgroundColor: background }}>
        <div className='texto_gabarito'>
          <p className='texto__gabarito'><b>"M/E"</b> <span style={{ color: 'red' }}>"Múltipla Escolha"</span> é quando o aluno marca mais de uma opção em uma pergunta de escolha múltipla. Por exemplo preencheu a resposta A e B.</p>
          <p className='texto__gabarito'><b>"N/P"</b> <span style={{ color: 'red' }}>"Não Preencheu"</span> é usada quando o aluno não preencheu uma resposta para a pergunta específica da prova.</p>
        </div>
        <div className="questions">
          <div className="subject">
            <h3><span style={{ color: 'red' }}>LÍNGUA PORTUGUESA</span></h3>
          </div>
          {renderQuestions('portugues', isEditing, handleRadioChange)}
        </div>
        <div className="questions">
          <div className="subject">
            <h3><span style={{ color: 'red' }}>MATEMÁTICA</span></h3>
          </div>
          {renderQuestions('matematica', isEditing, handleRadioChange)}
        </div>
        <div className="buttonGabarito">
          <button onClick={handleEditClick}>{isEditing ? 'Salvar' : 'Editar'}</button>
        </div>
      </div>
    </>
  );
};

export default GabaritoNivel1;