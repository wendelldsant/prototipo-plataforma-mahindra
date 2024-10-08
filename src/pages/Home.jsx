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
        <section className="gradient-backgroung-blue ">
                <Carousel/>
                <section className="p-5">
                    <CardHomePage dadosCards={dadosCards} />
                </section>
        </section>
    );
}

export default Home;
