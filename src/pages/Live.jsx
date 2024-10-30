// src/Componentes/Live.js
import React from 'react';
import Chat from '../Componentes/Chat';

function Live() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 video-section flex justify-center items-center">
                    <iframe
                        id="live-video"
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/ZUTiqPcJMj8?controls=0&autoplay=1&mute=1&start=99"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="lg:col-span-1 chat-section flex justify-center items-center">
                    <Chat />
                </div>
            </div>
        </div>
    );
}

export default Live;
