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
        titulo: 'Camisa Redbull',
        imagem: carro,
        preco: '10xp'
    }
];

function Market() {
    return ( 
        <main className="">
            <section className="">
                <h1 className="">Marketplace</h1>
                <section className="">
                    <ProductsCard dados={products} />
                </section>
            </section>
        </main>
    );
}

export default Market;
