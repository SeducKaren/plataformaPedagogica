import React, { useState } from 'react';
import './Gabarito.css';
import Navbar from '../Navbar/Navbar';
import GabaritoNivel1 from './GabaritoNivel1';

const GabaritoMain = () => {
  const [dataRegistro, setDataRegistro] = useState('');
  const [matricula, setMatricula] = useState('');
  const [escola, setEscola] = useState('');
  const [nomeAluno, setNomeAluno] = useState('');
  const [serie, setSerie] = useState('');
  const [turma, setTurma] = useState('');
  const [turno, setTurno] = useState('');
  const { regiao, setRegiao } = useState('');
  const [quantidadeAcertos, setQuantidadeAcertos] = useState('0/40');
  const [deficiencias, setDeficiencias] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false); // Estado para controlar o modo de edição
  const [nivelProva, setNivelProva] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para registrar os dados
    console.log('Data de Registro:', dataRegistro);
    console.log('Matrícula:', matricula);
    console.log('Escola:', escola);
    console.log('Nome do Aluno:', nomeAluno);
    console.log('Série:', serie);
    console.log('Turma:', turma);
    console.log('Turno:', turno);
    console.log('Quantidade de Acertos:', quantidadeAcertos);
    console.log('Deficiências:', deficiencias);
    console.log('Nível da Prova:', nivelProva);
  };

  const handleDeficienciaChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDeficiencias([...deficiencias, value]);
    } else {
      setDeficiencias(deficiencias.filter((deficiencia) => deficiencia !== value));
    }
  };

  const handleEdit = () => {
    // Alterar o estado para indicar que o formulário está em modo de edição
    setModoEdicao(true);
  };

  const gabarito = (() => {
    let gabaritoText = '';
    switch (serie) {
      case '2°ano':
      case '3°ano':
        gabaritoText = 'Gabarito para Anos Iniciais';
        break;
      case '4°ano':
      case '5°ano':
        gabaritoText = 'Gabarito para Anos Finais';
        break;
      case '6°ano':
      case '7°ano':
      case '8°ano':
      case '9°ano':
        gabaritoText = 'Gabarito para Anos Finais';
        break;
      case '1°ano':
      case '10°ano':
      case '11°ano':
      case '12°ano':
        gabaritoText = 'Gabarito para Ensino Médio';
        break;
      default:
        gabaritoText = '';
    }
    return <p className="gabarito">{gabaritoText}</p>;
  })();

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="formulario">
        <label>
          Data de Registro:
          <input
            type="date"
            value={dataRegistro}
            onChange={(e) => setDataRegistro(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          />
        </label>
        
        <label>
          Numero de Matrícula:
          <input
            type="text"
            placeholder="Insira o número de matrícula"
            value={matricula}
            maxLength={15}
            onChange={(e) => setMatricula(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          />
        </label>

        <label>
          Nível da Prova:
          <select
            value={nivelProva}
            onChange={(e) => setNivelProva(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          >
            <option value="">Selecione o Nível da Prova</option>
            <option value="Nível 1: 2° ano e 3° ano">Nível 1: 2° ano e 3° ano</option>
            <option value="Nível 2: 4° ano e 5° ano">Nível 2: 4° ano e 5° ano</option>
            <option value="Nível 3: 6° ano e 7° ano">Nível 3: 6° ano e 7° ano</option>
            <option value="Nível 4: 8° ano e 9° ano">Nível 4: 8° ano e 9° ano</option>
            <option value="Nível 5: Fase 1 e 2">Nível 5: Fase 1 e 2</option>
            <option value="Nível 6: Fase 3 e 4">Nível 6: Fase 3 e 4</option>
          </select>
        </label>
        <br />
        <label>
          Nome Completo do Aluno:
          <input
            type="text"
            placeholder='Informe o nome completo do aluno'
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          />
        </label>
        <br />
        <label>
          Escola:
          <input
            type="text"
            placeholder="Informe o nome da Escola"
            value={escola}
            onChange={(e) => setEscola(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          />
        </label>
        <br />

        <label>
          Série:
          <select
            value={serie}
            onChange={(e) => setSerie(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          >
            <option value="">Selecione a Série</option>
            <optgroup label="Anos Iniciais">
              <option value="2°ano">2° Ano</option>
              <option value="3°ano">3° Ano</option>
              <option value="4°ano">4° Ano</option>
              <option value="5°ano">5° Ano</option>
            </optgroup>
            <optgroup label="Anos Finais">
              <option value="6°ano">6° Ano</option>
              <option value="7°ano">7° Ano</option>
              <option value="8°ano">8° Ano</option>
              <option value="9°ano">9° Ano</option>
            </optgroup>
            <optgroup label="Ensino Médio">
              <option value="1°ano">1° Ano</option>
              <option value="10°ano">2° Ano</option>
              <option value="11°ano">3° Ano</option>
              <option value="12°ano">4° Ano</option>
            </optgroup>
          </select>
        </label>
        <br />
        <label>
          Região:
          <select
            value={regiao}
            onChange={(e) => setRegiao(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          >
            <option value="">Selecione sua Regiao</option>
            <option value="Urbano">Urbana</option>
            <option value="Rural">Rural</option>
          </select>
        </label>
        <br />
        <label>
          Turma:
          <select
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          >
            <option value="">Selecione a Turma</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="OUTRA">Outra</option>
          </select>
          <br />
        </label>
        <br />
        <label>
          Quantidade de Acertos:
          <input
            type="text"
            value={quantidadeAcertos}
            onChange={(e) => setQuantidadeAcertos(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          />
        </label>
        <br />
        <label>
          Turno:
          <select
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
            disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
          >
            <option value="">Selecione o Turno</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </label>
        <br />

        <div className="checkbox-group">
          <label>
            Deficiência:
            <div className='column'>
              
              <input
                type="checkbox"
                value="Deficiente visual"
                onChange={handleDeficienciaChange}
                disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
              />
              Deficiente visual
              <input
                type="checkbox"
                value="Autista"
                onChange={handleDeficienciaChange}
                disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
              />
              Autista
              <input
                type="checkbox"
                value="Deficiencia multipla"
                onChange={handleDeficienciaChange}
                disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
              />
              Deficiência múltipla
              <input
                type="checkbox"
                value="Deficiencia auditiva"
                onChange={handleDeficienciaChange}
                disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
              />
              Deficiência auditiva
            </div>
            
            <div className='column'><input
              type="checkbox"
              value="Deficiente Fisico"
              onChange={handleDeficienciaChange}
              disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
            />
            Deficiente físico
            <input
              type="checkbox"
              value="Outra"
              onChange={handleDeficienciaChange}
              disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
            />
            Outra
            <input
              type="checkbox"
              value="Não Possuo"
              onChange={handleDeficienciaChange}
              disabled={!modoEdicao} // Desabilita o campo se não estiver em modo de edição
            />
            Não Possuo</div>
            
          </label>
        </div>
        <br />
        <div className="button-group">
          <button type="submit" disabled={modoEdicao ? false : true}>Registrar</button>
          <button type="button" onClick={handleEdit}>Editar</button>
        </div>
        <br />
      </form>
      {gabarito}
      {nivelProva === "Nível 1: 2° ano e 3° ano" && <GabaritoNivel1 />}
    </>
  );
};

export default GabaritoMain;
