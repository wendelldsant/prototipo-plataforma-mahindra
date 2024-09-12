import ProductsCard from "../Componentes/ProductsCards.jsx";
import camisa from "../images/camisa-redbull.webp";
import carro from "../images/carro.jpg"

const products = [
    {
        titulo: 'Camisa Redbull',
        imagem: camisa,
        preco: '10xp'
    },
    {
        titulo: 'Camisa Redbull',
        imagem: camisa,
        preco: '10xp'
    },
    {
        titulo: 'Camisa Redbull',
        imagem: camisa,
        preco: '10xp'
    },
    {
        titulo: 'Camisa Redbull',
        imagem: camisa,
        preco: '10xp'
    },
    {
        titulo: 'Camisa Redbull',
        imagem: camisa,
        preco: '10xp'
    },
    {
        titulo: 'Camisa Redbull',
        imagem: carro,
        preco: '10xp'
    }
];

function Market() {
    return ( 
        <main className="flex justify-center items-center m-5">
            <section className="w-full max-w-5xl">
                <h1 className="text-2xl font-bold text-center mb-6">Marketplace</h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductsCard dados={products} />
                </section>
            </section>
        </main>
    );
}

export default Market;
