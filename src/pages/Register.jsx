import React, { useState } from 'react';
import Form from '../Componentes/Form';
import LoginInput from '../Componentes/LoginInput';
import Buttons from '../Componentes/Buttons';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleCadastreSe = () => {
        setShowForm(true);
        setShowLogin(false); // Garantir que o login esteja oculto ao mostrar o formulário
    };

    const handleLogin = () => {
        setShowLogin(true);
        setShowForm(false); // Garantir que o formulário esteja oculto ao mostrar o login
    };

    const handleVoltar = (event) => {
        event.preventDefault();
        setShowForm(false);  // Ocultar o formulário
        setShowLogin(false); // Ocultar o login
    };

    const buttonOnpage = [
        {
            handle: handleVoltar,
            divStyle: 'col-span-2',
            title: 'Voltar'
        }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center">
            <section className="text-xl flex flex-col items-center">
                {!showForm && !showLogin && (
                    <>
                        <button
                            type="button"
                            id="btnCadastreSe"
                            className="flex justify-center mb-3 gap-2 items-center mx-auto shadow-xl text-3xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                            onClick={handleCadastreSe}
                        >
                            Cadastre-se
                        </button>

                        <button
                            type="button"
                            id="btnLogin"
                            className="flex justify-center gap-2 items-center mx-auto shadow-xl text-3xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </>
                )}

                {showLogin && (
                    <>
                        <LoginInput />
                        <Buttons dados={buttonOnpage} /> {/* Botão de voltar */}
                    </>
                )}
                {showForm && (
                    <>
                        <Form />
                        <Buttons dados={buttonOnpage} /> {/* Botão de voltar */}
                    </>
                )}
            </section>
        </div>
    );
}

export default Register;
