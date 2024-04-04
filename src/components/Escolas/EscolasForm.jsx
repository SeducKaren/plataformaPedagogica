import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiDelete } from "react-icons/ti";
import { IoMdAddCircle } from "react-icons/io";

import './EscolasForm.css';

const EscolasForm = () => {
  const [codigoINEP, setCodigoINEP] = useState('');
  const [escola, setEscola] = useState('');
  const [sigla, setSigla] = useState('');
  const [zonaLocalizacao, setZonaLocalizacao] = useState('urbana');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [centro, setCentro] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [email, setEmail] = useState('');
  const [anoAluno, setAnoAluno] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [curso, setCurso] = useState('fundamental');
  const [serie, setSerie] = useState('');
  const [serieAluno, setSerieAluno] = useState('');

  const [enderecoLoading, setEnderecoLoading] = useState(false);
  const [endereco, setEndereco] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);


  useEffect(() => {
    if (cep.length === 8) {
      fetchAddress();
    }
  }, [cep]);


  // aqui é api do viacep
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
      const formattedCnpj = formattedValue.replace(cnpjRegex, '$1.$2.$3/$4-$5'); // Formata o CNPJ
      setCnpj(formattedCnpj);
    } else {
      setCnpj(formattedValue);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log({
        codigoINEP,
        escola,
        sigla,
        zonaLocalizacao,
        cnpj,
        cep,
        numero,
        complemento,
        centro,
        municipio,
        estado,
        telefone1,
        telefone2,
        email,
        anoAluno,
        instituicao,
        curso,
        serie,
        serieAluno,
        endereco
      });
    setIsEditing(false); // Desativa o modo de edição após o envio
    setShowSaveButton(false); // Esconde o botão "Salvar" após enviar
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowSaveButton(true); // Exibe o botão "Salvar" ao clicar em editar
  };

  return (
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
                  value={zonaLocalizacao}
                  onChange={(e) => setZonaLocalizacao(e.target.value)}
                  disabled={!isEditing}
                >
                  <option value="urbana">Urbana</option>
                  <option value="rural">Rural</option>
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
                <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Centro:
                <input type="text" value={centro} onChange={(e) => setCentro(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Município:
                <input type="text" value={municipio} onChange={(e) => setMunicipio(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Estado:
                <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
          </form>
          {showSaveButton && (
              <button type="submit" className='button-save'>Salvar</button>

            )}

          {!isEditing && (
            <button onClick={handleEdit} className='button-edit'>Editar</button>
            )}
        </div>



        <div className="form-column-2">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Telefone 1:
                <input type="text" value={telefone1} onChange={(e) => setTelefone1(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Telefone 2:
                <input type="text" value={telefone2} onChange={(e) => setTelefone2(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Ano do Aluno:
                <input type="text" value={anoAluno} onChange={(e) => setAnoAluno(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Instituição:
                <input type="text" value={instituicao} onChange={(e) => setInstituicao(e.target.value)} disabled={!isEditing} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Curso:
                <select value={curso} onChange={(e) => setCurso(e.target.value)} disabled={!isEditing} className='curso'>
                  <option value="fundamental">Fundamental</option>
                  <option value="medio">Médio</option>
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>
                Série:
                <select value={serieAluno} onChange={(e) => setSerieAluno(e.target.value)} disabled={!isEditing}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="5">6</option>
                  <option value="5">7</option>
                  <option value="5">8</option>
                  <option value="5">9</option>
                </select>
              </label>
            </div>
            <div className='input__escola'>
              <label for='Curso'>Curso</label>
              <select className='curso'>
                <option disabled>Selecione</option>
                <option value="Atendimento">Atendimento Educacional Especializado (AEE) (Migração até 2021)</option>
                <option value="EJA Anos Finais">Educação de Jovens e Adultos - Anos Finais (EJA)</option>
                <option value="EJA Anos Iniais">Educação de Jovens e Adultos - Anos Iniais (EJA)</option>
                <option value="Educação Infantil">Educação Infantil</option>
                <option value="Anos Finais">Ensino Fundamental - Anos Finais</option>
                <option value="Anos Inicias">Ensino Fundamental - Anos Inicias</option>
                <option value="9 anos">Ensino Fundamental de 9 anos - Multi (migração até 2021)</option>
                <option value="Secretaria">Secretaria de Educação (demanda do ticket #76999)</option>
              </select>
            </div>
            <div className='formulario'>
              <label For="Autorização">Autorização</label>
              <input type="text" id="Autorização" name="Autorização" />
            </div>
            <div className='formulario'>
              <label For="Anos letivos">Anos letivos</label>
              <input type="text" id="Anos letivos" name="Anos letivos" />
            </div>
            <div className='formulario'>
              <label For="Secretario Escolar">Secretário Escolar</label>
              <input type="text" id="Secretário Escolar" name="Secretário Escolar" placeholder='Informe o nome, código, CPF ou RG da pessoa' />
            </div>

            </form>
      </div>
      </div>

            <hr></hr>
        <h3 className='titulo-gestores-escolares'>Gestores Escolares</h3>
        <form className='gestores_escolares'>
          <div className='gestores__escolares'>
            <label For="inep">INEP</label>
            <input type="number" id="inep" name="inep" />
          </div>
          <div className='gestores__escolares'>
            <label For="nome do(a) gestor(a)">Nome do(a) Gestor(a)</label>
            <input type="text" id="nome do(a) gestor(a)" name="nome do(a) gestor(a)" />
          </div>
          <div className='cargo_gestor'>
            <label for='cargo_gestor'>Cargo do(a) Gestor(a)</label>
            <select className='cargo__gestor'>
              <option disabled>Selecione</option>
              <option value="cargo_gestor">Diretor(a)</option>
            </select>
          </div>
          <div className='gestores__escolares'>
            <label For="detalhes">Destalhes</label>
            <input type="text" id="detalhes" name="detalhes" placeholder='Dados adicionais do(a) gestor(a)' />
          </div>
          <div className='cargo_gestor'>
            <label for='principal'>Principal</label>
            <select className='cargo__gestor'>
              <option disabled>Selecione</option>
              <option value="principal">Sim</option>
              <option value="principal">Não</option>
            </select>
          </div>
          <div className='list_icons'>
          <a className='icons1'><TiDelete /></a>
          <a className='icons2'><IoMdAddCircle /></a>
          </div>


        </form>


    </div>
  );
};

export default EscolasForm;