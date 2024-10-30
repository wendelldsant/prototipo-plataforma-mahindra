import React, { useEffect, useState } from 'react';
import Buttons from "../Componentes/Buttons"
import { GiCheckeredFlag } from "react-icons/gi";
import { IoShareSocial } from "react-icons/io5";
import dataExample from "../dados/exemplos_demo.json"


function Social() {

    const postsExamples = dataExample.posts

    const [listaPost, setListaPost] = useState([]);
    const [message, setMessage] = useState('');
    const [photo, setPhoto] = useState('');
    const loginCheck = JSON.parse(localStorage.getItem('login_check'));
    const userOnline = loginCheck ? loginCheck.userId : false;

    useEffect(() => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        if (posts.length > 0){
            setListaPost(posts);
            console.log(posts.length)
        }
        else{
            setListaPost(postsExamples)
        }
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
        alert('Publicação deletada!')
    };

    const buttonPost = [{
        handle: '',
        divStyle: 'px-4 py-2',
        title: 'Postar'
    }];

    const renderContent = () => {
        if (!userOnline) {
            return (
                <div className="text-center p-4 min-h-screen">
                    <h1 className="col-span-5 text-3xl text-center">Faça login ou cadastre-se para conhecer nossa Rede Social!</h1>
                </div>
            );
        } else {
            return (
                <section className='min-h-screen my-4 mx-4'>
                <div className="max-w-xl mx-auto">
                    <div className="flex justify-center items-center gap-3 my-3">
                        <IoShareSocial className="w-8 h-8 text-blue" /> {/* Ícone da bandeira */}
                        <span className="lg:text-3xl text-cyan-700 sm:text-lg font-extrabold tracking-wide">
                            E-SOCIAL
                        </span>
                    </div>
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



                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-6">
                        {listaPost.length > 0 ? (
                            listaPost.map(element => (
                                <div
                                    key={element.idPost}
                                    className="border border-gray-300 p-4 rounded-lg hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out">
                                    <div>
                                        <p className="font-semibold "><strong className='text-blue-700'>{element.username}:</strong> {element.message}</p>
                                        {element.foto && (
                                            <img
                                                src={element.foto}
                                                alt="Foto do Post"
                                                className="w-full p-2 h-1/2 object-cover mt-2 rounded-lg" />
                                        )}
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
                            <p className="mx-auto col-span-1 sm:col-span-2 lg:col-span-3 text-gray-500">Seja o primeiro a comentar!</p>
                        )}
                    </div>
                </section>
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
