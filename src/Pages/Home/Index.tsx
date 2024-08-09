import AboutUs from "./components/About-Us"
import Brands from "./components/Brands"
import ClientReviews from "./components/ClientReviews"
import Hero from "./components/Hero"
import Packages from "./components/Packages"
import Services from "./components/Services"

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