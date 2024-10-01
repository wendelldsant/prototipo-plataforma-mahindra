import React, { useEffect, useState } from 'react';
import Buttons from "../Componentes/Buttons"

function Social() {
    const [listaPost, setListaPost] = useState([]);
    const [message, setMessage] = useState('');
    const [photo, setPhoto] = useState('');
    const loginCheck = JSON.parse(localStorage.getItem('login_check'));
    const userOnline = loginCheck ? loginCheck.userId : false;

    useEffect(() => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        setListaPost(posts);
    }, []);

    const criaPost = (dados) => {
        const newPost = {
            message: dados.message,
            foto: dados.foto,
            username: dados.username,
            idPost: listaPost.length + 1,
        };
        const updatedPosts = [...listaPost, newPost];
        setListaPost(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setMessage('');
        setPhoto('');
    };

    const deleteMessage = (id) => {
        const updatedPosts = listaPost.filter(post => post.idPost !== id);
        setListaPost(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    const buttonPost = [{
        handle: '',
        divStyle: 'px-4 py-2',
        title: 'Postar'
    }];

    const renderContent = () => {
        if (!userOnline) {
            return (
                <div className="text-center p-4">
                    <h1 className="col-span-5 text-3xl text-center">Faça login ou cadastre-se para conhecer nossa Rede Social!</h1>
                </div>
            );
        } else {
            return (
                <div className="max-w-xl mx-auto p-4">
                    <form 
                        className="mb-4" 
                        onSubmit={(e) => {
                            e.preventDefault();
                            criaPost({ message, foto: photo, username: userOnline });
                        }}>
                        <div className="mb-4">
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="4"
                                placeholder="Escreva sua mensagem..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="url"
                                placeholder="Foto (URL)"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </div>
                        <Buttons dados={buttonPost} />
                    </form>

                    <h3 className="text-xl mb-2">Publicações</h3>
                    <div>
                        {listaPost.length > 0 ? (
                            listaPost.map(element => (
                                <div key={element.idPost} className="border border-gray-300 p-4 mb-2 rounded">
                                    <div>
                                        <p className="font-semibold">{element.username}: {element.message}</p>
                                        {element.foto && <img src={element.foto} alt="Foto do Post" className="w-full h-auto mt-2" />}
                                    </div>
                                    {element.username === userOnline && (
                                        <button 
                                            className="mt-2 text-red-500"
                                            onClick={() => deleteMessage(element.idPost)}>
                                            Deletar Post
                                        </button>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Seja o primeiro a comentar!</p>
                        )}
                    </div>
                </div>
            );
        }
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default Social;
