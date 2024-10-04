import CardHomePage from "../Componentes/CardHomePage";
import Carousel from "../Componentes/Carousel";

const dadosCards = [
    {
        title: 'Transmissão ao vivo',
        text: 'Acompanhe todos eventos ao vivo da Fórmula E, ganhe pontos e interaja em nosso chat!',
        imagem: "carro.jpg",
        route: "/live"
    },
    {
        title: 'Rede Social',
        text: 'Acompanhe todos eventos ao vivo da Fórmula E, ganhe pontos e interaja em nosso chat!',
        imagem: "rede-social-foto.jpeg",
        route: "/social"
    },
    {
        title: 'Marketplace',
        text: 'Troque seus pontos por produtos em nosso Marketplace!',
        imagem: "marketplace.photo.jpg",
        route: "/market"
    }
];

function Home() {
    return ( 
        <section>
                <Carousel/>
                <section className="gradient-backgroung-blue w-full h-[70vh]">
                    <div>
                        <h1>Sobre Nós</h1>
                    </div>
                </section>
                <CardHomePage dadosCards={dadosCards} />

        </section>
    );
}

export default Home;
