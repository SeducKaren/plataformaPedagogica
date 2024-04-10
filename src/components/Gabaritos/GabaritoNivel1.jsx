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
      <div className="question" key={`${subject}-${i}`}>
        <p>{i}</p>
        {renderOptions(isEditing)}
        <select disabled={!isEditing}>
          <option value="facil">Fácil</option>
          <option value="medio">Médio</option>
          <option value="dificil">Difícil</option>
        </select>
      </div>
    );
  }
  return questions;
};

const GabaritoNivel1 = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
    <div className="page-container">
      <div className="questions">
        <div className="subject">
          <p>LÍNGUA PORTUGUESA</p>
        </div>
        {renderQuestions('portugues', isEditing)}
      </div>
      <div className="questions">
        <div className="subject">
          <p>MATEMÁTICA</p>
        </div>
        {renderQuestions('matematica', isEditing)}
      </div>
      {/* Botão de editar */}
      <button onClick={handleEditClick}>{isEditing ? 'Salvar' : 'Editar'}</button>
      </div>
    </>
  );
};

export default GabaritoNivel1;
