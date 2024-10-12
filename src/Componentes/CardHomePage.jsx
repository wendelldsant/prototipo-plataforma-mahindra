import React from "react";
import { Link } from "react-router-dom";

function CardHomePage({ dadosCards }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            {dadosCards.map((card, index) => (
                <div key={index} className="my-5 mx-3">
                    <div className="group flex flex-col justify-between items-start gap-2 h-full duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                        <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden relative">
                            <img
                                src={card.imagem}
                                alt={card.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="flex-grow">
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
