import React, { useState } from 'react';
import Form from '../Componentes/Form';

function Register() {
    const [showForm, setShowForm] = useState(false);

    const handleCadastreSe = () => {
        setShowForm(true);
    };

    return (
        <div className="container">
            <section className="text-xl">
                <div className="button-container">
                    <button type="button" id="btnCadastreSe" onClick={handleCadastreSe}>Cadastre-se</button>
                </div>

                {showForm && <Form />}  {/* Exibe o Form ao clicar */}
            </section>
        </div>
    );
}

export default Register;
