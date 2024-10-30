import React from "react";
import { Link } from "react-router-dom";

function CardHomePage({ dadosCards }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 p-4">
            {dadosCards.map((card, index) => (
                <div key={index} className="my-5">
                    <div className="group flex p-4 flex-col justify-between w-10/12 mx-auto items-start gap-2 h-full duration-500 relative rounded-lg bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                        <div className="w-full h-60  bg-gray-200 rounded-lg overflow-hidden relative">
                            <img
                                src={card.imagem}
                                alt={card.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="flex-grow p-3">
                            <h2 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h2>
                            <p className="text-gray-700 line-clamp-3">{card.text}</p>
                        </div>

                        <Link to={card.route}>
                            <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                                Explore
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardHomePage;
