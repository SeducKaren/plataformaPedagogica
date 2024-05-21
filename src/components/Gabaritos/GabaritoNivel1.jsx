import React, { useState, useEffect } from 'react';
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
      />
      <label htmlFor={`np-${index}`}>N/P</label>
      <input
        type="radio"
        id={`me-${index}`}
        name={`multipleChoice-${index}`}
        value="me"
        onChange={handleRadioChange}
      />
      <label htmlFor={`me-${index}`}>M/E</label>
    </div>
  );
  return options;
};

const renderQuestions = (subject, isEditing, handleRadioChange) => {
  const questions = [];
  for (let i = 1; i <= 20; i++) {
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
  const [isEditing, setIsEditing] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [buttonColor, setButtonColor] = useState('red'); // Estado para a cor do botão

  useEffect(() => {
    setIsEditing(false);
  }, []);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions({ ...selectedOptions, [name]: value });
  };

  const handleButtonClick = () => {
    setIsEditing(!isEditing);
    setButtonColor(isEditing ? 'green' : 'red'); // Alterna a cor do botão entre vermelho e verde
  };

  return (
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
        <button 
          onClick={handleButtonClick} 
          style={{ backgroundColor: buttonColor }}
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

export default GabaritoNivel1;
