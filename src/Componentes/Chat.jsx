import React, { useEffect, useState } from 'react';
import data from "../dados/exemplos_demo.json"

const Chat = () => {
    const chatMessagesExample = data.chat
    const [listaLiveMessage, setListaLiveMessage] = useState(JSON.parse(localStorage.getItem('liveMessages')) || []);
    const [userOnline, setUserOnline] = useState(JSON.parse(localStorage.getItem('login_check'))?.userId || null);
    const [messageInput, setMessageInput] = useState('');
    const [messagesEmpty, setMessagesEmpty] = useState(false);

    useEffect(() => {
        if (!userOnline) {
            setMessagesEmpty(true);
        }
    }, [userOnline]);

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('liveMessages'));
        if (savedMessages) {
            setListaLiveMessage(savedMessages);
        }
        else{
            setListaLiveMessage(chatMessagesExample)
        }
    }, []);

    const criaMensagem = () => {
        if (messageInput.trim() === '') return;

        const newMessage = {
            message: messageInput,
            username: userOnline,
            idMessage: listaLiveMessage.length + 1,
        };

        const updatedMessages = [...listaLiveMessage, newMessage];
        setListaLiveMessage(updatedMessages);
        localStorage.setItem('liveMessages', JSON.stringify(updatedMessages));
        setMessageInput('');
    };

    const deleteMessage = (id) => {
        const updatedMessages = listaLiveMessage.filter((msg) => msg.idMessage !== id);
        setListaLiveMessage(updatedMessages);
        localStorage.setItem('liveMessages', JSON.stringify(updatedMessages));
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mx-auto w-full">
            <div className="lg:h-96 h-52 overflow-y-auto mb-4 p-2 bg-gray-700 rounded-lg">
                {listaLiveMessage.length === 0 ? (
                    <p className="text-gray-300">Seja o primeiro a comentar!</p>
                ) : (
                    listaLiveMessage.map((element) => (
                        <div key={element.idMessage} className="flex justify-between flex-wrap my-2">
                            <p className={element.username === userOnline ? 'text-green-500' : 'text-white'}    >
                                <strong className='text-blue-300'>{element.username}:</strong> {element.message}
                            </p>
                            {element.username === userOnline && (
                                <button onClick={() => deleteMessage(element.idMessage)}>
                                    <i className="fas fa-trash text-red-400"></i>
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>

            {userOnline ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        criaMensagem();
                    }}
                    className="flex"
                >
                    <input
                        type="text"
                        id="chat-input"
                        placeholder="Digite sua mensagem..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        className="w-full p-2 bg-gray-600 text-white rounded-l-lg focus:outline-none"
                    />
                    <button
                        type="submit"
                        id="chat-send"
                        className="bg-emerald-500 px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors"
                    >
                        Enviar
                    </button>
                </form>
            ) : (
                <h4 className="text-red-500 mt-4">Faça login para enviar mensagens!</h4>
            )}
        </div>
    );
};

export default Chat;
