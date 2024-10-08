import { useState, useEffect } from "react";
import HelpToggle from "./HelpToggle";
import * as registerFunction from '../functions/register-functions';
import Buttons from "./Buttons";
import { useNavigate } from 'react-router-dom';
import StandardModal from "./StandardModal";

function Forms() {
    const navigate = useNavigate();
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
    const [showModal, setShowModal] = useState(false);

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

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/');
    };

    const handleVerify = (event) => {
        event.preventDefault();
        if (name === '' || password === '' || birthday === '') {
            alert('Preencha todos os campos');
            return; // Evita continuar se os campos não forem preenchidos
        }

        let profile_username = registerFunction.verificaUsername(username, lista_users);
        let profile_password = registerFunction.verificaSenha(password, passwordConfirm);

        // Define a foto de perfil para "perfil-vazio.jpg" se não houver uma fornecida
        const finalProfilePic = profilePic || 'perfil-vazio.jpg';

        if (profile_username && profile_password) {
            const new_user = {
                userId: username,
                userCompleteName: name,
                userPassword: password,
                userPic: finalProfilePic,
                userBirthday: birthday,
                userPontuacao: '0'
            };

            // Atualiza a lista de usuários e armazena no localStorage
            const updated_users = [...lista_users, new_user];
            setListaUsers(updated_users);
            localStorage.setItem('lista_users', JSON.stringify(updated_users));

            const user_online = {
                userId: username,
                userCompleteName: name,
                userPassword: password,
                userPic: finalProfilePic,
                userBirthday: birthday,
                userPontuacao: '0'
            };
            localStorage.setItem('login_check', JSON.stringify(user_online));
            setShowModal(true);
        }
    };

    const buttons = [
        {
            handle: handleVerify,
            title: 'Cadastre-se',
            divStyle: 'col-span-2 mb-3'
        }
    ];

    return (
        <form className="px-7 grid justify-center items-center">
            {showModal && (
                <StandardModal 
                    handleCloseModal={handleCloseModal}
                    atributes={{
                        title: "Seja bem-vindo ao Emotion-Grid!",
                        text: 'Cadastro efetuado com sucesso!', 
                        cancelName: "Conheça nossa plataforma",
                    }}
                />
            )}
            <div className="grid grid-cols-2 gap-6 text-center" id="form">
                <h1 className="text-2xl col-span-2 text-blue-900 font-medium">Cadastre-se!</h1>

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
                        className="p-3 shadow-2xl glass w-full text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5] "
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

                <Buttons dados={buttons} />
            </div>
        </form>
    );
}

export default Forms;
