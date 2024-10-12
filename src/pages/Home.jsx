import CardHomePage from "../Componentes/CardHomePage";
import Carousel from "../Componentes/Carousel";
import dadosCards from "../dados/home_cards.json"

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
