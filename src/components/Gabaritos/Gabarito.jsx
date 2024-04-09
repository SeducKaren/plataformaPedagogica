import React, { useState } from 'react';
import './Gabarito.css';
import Navbar from '../Navbar/Navbar';

const Gabarito = () => {
  const [level, setLevel] = useState('facil');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [studentName, setStudentName] = useState('');
  const [serie, setSerie] = useState('');     
  const [classroom, setClassroom] = useState('');
  const [question, setQuestion] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeLevel = (e) => {
    setLevel(e.target.value);
  };

  const handleRegistrationNumberChange = (e) => {
    const enteredNumber = e.target.value;
    setRegistrationNumber(enteredNumber);
    // Simulação de uma função que busca o nome do aluno pelo número de matrícula
    const studentName = getStudentNameByRegistrationNumber(enteredNumber);
    setStudentName(studentName);
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleRegistrationDateChange = (e) => {
    setRegistrationDate(e.target.value);
  };

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleSerieChange = (e) => {
    setSerie(e.target.value);
  };

  const handleClassroomChange = (e) => {
    setClassroom(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Função para simular a busca do nome do aluno pelo número de matrícula
  const getStudentNameByRegistrationNumber = (registrationNumber) => {
    // Aqui você faria a lógica real para buscar o nome do aluno no banco de dados ou de onde quer que seja
    // Por enquanto, vamos apenas retornar um nome fictício
    return "Fulano de Tal";
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="info-container">
          <form>
            <div className="info">
              <p>Número de Matrícula:</p>
              <input
                type="text"
                value={registrationNumber}
                onChange={handleRegistrationNumberChange}
                disabled={!isEditing}
              />
              <p>Nome do Aluno:</p>
              <input
                type="text"
                value={studentName}
                onChange={handleStudentNameChange}
                disabled={!isEditing}
              />
              <p>Data de Cadastro:</p>
              <input
                type="date"
                value={registrationDate}
                onChange={handleRegistrationDateChange}
                disabled={!isEditing}
              />
              <p>Escola:</p>
              <input
                type="text"
                value={schoolName}
                onChange={handleSchoolNameChange}
                disabled={!isEditing}
              />
              <p>Região:</p>
              <select className="regiao-select" disabled={!isEditing}>
                <option value="urbana">Urbana</option>
                <option value="rural">Rural</option>
              </select>
              <div className="info-2">
                <p>Ano Letivo da Prova:</p>
                <select disabled={!isEditing}>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="OUTRA">OUTRA</option>
                </select>
                <input type="text" placeholder="Qual ?" disabled={!isEditing} />
                <p>Série:</p>
                <select onChange={handleSerieChange} value={serie} disabled={!isEditing}>
                  <optgroup label="Anos Iniciais">
                    <option value="2">2ª Ano</option>
                    <option value="3">3ª Ano</option>
                    <option value="4">4ª Ano</option>
                    <option value="5">5ª Ano</option>
                  </optgroup>
                  <optgroup label="Anos Finais">
                    <option value="6">6ª Ano</option>
                    <option value="7">7ª Ano</option>
                    <option value="8">8ª Ano</option>
                    <option value="9">9ª Ano</option>
                  </optgroup>
                  <optgroup label="Ensino Médio">
                    <option value="10">1ª Ano</option>
                    <option value="11">2ª Ano</option>
                    <option value="12">3ª Ano</option>
                  </optgroup>
                  <optgroup label="Educação de Jovens e Adultos (EJA)">
                    <option value="13">Fase 1</option>
                    <option value="14">Fase 2</option>
                    <option value="15">Fase 3</option>
                    <option value="16">Fase 4</option>
                  </optgroup>
                </select>
                <p>Turma:</p>
                <select onChange={handleClassroomChange} value={classroom} disabled={!isEditing}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                  <option value="H">H</option>
                  <option value="OUTRA">Outra</option>
                </select>
                <p> Qual? </p>
                <input type="text" value={question} onChange={handleQuestionChange} disabled={!isEditing} />
              </div>
            </div>
          </form>
        </div>
        <div className="questions">
          <div className="subject">
            <p>LÍNGUA PORTUGUESA</p>
          </div>
          {renderQuestions('portugues')}
        </div>
        <div className="questions">
          <div className="subject">
            <p>MATEMÁTICA</p>
          </div>
          {renderQuestions('matematica')}
        </div>
        {/* Botão de editar */}
        <button onClick={handleEditClick}>{isEditing ? 'Salvar' : 'Editar'}</button>
      </div>
    </>
  );
};

const renderQuestions = (subject) => {
  const questions = [];
  for (let i = 1; i <= 20; i++) {
    questions.push(
      <div className="question" key={`${subject}-${i}`}>
        <p>{i}</p>
        {renderOptions()}
        <select>
          <option value="facil">Fácil</option>
          <option value="medio">Médio</option>
          <option value="dificil">Difícil</option>
        </select>
      </div>
    );
  }
  return questions;
};

const renderOptions = () => {
  const options = [];
  const letters = ['A', 'B', 'C', 'D', 'E'];
  for (let letter of letters) {
    options.push(
      <div key={letter}>
        <input type="radio" id={`${letter}`} name={`${letter}`} value={`${letter}`} />
        <label htmlFor={`${letter}`}>{`${letter}`}</label>
      </div>
    );
  }
  options.push(
    <div key="npme">
      <input type="checkbox" id="np" name="np" value="np" />
      <label htmlFor="np">N/P</label>
      <input type="checkbox" id="me" name="me" value="me" />
      <label htmlFor="me">M/E</label>
    </div>
  );
  return options;
};

export default Gabarito;
