import ClientReviews from "../../components/ClientReviews/ClientReviews"
import Packages from "../../components/Packages/Packages"
import Hero from "./components/Hero"
import ServicesStage from "./components/ServicesStage"
import WhyChooseUs from "./components/WhyChooseUs"

const Services = () => {
    return (
        <main>
            <Hero />
            <ServicesStage />
            <WhyChooseUs />
            <Packages />
            <ClientReviews />
        </main >
    )
}

export default Services