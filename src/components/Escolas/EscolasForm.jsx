import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiDelete } from "react-icons/ti";
import { IoMdAddCircle } from "react-icons/io";
import api from '../../services/apiConfig';

import './EscolasForm.css';

const EscolasForm = () => {
  const [codigoINEP, setCodigoINEP] = useState('');
  const [escola, setEscola] = useState('');
  const [sigla, setSigla] = useState('');
  const [zonaDeLocalidade, setZonaLocalizacao] = useState('Urbana'); 
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState([]); 
  const [turnos, setTurnos] = useState([]);
  const [serie, setSerie] = useState(''); 
  const [quantidadeAlunos, setQuantidadeAlunos] = useState(0);

  const [enderecoLoading, setEnderecoLoading] = useState(false);
  const [endereco, setEndereco] = useState('')

  const [isEditing, setIsEditing] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false); 

  useEffect(() => {
    if (cep.length === 8) {
      fetchAddress();
    }
  }, [cep]);

  const fetchAddress = async () => {
    setEnderecoLoading(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;

      setEnderecoLoading(false);
      setEndereco(`${logradouro}, ${bairro}`);
      setMunicipio(localidade);
      setEstado(uf);
    } catch (error) {
      console.error('Erro ao buscar endereço pelo CEP:', error);
      setEnderecoLoading(false);
    }
  };

  const handleCnpjChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    const formattedValue = value.substring(0, 14); 
    const cnpjRegex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/; 
  
    if (cnpjRegex.test(formattedValue)) {
      const formattedCnpj = formattedValue.replace(cnpjRegex, '$1.$2.$3/$4-$5');
      setCnpj(formattedCnpj);
    } else {
      setCnpj(formattedValue);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const curso1 = curso.toString()
    const turno1 = turnos.toString() 
    
    try {
      const response = await api.post('/api/escola', {
        codigo_inep: codigoINEP,
        escola: escola,
        sigla: sigla,
        zona_de_localidade: zonaDeLocalidade,
        cnpj: cnpj,
        cep: cep,
        endereco: endereco,
        numero: numero,
        complemento: complemento,
        municipio: municipio,
        estado: estado,
        telefone1: telefone1,
        email: email,
        turnos: turno1,
        curso: curso1,
        serie: serie,
        quantidadeAlunos: quantidadeAlunos
      });
      console.log(response.data)
      
      setCodigoINEP('');
      setEscola('');
      setSigla('');
      setZonaLocalizacao('')
      setCnpj('')
      setCep('')
      setEndereco('')
      setNumero('')
      setComplemento('')
      setMunicipio('')
      setEstado('')
      setTelefone1('')
      setEmail('')
      setTurnos([])
      setCurso([])
      setSerie('')
      setQuantidadeAlunos('')

      alert('Dados enviados')
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowSaveButton(true);
  };

  return (
    <div className="EscolaForm">
      <div className="form-container">
        <div className="form-header">
          <h1>Detalhes da Escola</h1>
        </div>
        <div className="form-all">
          <div className="form-column-1">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Código INEP:
                  <input
                    type="text"
                    value={codigoINEP}
                    onChange={(e) => setCodigoINEP(e.target.value)}
                    disabled={!isEditing}
                    placeholder="Digite o código INEP aqui"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Escola:
                  <input
                    type="text"
                    value={escola}
                    onChange={(e) => setEscola(e.target.value)}
                    disabled={!isEditing}
                    placeholder="Digite o nome da escola aqui"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Sigla:
                  <input
                    type="text"
                    value={sigla}
                    onChange={(e) => setSigla(e.target.value)}
                    disabled={!isEditing}
                    placeholder="Digite a sigla aqui"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Zona de Localização:
                  <select
                    value={zonaDeLocalidade}
                    onChange={(e) => setZonaLocalizacao(e.target.value)}
                    disabled={!isEditing}
                  >
                    <option value="Urbana">Urbana</option>
                    <option value="Rural">Rural</option>
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>
                  CNPJ:
                  <input
                    type="text"
                    value={cnpj}
                    onChange={handleCnpjChange}
                    disabled={!isEditing}
                    placeholder="Digite o CNPJ aqui"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  CEP:
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    disabled={!isEditing}
                    placeholder="Digite o CEP aqui"
                  />
                  {enderecoLoading && <span>Carregando...</span>}
                </label>
              </div>
              <div className="form-row">
                <label>
                  Endereço:
                  <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    disabled={!isEditing}
                    placeholder="Endereço completo"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Número:
                  <input
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    disabled={!isEditing}
                    placeholder="Digite o número aqui"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Complemento:
                  <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} disabled={!isEditing} placeholder="Digite o complemento aqui" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Município:
                  <input type="text" value={municipio} onChange={(e) => setMunicipio(e.target.value)} disabled={!isEditing} placeholder="Digite o município aqui" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Estado:
                  <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} disabled={!isEditing} placeholder="Digite o estado aqui" />
                </label>
              </div>
            </form>
          </div>
          <div className="form-column-2">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Telefone:
                  <input type="text" value={telefone1} onChange={(e) => setTelefone1(e.target.value)} disabled={!isEditing} placeholder="Digite o telefone aqui" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email:
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} placeholder="Digite o email aqui" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Turnos:
                </label>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    value="Manhã"
                    checked={turnos.includes("Manhã")}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      if (checked) {
                        setTurnos((prevTurnos) => [...prevTurnos, value]);
                      } else {
                        setTurnos((prevTurnos) => prevTurnos.filter((turno) => turno !== value));
                      }
                    }}
                    disabled={!isEditing}
                  />
                  <span>Manhã</span>
                  <input
                    type="checkbox"
                    value="Tarde"
                    checked={turnos.includes("Tarde")}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      if (checked) {
                        setTurnos((prevTurnos) => [...prevTurnos, value]);
                      } else {
                        setTurnos((prevTurnos) => prevTurnos.filter((turno) => turno !== value));
                      }
                    }}
                    disabled={!isEditing}
                  />
                  <span>Tarde</span>
                  <input
                    type="checkbox"
                    value="Noite"
                    checked={turnos.includes("Noite")}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      if (checked) {
                        setTurnos((prevTurnos) => [...prevTurnos, value]);
                      } else {
                        setTurnos((prevTurnos) => prevTurnos.filter((turno) => turno !== value));
                      }
                    }}
                    disabled={!isEditing}
                  />
                  <span>Noite</span>
                </div>
              </div>

              <hr />

              <div className="form-row">
                <label>
                  Curso:
                </label>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    value="Fundamental"
                    checked={curso.includes("Fundamental")}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      if (checked) {
                        setCurso((prevCurso) => [...prevCurso, value]);
                      } else {
                        setCurso((prevCurso) => prevCurso.filter((curso) => curso !== value));
                      }
                    }}
                    disabled={!isEditing}
                  />
                  <span>Fundamental</span>
                  <input
                    type="checkbox"
                    value="Médio"
                    checked={curso.includes("Médio")}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      if (checked) {
                        setCurso((prevCurso) => [...prevCurso, value]);
                      } else {
                        setCurso((prevCurso) => prevCurso.filter((curso) => curso !== value));
                      }
                    }}
                    disabled={!isEditing}
                  />
                  <span>Médio</span>
                  <input
                    type="checkbox"
                    value="EJA"
                    checked={curso.includes("EJA")}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      if (checked) {
                        setCurso((prevCurso) => [...prevCurso, value]);
                      } else {
                        setCurso((prevCurso) => prevCurso.filter((curso) => curso !== value));
                      }
                    }}
                    disabled={!isEditing}
                  />
                  <span>EJA</span>
                </div>
              </div>
              <hr />

              <div className="form-row">
                <label>
                  Série:
                  <input type="text" value={serie} onChange={(e) => setSerie(e.target.value)} disabled={!isEditing} placeholder="Digite a série aqui" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Quantidade de alunos matriculado na sua escola:
                  <input type="number" value={quantidadeAlunos} onChange={(e) => setQuantidadeAlunos(e.target.value)} disabled={!isEditing}  id="quantidadeAlunos" name="quantidadeAlunos" />
                </label>
              </div>
              {showSaveButton && (
                <button type="submit" className='button-save'>Salvar</button>
              )}
              {!isEditing && (
                <button onClick={handleEdit} className='button-edit'>Editar</button>
              )}
            </form>
          </div>
          
        </div>
        <hr></hr>
        <h3 className='titulo-gestores-escolares'>Gestores Escolares</h3>
        <form className='gestores_escolares'>
          <div className='gestores__escolares'>
            <label htmlFor="inep">INEP</label>
            <input type="number" id="inep" name="inep" placeholder="Digite o INEP aqui" />
          </div>
          <div className='gestores__escolares'>
            <label htmlFor="nome do(a) gestor(a)">Nome do(a) Gestor(a)</label>
            <input type="text" id="nome do(a) gestor(a)" name="nome do(a) gestor(a)" placeholder="Digite o nome do(a) gestor(a) aqui" />
          </div>
          <div className='cargo_gestor'>
            <label htmlFor='cargo_gestor'>Cargo do(a) Gestor(a)</label>
            <select className='cargo__gestor'>
              <option disabled>Selecione</option>
              <option value="Diretor(a)">Diretor(a)</option>
            </select>
          </div>
          <div className='gestores__escolares'>
            <label htmlFor="detalhes">Detalhes</label>
            <input type="text" id="detalhes" name="detalhes" placeholder='Dados adicionais do(a) gestor(a)' />
          </div>
          <div className='cargo_gestor'>
            <label htmlFor='principal'>Principal</label>
            <select className='cargo__gestor'>
              <option disabled>Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
          <div className='list_icons'>
            <a className='icons1'><TiDelete /></a>
            <a className='icons2'><IoMdAddCircle /></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EscolasForm;