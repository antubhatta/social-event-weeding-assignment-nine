import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import Footer from "./Footer";



const Home = () => {
    const services=useLoaderData()
    return (
        <div>

            <Banner></Banner>
            <h3 className="container mx-auto text-center text-5xl font-bold mt-20 mb-6">Our Services</h3>
            <div className="container mx-auto grid grid-cols-1 mb-14 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
                {
                    services.map((service)=><ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;