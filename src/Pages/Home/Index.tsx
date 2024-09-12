import Hero from "./components/Hero"
import Brands from "./components/Brands"
import AboutUs from "./components/About-Us"
import Services from "./components/Services"
import Packages from "../../components/Packages/Packages"
import ClientReviews from "../../components/ClientReviews/ClientReviews"

const Home = () => {
    return (
        <main>
            <Hero />
            <Brands />
            <AboutUs />
            <Services />
            <Packages />
            <ClientReviews />
        </main>
    )
}

export default Home