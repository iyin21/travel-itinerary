import HeroSection from "./components/HeroSection"
import Flights from "./components/Flights"
import Hotels from "./components/Hotels"
import Activities from "./components/Activities"
import { Layout } from "@components/index"

const LandingPage = () => {
    return (
        <Layout>
            <HeroSection />
            <Flights />
            <Hotels />
            <Activities />
        </Layout>
    )
}
export default LandingPage
