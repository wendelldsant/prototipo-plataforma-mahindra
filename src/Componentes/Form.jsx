import { useState, useEffect } from "react";
import HelpToggle from "./HelpToggle";
import * as registerFunction from '../functions/register-functions';

function Forms() {
    const helpTexts = {
        senha: 'Sua senha deve conter pelo menos: um número, uma letra maiúscula, uma letra minúscula, 7 caracteres',
        username_text: 'Seu nome de usuário não pode conter mais de 15 caracteres'
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [lista_users, setListaUsers] = useState([]);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('lista_users')) || [];
        setListaUsers(users);
    }, []);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handlePasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value);
    };
    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleBirthday = (event) => {
        setBirthday(event.target.value);
    };
    const handleProfilePic = (event) => {
        setProfilePic(event.target.value);
    };

    const handleVerify = (event) => {
        event.preventDefault();
        console.log(registerFunction.verificaUsername(username, lista_users));
        let profile_username = registerFunction.verificaUsername(username, lista_users);
        let profile_password = registerFunction.verificaSenha(password, passwordConfirm);
        console.log(profile_username);
        console.log(profile_password);

        if (profile_username && profile_password) {
            const new_user = {
                userId: username,
                userCompleteName: name,
                userPassword: password,
                userPic: profilePic
            };

            // Atualiza a lista de usuários e armazena no localStorage
            const updated_users = [...lista_users, new_user];
            setListaUsers(updated_users);
            localStorage.setItem('lista_users', JSON.stringify(updated_users));

            const user_online = {
                new_user
            };
            localStorage.setItem('login_check', JSON.stringify(user_online));
        }
    };

    return (
        <form className="px-7 h-screen grid justify-center items-center">
            <div className="grid grid-cols-2 gap-6 text-center" id="form">
                <h1 className="text-2xl col-span-2">Cadastre-Se!</h1>

                <div className="col-span-2 ">
                    <input
                        className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:italic placeholder:text-slate-400"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nome Completo"
                        required
                        onChange={handleName}
                    />
                </div>

                <div className="col-span-2">
                    <div className="relative flex items-center">
                        <input
                            className="p-3 shadow-2xl glass w-full placeholder:italic placeholder:text-slate-400 outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                            type="text"
                            placeholder="ID de Usuário"
                            value={username}
                            onChange={handleUsername}
                            id="Username"
                            name="username"
                        />
                        <HelpToggle texto={helpTexts.username_text} />
                    </div>
                </div>

                <div className="col-span-2">
                    <input
                        className="p-3 shadow-2xl glass w-full text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                        type="date"
                        required
                        onChange={handleBirthday}
                    />
                </div>

                <div className="col-span-2">
                    <div className="relative flex items-center">
                        <input
                            className="p-3 glass shadow-2xl w-full placeholder:italic placeholder:text-slate-400 outline-none focus:border-solid focus:border-[1px] border-[#035ec5] pr-10"
                            type="url"
                            placeholder="Foto de Perfil(URL)"
                            id="profile-pic"
                            name="profile-pic"
                            required
                            onChange={handleProfilePic}
                        />
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="relative flex items-center">
                        <input
                            className="p-3 glass shadow-2xl w-full placeholder:italic placeholder:text-slate-400 outline-none focus:border-solid focus:border-[1px] border-[#035ec5] pr-10"
                            type="password"
                            placeholder="Senha"
                            id="password"
                            name="password"
                            required
                            onChange={handlePassword}
                        />
                        <HelpToggle texto={helpTexts.senha} />
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="relative flex items-center">
                        <input
                            className="p-3 glass shadow-2xl w-full placeholder:italic placeholder:text-slate-400 outline-none focus:border-solid focus:border-[1px] border-[#035ec5] pr-10"
                            type="password"
                            placeholder="Confirme Sua Senha"
                            id="password-confirm"
                            name="password-confirm"
                            required
                            onChange={handlePasswordConfirm}
                        />
                    </div>
                </div>

                <button
                    className="col-span-2 outline-none glass shadow-2xl w-full p-3 bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px] hover:text-[#035ec5] font-bold"
                    onClick={handleVerify}
                >
                    Cadastre-se!
                </button>
            </div>
        </form>
    );
}

export default Forms;
