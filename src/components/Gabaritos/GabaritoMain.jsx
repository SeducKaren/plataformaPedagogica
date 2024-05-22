import React, { useState, useEffect } from 'react';
import './Gabarito.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import GabaritoNivel1 from './GabaritoNivel1';
import GabaritoNivel2 from './GabaritoNivel2';
import GabaritoNivel3 from './GabaritoNivel3';
import GabaritoNivel4 from './GabaritoNivel4';
import GabaritoNivel5 from './GabaritoNivel5';
import GabaritoNivel6 from './GabaritoNivel6';

const GabaritoMain = () => {
  const [dataRegistro, setDataRegistro] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [matricula, setMatricula] = useState('');
  const [cod, setCod] = useState('');
  const [nivelProva, setNivelProva] = useState('Nível 1: 2° ano e 3° ano');
  const [quantidadeAcertos, setQuantidadeAcertos] = useState('0/40');
  const [modoEdicao, setModoEdicao] = useState(false); 
  const [background, setBackground] = useState('#dceaf7');

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataRegistroDate = new Date(dataRegistro);

    console.log('Data de Registro:', dataRegistroDate);
    console.log('Matrícula:', matricula);
    console.log('Cod Inep:', cod);
    console.log('Nível da Prova:', nivelProva);
    console.log('Quantidade de Acertos:', quantidadeAcertos);
  };

  const handMudarCor = (evento) => {
    if (evento === "Nível 1: 2° ano e 3° ano") {
      setBackground('#dceaf7')      
    } else if (evento === "Nível 2: 4° ano e 5° ano") {
      setBackground('#f6c6ad')
    } else if (evento === "Nível 3: 6° ano e 7° ano") {
      setBackground('#c2f1c8')
    } else if (evento === "Nível 4: 8° ano e 9° ano") {
      setBackground('#f6fdb7')
    } else if (evento === "Nível 5: Fase 1 e 2") {
      setBackground('#f2cfee')
    } else if (evento === "Nível 6: Fase 3 e 4") {
      setBackground('#f6d766')
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = background;
  }, [background]);

  const handleEdit = () => {
    const dataSistema = new Date().toISOString().split('T')[0];
    setDataRegistro(dataSistema);
    setModoEdicao(true);
  };

  return (
    <div className='GabaritoMain'>
      <Navbar />
      <div className="gabarito-container">
        <form onSubmit={handleSubmit} className="formulario" style={{ backgroundColor: background }}>
          <h1 className='titulo-gabarito'>Gabaritos</h1>
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
            Matrícula do aluno:
            <input
              type="text"
              placeholder="Insira o número de matrícula do aluno"
              value={matricula}
              maxLength={15}
              onChange={(e) => setMatricula(e.target.value)}
              disabled={!modoEdicao}
            />
          </label>
          <br />
          <label>
            Cod Inep:
            <input
              type="text"
              placeholder="Insira o código"
              value={cod}
              onChange={(e) => setCod(e.target.value)}
              disabled={!modoEdicao}
            />
          </label>
          <br />
          <label>
            Nível da Prova:
            <select
              value={nivelProva}
              onChange={(e) => {
                setNivelProva(e.target.value);
                handMudarCor(e.target.value);
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
          <div className="button-group">
            <button type="submit" disabled={!modoEdicao}>Registrar</button>
            <button type="button" onClick={handleEdit}>Editar</button>
          </div>
          <br />
        </form>
        {nivelProva === "Nível 1: 2° ano e 3° ano" && <GabaritoNivel1 background={'#dceaf7'} />}
        {nivelProva === "Nível 2: 4° ano e 5° ano" && <GabaritoNivel2 />}
        {nivelProva === "Nível 3: 6° ano e 7° ano" && <GabaritoNivel3 />}
        {nivelProva === "Nível 4: 8° ano e 9° ano" && <GabaritoNivel4 />}
        {nivelProva === "Nível 5: Fase 1 e 2" && <GabaritoNivel5 />}
        {nivelProva === "Nível 6: Fase 3 e 4" && <GabaritoNivel6 />}
      </div>
      <Footer />
    </div>
  );
};

export default GabaritoMain;