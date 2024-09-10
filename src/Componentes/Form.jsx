import React from 'react';
import Buttons from "../Componentes/Buttons"
import * as verifyFunctions from "../functions/register-functions.js";

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


    return (
        <form>
            <div className="form-group" id="campo1">
                <label for="username">ID de Usuário</label>
                <input type="text" id="username" name="username"/>
                <div id="error-message-username"></div>
            </div>
            <div className="form-group" id="campo2">
                <label for="name">Nome</label>  
                <input type="text" id="name" name="name"/>
                <div id="error-message-name"></div>
            </div>
            <div className="form-group" id="campo4">
                <label for="email">Email</label>
                <input type="email" id="email" name="email"/>
                <div id = "error-message-email"></div>
            </div>
            <div className="form-group" id="campo6">
                <label for="profile-pic">Foto de Perfil (URL)</label>
                <input type="url" id="profile-pic" name="profile-pic" accept="image/*"/>
                <div id="error-message-foto"></div>
            </div>
            <div className="form-group" id="campo7">
                <label for="password">Senha</label>
                <input type="text" id="password" name="password"/>
                <div id="error-message-password"></div>
            </div>

            <div className="form-group" id="campo8">
                <label for="password">Confirmar senha</label>
                <input type="text" id="password-confirm" name="password-confirm"/>
                <div id="error-message-password-confirm"></div>
            </div>
            <div className="form-group" id="campo9">
                <label for="dob" id="birthday-title">Data de Nascimento</label>
                <input type="date" id="birthday" name="birthday"/>
                <div id="error-message-birthday"></div>
            </div>
            <div className="form-group" id="campo10">
                <label for="gender">Gênero</label>
                <select id="gender" name="gender">
                    <option value="">Selecione</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                    <option value="other">Outro</option>
                </select>
                <div id="error-message-gender"></div>
            </div>
            <section className="buttons">
                <Buttons dados = {registerButtons}/>
            </section>
        </form>
        
    );
}

export default Form;
