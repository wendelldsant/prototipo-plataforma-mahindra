import React from 'react';
import Buttons from "../Componentes/Buttons"
import * as verifyFunctions from "../functions/register-functions.js";
import FormCards from '../Componentes/FormCards.jsx';

function Form() {
    function handleVerify(event){
        event.preventDefault(); 
        const campo1 = document.querySelector("#username").value;
        verifyFunctions.verifyID(campo1);
    };
    const registerButtons = [
        {
            id: "btn-formSubmit",
            name: 'Submit',
            action: {handleVerify}
        },
        {
            id: "btn-voltar",
            name: 'Voltar',
            action: ''
        }
    ]

    const formCamposPreenchimento = [
        {
            dataType: 'username',
            titulo: 'ID de Usuário',
            errorID: 'error-id',
            errorText: 'Nome de Usuário Inválido'
        },
        {
            dataType: 'name',
            titulo: 'Nome Completo',
            errorID: 'error-name',
            errorText: 'Nome Inválido'
        },
        {
            dataType: 'email',
            titulo: 'Email',
            errorID: 'error-email',
            errorText: 'Email inválido'
        },
        {
            dataType: 'profile-pic',
            titulo: 'Foto de Perfil',
            errorID: 'error-profile-pic',
            errorText: 'Foto Inválida'
        },
        {
            dataType: 'password',
            titulo: 'Senha',
            errorID: 'error-password',
            errorText: 'Senha inválida'
        },
        {
            dataType: 'password-confirm',
            titulo: 'Confirme a Senha',
            errorID: 'error-confirm-password',
            errorText: 'As senhas não batem'
        },
        {
            dataType: 'birthday',
            titulo: 'Data de Nascimento',
            errorID: 'error-birthday',
            errorText: 'Data de Nascimento Inválida'
        }
    ]


    return (
        <form onSubmit={console.log('ok')}>
            <FormCards data = {formCamposPreenchimento}/>
            <section className="buttons">
                <Buttons dados = {registerButtons}/>
            </section>
        </form>
        
    );
}

export default Form;
