import React from "react";
import { Link } from "react-router-dom";

function CardHomePage({ dadosCards }) {
    return (
        <div className="grid grid-cols-6 justify-items-center">
            {dadosCards.map((card, index) => (
                <div key={index} className="lg:col-span-2 md:col-span-6 col-span-6 my-5 mx-3">
                    <div className="group flex flex-col justify-start items-start gap-2 w-96 h-auto duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                        <div
                            className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden relative"
                        >
                            <img
                                src={card.imagem}
                                alt={card.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{card.title}</h2>
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
