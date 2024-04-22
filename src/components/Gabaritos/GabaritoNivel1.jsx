import React, { useState } from 'react';
import './GabaritoNivel1.css';

const renderOptions = (isEditing) => {
  const options = [];
  const letters = ['A', 'B', 'C', 'D', 'E'];
  for (let letter of letters) {
    options.push(
      <div key={letter}>
        <input type="radio" id={letter} name={letter} value={letter} disabled={!isEditing} />
        <label htmlFor={letter}>{letter}</label>
      </div>
    );
  }
  options.push(
    <div key="npme">
      <input type="checkbox" id="np" name="np" value="np" disabled={!isEditing} />
      <label htmlFor="np">N/P</label>
      <input type="checkbox" id="me" name="me" value="me" disabled={!isEditing} />
      <label htmlFor="me">M/E</label>
    </div>
  );
  return options;
};

const renderQuestions = (subject, isEditing) => {
  const questions = [];
  for (let i = 1; i <= 20; i++) {
    questions.push(
      <div className="question1" key={`${subject}-${i}`}>
        <p>{i}</p>
        {renderOptions(isEditing)}
        {/* <select disabled={!isEditing}>
          <option value="facil">Fácil</option>
          <option value="medio">Médio</option>
          <option value="dificil">Difícil</option>
        </select> */}
      </div>
    );
  }
  return questions;
};

const GabaritoNivel1 = ({ background }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
    
      <div style={
        { backgroundColor: background }
      }>
        <div className='texto_gabarito'>
        <p className='texto__gabarito'><b>"M/E"</b> <span style={{ color: 'red' }}>"Múltipla Escolha"</span> é quando o aluno marca mais de uma opção em uma pergunta de escolha múltipla. Por exemplo preencheu a resposta A e B.</p>
        <p className='texto__gabarito'><b>"N/R"</b> <span style={{color: 'red'}}>"Não Respondeu"</span> é usada quando o aluno não preencheu uma resposta para a pergunta específica da prova.</p>
        </div>
        <div className="questions">
          <div className="subject">
            <h3><span style={{color: 'red' }}>LÍNGUA PORTUGUESA</span></h3>
          </div>
          {renderQuestions('portugues', isEditing)}
        </div>
        <div className="questions">
          <div className="subject">
            <h3><span style={{color: 'red' }}>MATEMÁTICA</span></h3>
          </div>
          {renderQuestions('matematica', isEditing)}
        </div>
        <div className="buttonGabarito">          
          <button onClick={handleEditClick}>{isEditing ? 'Salvar' : 'Editar'}</button>
        </div>

      </div>
    </>
  );
};

export default GabaritoNivel1;
