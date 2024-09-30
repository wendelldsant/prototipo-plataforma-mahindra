import * as profileFunctions from '../functions/profile-functions';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../Componentes/Buttons';

function Profile() {
  const navigate = useNavigate(); 
  const [user_online, setUserOnline] = useState(null); // Inicializa como null

  useEffect(() => {
    const lista_users = JSON.parse(localStorage.getItem('lista_users')) || [];
    const login_check = JSON.parse(localStorage.getItem('login_check'));

    if (login_check && profileFunctions.verifyUser(lista_users, login_check)) {
      setUserOnline(login_check);
    } else {
      setUserOnline(false); 
    }
  }, []); 

  const handleSair = (event) => {
    event.preventDefault();
    localStorage.setItem('login_check', JSON.stringify(false));
    setUserOnline(null); // Limpa o usuário logado
    navigate('/'); // Redireciona para a página inicial
  };

  if (user_online === false) {
    return <p>Usuário não está logado.</p>;
  }

  const buttons = [
    {
      title: 'Sair',
      handle: handleSair,
      divStyle: ''
    }
  ];

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-center text-white text-2xl font-bold">Seu Perfil</h1>
      {user_online && (
        <section className="flex flex-wrap justify-center gap-4 my-4">
          <div className="w-full lg:w-1/3 my-3 flex justify-center">
            <img src={user_online.userPic} alt="Sua Foto de Perfil" className="rounded-full w-60 h-60 object-cover" />
          </div>
          <div className="w-full lg:w-2/3 bg-gray-100 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">DADOS PESSOAIS</h4>
            <hr className="my-2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold">Nome Completo</label>
                <p className="text-lg">{user_online.userCompleteName}</p>
              </div>
              <div>
                <label className="font-bold">Data de Nascimento</label>
                <p className="text-lg">{user_online.userBirthday || 'Data não fornecida'}</p>
              </div>
              <div>
                <label className="font-bold">ID de Usuário</label>
                <p className="text-lg">{user_online.userId || 'Data não fornecida'}</p>
              </div>
              <div>
                <label className="font-bold">Pontuação atual</label>
                <p className="text-lg">{user_online.userPontuacao || 'Não especificada'}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">BIOGRAFIA</h4>
            <hr className="my-2" />
            <p>{user_online.bio || 'Nenhuma biografia fornecida.'}</p>
          </div>
          <Buttons dados={buttons}/>
        </section>
      )}
    </div>
  );
}

export default Profile;
