import React, { useState } from 'react';
import axios from 'axios';
import './Suporte.css'; 
import Navbar from '../Navbar/Navbar';

const Suporte = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
        opcaoSelecionada: '',
    });

    const [errors, setErrors] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
        opcaoSelecionada: '',
    });

    const handleOpcaoChange = (opcao) => {
        setFormData({
            ...formData,
            opcaoSelecionada: opcao,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validar campos do formulário
        const validationErrors = {};
        if (!formData.nome) {
            validationErrors.nome = 'Por favor, insira seu nome.';
        }
        if (!formData.email) {
            validationErrors.email = 'Por favor, insira seu e-mail.';
        } else if (!isValidEmail(formData.email)) {
            validationErrors.email = 'Por favor, insira um e-mail válido.';
        }
        if (!formData.telefone) {
            validationErrors.telefone = 'Por favor, insira seu telefone.';
        }
        if (!formData.assunto) {
            validationErrors.assunto = 'Por favor, insira o assunto.';
        }
        if (!formData.mensagem) {
            validationErrors.mensagem = 'Por favor, insira sua mensagem.';
        }
        if (!formData.opcaoSelecionada) {
            validationErrors.opcaoSelecionada = 'Por favor, selecione uma opção.';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        // Se todos os campos estiverem preenchidos corretamente, enviar o formulário
        try {
            await axios.post('https://seusite.com/Suporte/joaopinteraminense@gmail.com', formData);
            window.location.href = 'https://seusite.com/obrigado';
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                assunto: '',
                mensagem: '',
                opcaoSelecionada: '',
            });
            setErrors({});
        } catch (error) {
            console.error('Ocorreu um erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
        }
    };

    const isValidEmail = (email) => {
        // Função para validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const getPlaceholder = () => {
        switch (formData.opcaoSelecionada) {
            case 'elogio':
                return 'Deixe seu elogio...';
            case 'sugestao':
                return 'Deixe sua sugestão...';
            case 'duvida':
                return 'Deixe sua dúvida...';
            case 'critica':
                return 'Deixe sua crítica...';
            default:
                return '';
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="header">
                    <h1>Fale Conosco</h1>
                </div>
                <p>Use o formulário abaixo para tirar suas dúvidas, dar sugestões ou registrar sua crítica, lembrando sempre de indicar o assunto e o destino da mensagem.</p>
                <form onSubmit={handleSubmit} className="formulario">
                    <div className="borda-azul">
                        <h3>Escolha uma opção:</h3>
                        <div className="multipla-escolha">
                            <label>
                                Elogio
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="elogio"
                                    checked={formData.opcaoSelecionada === 'elogio'}
                                    onChange={() => handleOpcaoChange('elogio')}
                                />
                            </label>
                            <label>
                                Sugestão
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="sugestao"
                                    checked={formData.opcaoSelecionada === 'sugestao'}
                                    onChange={() => handleOpcaoChange('sugestao')}
                                />
                            </label>
                            <label>
                                Dúvida
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="duvida"
                                    checked={formData.opcaoSelecionada === 'duvida'}
                                    onChange={() => handleOpcaoChange('duvida')}
                                />
                            </label>
                            <label>
                                Crítica
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="critica"
                                    checked={formData.opcaoSelecionada === 'critica'}
                                    onChange={() => handleOpcaoChange('critica')}
                                />
                            </label>
                        </div>
                    </div>

                        <label>
                            Nome completo:
                            <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder='Digite seu nome completo'/>
                            {errors.nome && <div className="error-message">{errors.nome}</div>}
                        </label>
                        <label>
                            E-mail:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Digite seu e-mail'/>
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </label>
                        <label>
                            Telefone:
                            <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder='Digite o seu telefone'/>
                            {errors.telefone && <div className="error-message">{errors.telefone}</div>}
                        </label>
                        <label>
                            Assunto:
                            <input type="text" name="assunto" value={formData.assunto} onChange={handleChange} placeholder='Digite o assunto'/>
                            {errors.assunto && <div className="error-message">{errors.assunto}</div>}
                        </label>
                        <label>
                            Mensagem:
                            <textarea
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                placeholder={getPlaceholder()}
                            />
                            {errors.mensagem && <div className="error-message">{errors.mensagem}</div>}
                        </label>
                        {errors.opcaoSelecionada && <div className="error-message">{errors.opcaoSelecionada}</div>}
                        <div className="botao">
                            <button type="submit">Enviar</button>
                        </div>
                </form>
            </div>
        </>
    );
};

export default Suporte;
