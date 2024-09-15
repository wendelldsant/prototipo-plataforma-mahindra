import React from 'react';
import Buttons from "../Componentes/Buttons"
import FormCards from '../Componentes/FormCards.jsx';

function Form() {
    // function handleVerify(event){
    //     event.preventDefault(); 
    //     const campo1 = document.querySelector("#username").value;
    //     verifyFunctions.verifyID(campo1);
    // };
    const registerButtons = [
        {
            id: "btn-formSubmit",
            name: 'Submit',
            action: console.log('Submitted'),
            style: 'flex h-10 my-4 bg-emerald-900 text-gray-400 rounded w-20 justify-center'
        },
        {
            id: "btn-voltar",
            name: 'Voltar',
            action: console.log('Voltar'),
            style: 'col-start-3'
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

        <section className='
            grid grid-cols-4
            w-full justify-items-center
        '>
            <div className='col-start-3 col-span-2 w-full mr-10'>
                <FormCards data = {formCamposPreenchimento}/>
            </div>
            <div className='col-start-3 col-span-2'>
                <Buttons dados = {registerButtons}/>
            </div>

        </section>
        
    );
}

export default Form;
