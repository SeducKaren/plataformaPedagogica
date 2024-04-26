import React, { useState, useEffect} from 'react';
import './Gabarito.css';
import Navbar from '../Navbar/Navbar';
import GabaritoNivel1 from './GabaritoNivel1';
import GabaritoNivel2 from './GabaritoNivel2';
import GabaritoNivel3 from './GabaritoNivel3';
import GabaritoNivel4 from './GabaritoNivel4';
import GabaritoNivel5 from './GabaritoNivel5';
import GabaritoNivel6 from './GabaritoNivel6';
import Footer from '../Footer/Footer';


const GabaritoMain = () => {
  const [dataRegistro, setDataRegistro] = useState('');
  const [matricula, setMatricula] = useState('');
  const [escola, setEscola] = useState('');
  const [nomeAluno, setNomeAluno] = useState('');
  const [serie, setSerie] = useState('');
  const [turma, setTurma] = useState('');
  const [turno, setTurno] = useState('');
  const [regiao, setRegiao] = useState('');
  const [quantidadeAcertos, setQuantidadeAcertos] = useState('0/40');
  const [deficiencias, setDeficiencias] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false); 
  const [nivelProva, setNivelProva] = useState('');
  const [background, setBackground] = useState('#fff');
  

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const handMudarCor = (evento) => {
    if (evento === "Nível 1: 2° ano e 3° ano"){
      setBackground('#dceaf7')      
    }else if (evento === "Nível 2: 4° ano e 5° ano"){
      setBackground('#f6c6ad')
    }else if (evento === "Nível 3: 6° ano e 7° ano"){
      setBackground('#c2f1c8')
    }else if (evento === "Nível 4: 8° ano e 9° ano"){
      setBackground('#f6fdb7')
    }else if (evento === "Nível 5: Fase 1 e 2"){
      setBackground('#f2cfee')
    }else if (evento === "Nível 6: Fase 3 e 4"){
      setBackground('#f6d766')
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = background;
  }, [background]);

  const handleDeficienciaChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDeficiencias([...deficiencias, value]);
    } else {
      setDeficiencias(deficiencias.filter((deficiencia) => deficiencia !== value));
    }
  };

  const handleEdit = () => {
    setModoEdicao(true);
  };

  

  return (
    <>
      <Navbar />
      <h1 className='titulo-gabarito'>Gabaritos</h1>
      <form onSubmit={handleSubmit} className="formulario" style={{backgroundColor: background}}>
        <label className='inputData'>
          Data de Registro:
          <input
            type="date"                      
            value={dataRegistro}
            onChange={(e) => setDataRegistro(e.target.value)}
            disabled={!modoEdicao} 
            className="PlaceholderDataRegistro"
          />
        </label>
        <br />        
        <label className='inputMatricula'>
          Numero de Matrícula:
          <input
            type="text"
            placeholder="Insira o número de matrícula"
            value={matricula}
            maxLength={15}
            onChange={(e) => setMatricula(e.target.value)}
            disabled={!modoEdicao} 
          />
        </label>
        <br />

        <label>
          Nível da Prova:
          <select
            value={nivelProva}
            onChange={(e) => {setNivelProva(e.target.value)
             handMudarCor(e.target.value)
            }}
            disabled={!modoEdicao} 
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
            disabled={!modoEdicao} 
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
            disabled={!modoEdicao} 
          />
        </label>
        <br />

        <label>
          Série:
          <select
            value={serie}
            onChange={(e) => setSerie(e.target.value)}
            disabled={!modoEdicao} 
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
            disabled={!modoEdicao} 
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
            disabled={!modoEdicao} 
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
        </label>
        <br />

        <label>
          Quantidade de Acertos:
          <input
            type="text"
            value={quantidadeAcertos}
            onChange={(e) => setQuantidadeAcertos(e.target.value)}
            disabled={!modoEdicao} 
            className="PlaceholderQuantidadeAcertos"
          />
        </label>
        <br />

        <label>
          Turno:
          <select
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
            disabled={!modoEdicao} 
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
              value="Não Possuo"
              onChange={handleDeficienciaChange}
              disabled={!modoEdicao} 
            />
            Não Possuo
              
              <input
                type="checkbox"
                value="Autista"
                onChange={handleDeficienciaChange}
                disabled={!modoEdicao} 
              />
              Autista
              <input
                type="checkbox"
                value="Deficiencia multipla"
                onChange={handleDeficienciaChange}
                disabled={!modoEdicao} 
              />
              Deficiência múltipla
              <input
                type="checkbox"
                value="Deficiencia auditiva"
                onChange={handleDeficienciaChange}
                disabled={!modoEdicao} 
              />
              Deficiência auditiva
            </div>
            
            <div className='column'><input
              type="checkbox"
              value="Deficiente Fisico"
              onChange={handleDeficienciaChange}
              disabled={!modoEdicao} 
            />
            Deficiente físico
            <input
                type="checkbox"
                value="Deficiente visual"
                onChange={handleDeficienciaChange}
                disabled={!modoEdicao} 
              />            
              Deficiente visual
            <input
              type="checkbox"
              value="Outra"
              onChange={handleDeficienciaChange}
              disabled={!modoEdicao} 
            />
            Outra
            
            </div>
            
          </label>
        </div>
        

        <div className="button-group">
          <button type="submit" disabled={modoEdicao ? false : true}>Registrar</button>
          <button type="button" onClick={handleEdit}>Editar</button>          
        </div>
        <br />
      </form>
      {nivelProva === "Nível 1: 2° ano e 3° ano" && <GabaritoNivel1 background={'#dceaf7'}/>}
      {nivelProva === "Nível 2: 4° ano e 5° ano" && <GabaritoNivel2 />}
      {nivelProva === "Nível 3: 6° ano e 7° ano" && <GabaritoNivel3 />}
      {nivelProva === "Nível 4: 8° ano e 9° ano" && <GabaritoNivel4 />}
      {nivelProva === "Nível 5: Fase 1 e 2" && <GabaritoNivel5 />}
      {nivelProva === "Nível 6: Fase 3 e 4" && <GabaritoNivel6 />}

      <Footer />
    </>
  );
};

export default GabaritoMain;
