import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Suporte.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

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

    const handleSubmit = (e) => {
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

        // Enviar o formulário usando EmailJS
        emailjs.sendForm('service_y3q9raa', 'template_lbkkmxs', e.currentTarget, "CIYv-FO5FhsE2BIag")
            .then((result) => {
                console.log(result.text);
                alert('Mensagem enviada com sucesso!');
                resetForm();
            }, (error) => {
                console.error('Ocorreu um erro ao enviar o formulário:', error);
                alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
            });
    };

    const isValidEmail = (email) => {
        // Função para validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const resetForm = () => {
        setFormData({
            nome: '',
            email: '',
            telefone: '',
            assunto: '',
            mensagem: '',
            opcaoSelecionada: '',
        });
        setErrors({});
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
        <div className='Suporte'>
            <Navbar />
            <div className="container-suporte">
                <div className="header">
                    <h2 className='titulo-suporte'>Fale Conosco</h2>
                </div>
                <p className='paragrafo-suporte'>Use o formulário abaixo para tirar dúvidas, dar sugestão ou registrar sua crítica, lembrando sempre de indicar o assunto e o destino da mensagem.</p>
                <form onSubmit={handleSubmit} className="formulario">
                    <div className="borda-azul">
                        <h3>Escolha uma opção:</h3>
                        <div className="multipla-escolha">
                            <label>
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="elogio"
                                    checked={formData.opcaoSelecionada === 'elogio'}
                                    onChange={() => handleOpcaoChange('elogio')}
                                />
                                Elogio
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="sugestao"
                                    checked={formData.opcaoSelecionada === 'sugestao'}
                                    onChange={() => handleOpcaoChange('sugestao')}
                                />
                                Sugestão
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="duvida"
                                    checked={formData.opcaoSelecionada === 'duvida'}
                                    onChange={() => handleOpcaoChange('duvida')}
                                />
                                Dúvida
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="critica"
                                    checked={formData.opcaoSelecionada === 'critica'}
                                    onChange={() => handleOpcaoChange('critica')}
                                />
                                Crítica
                            </label>
                        </div>

                        <label>
                            Nome completo:
                            <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder='Digite seu nome'/>
                            {errors.nome && <div className="error-message">{errors.nome}</div>}
                        </label>
                        <label>
                            E-mail:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Digite seu E-mail'/>
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </label>
                        <label>
                            Telefone:
                            <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder='Digite seu telefone'/>
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
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Suporte;