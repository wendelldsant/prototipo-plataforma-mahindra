import React from 'react';

function Profile(){
  return (
    <div className="container mx-auto my-4">
      <h1 className="text-center text-2xl font-bold">Seu Perfil</h1>
      <section className="flex flex-wrap justify-center gap-4 my-4">
        {/* Imagem de Perfil */}
        <div className="w-full lg:w-1/3 my-3 flex justify-center">
          <img src="Foto aleatoria.jpg" alt="Sua Foto de Perfil" className="rounded-full w-60 h-60 object-cover" />
        </div>

        {/* Dados Pessoais */}
        <div className="w-full lg:w-2/3 bg-gray-100 p-4 rounded-lg">
          <h4 className="text-xl font-semibold">DADOS PESSOAIS</h4>
          <hr className="my-2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold">Nome Completo</label>
              <p className="text-lg">Wendell dos Santos Silva</p>
            </div>
            <div>
              <label className="font-bold">Email</label>
              <p className="text-lg">wendell@example.com</p>
            </div>
            <div>
              <label className="font-bold">Data de Nascimento</label>
              <p className="text-lg">12/05/1995</p>
            </div>
            <div>
              <label className="font-bold">Telefone</label>
              <p className="text-lg">(11) 99999-9999</p>
            </div>
            <div>
              <label className="font-bold">Equipe Favorita</label>
              <p className="text-lg">Tech-Mahindra</p>
            </div>
            <div>
              <label className="font-bold">Dado</label>
              <p className="text-lg">xxxxxxx</p>
            </div>
          </div>
        </div>

        {/* Biografia */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg">
          <h4 className="text-xl font-semibold">BIOGRAFIA</h4>
          <hr className="my-2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
