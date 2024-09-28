import * as profileFunctions from '../functions/profile-functions' 
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Profile() {
  const lista_users = JSON.parse(localStorage.getItem('lista_users'));
  const login_check = JSON.parse(localStorage.getItem('login_check'));

  const navigate = useNavigate(); 

  const handleSair = (event) => {
    event.preventDefault();
    localStorage.setItem('login_check', JSON.stringify(false));
    setUserOnline('false');
    navigate('/');
  };

  const [user_online, setUserOnline] = useState(profileFunctions.verifyUser(lista_users, login_check));

  if (!user_online) {
    return <p>Usuário não está logado.</p>;
  }

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-center text-2xl font-bold">Seu Perfil</h1>
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
                <label className="font-bold">Email</label>
                <p className="text-lg">{user_online.email || 'Email não fornecido'}</p>
              </div>
              <div>
                <label className="font-bold">Data de Nascimento</label>
                <p className="text-lg">{user_online.birthday || 'Data não fornecida'}</p>
              </div>
              <div>
                <label className="font-bold">Telefone</label>
                <p className="text-lg">{user_online.phone || '(11) 99999-9999'}</p>
              </div>
              <div>
                <label className="font-bold">Equipe Favorita</label>
                <p className="text-lg">{user_online.team || 'Não especificada'}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">BIOGRAFIA</h4>
            <hr className="my-2" />
            <p>{user_online.bio || 'Nenhuma biografia fornecida.'}</p>
          </div>
          <button className="bg-purple-400 px-4 py-2 rounded-full" onClick={handleSair}>
            Sair
          </button>
        </section>
      )}
    </div>
  );
}

export default Profile;
