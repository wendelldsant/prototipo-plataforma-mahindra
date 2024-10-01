import ProductsCard from "../Componentes/ProductsCards.jsx";
import data from '../dados/produtos.json';
import * as marketFunctions from "../functions/market-functions.js";
import { useState, useEffect } from "react";

function Market() {
    const [user_online, setUserOnline] = useState(null); // Inicializa como null
    const [showMarket, setShowMarket] = useState(false); // Mova aqui para o nível superior

    useEffect(() => {
        const lista_users = JSON.parse(localStorage.getItem('lista_users')) || [];
        const login_check = JSON.parse(localStorage.getItem('login_check'));

        if (login_check && marketFunctions.verifyUser(lista_users, login_check)) {
            setUserOnline(login_check);
            setShowMarket(true); // Mostra o formulário se o usuário estiver logado
        } else {
            setUserOnline(false);
            setShowMarket(false);
        }
    }, []); 

    return (
        <>
            {showMarket && (
                <main className="m-5 p-4 grid grid-cols-5">
                    <h1 className="col-span-5 text-3xl text-center">Marketplace</h1>
                    <section className="col-span-6 my-2">
                        <ProductsCard dados={data} />
                    </section>
                </main>
            )}
            {!showMarket && (
                <main className="m-5 p-4 grid grid-cols-5 my-2">
                    <h1 className="col-span-5 text-3xl text-center">Faça login ou cadastre-se para conhecer nosso Marketplace!</h1>
                </main>
            )}
        </>
    );
}

export default Market;
