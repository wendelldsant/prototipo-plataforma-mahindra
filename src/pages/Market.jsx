import ProductsCard from "../Componentes/ProductsCards.jsx";
import camisa from "../images/camisa-red-bull.webp";
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
        titulo: 'Carro',
        imagem: carro,
        preco: '10xp'
    },
    {
        titulo: 'Carro',
        imagem: carro,
        preco: '10xp'
    },
    {
        titulo: 'Carro',
        imagem: carro,
        preco: '10xp'
    },
    {
        titulo: 'Carro',
        imagem: carro,
        preco: '10xp'
    },
    {
        titulo: 'Carro',
        imagem: carro,
        preco: '10xp'
    },
    {
        titulo: 'Carro',
        imagem: carro,
        preco: '10xp'
    },
    {
        titulo: 'Carro',
        imagem: carro,
        preco: '10xp'
    },
    {
        titulo: 'Carro',
        imagem: carro,
        preco: '10xp'
    },
];

function Market() {
    return ( 
        <main className="m-5 p-4 grid grid-cols-5">
                <article className="row-start-2">
                    <h1>lateral</h1>
                </article>
                <h1 className="col-span-4 col-start-2 text-center">Marketplace</h1>
                <section className="col-span-4 row-start-2 col-start-2 my-2">
                    <ProductsCard dados={products} />
                </section>
        </main>
    );
}

export default Market;
