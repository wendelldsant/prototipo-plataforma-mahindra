import ProductsCard from "../Componentes/ProductsCards.jsx";
import data from '../dados/produtos.json';

function Market() {

    return (
        <main className="m-5 p-4 grid grid-cols-5">
            <h1 className="col-span-5 text-3xl text-center">Marketplace</h1>
            <section className="col-span-6 my-2">
                <ProductsCard dados={data} />
            </section>
        </main>
    );
}

export default Market;
