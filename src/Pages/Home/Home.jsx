import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";



const Home = () => {
    const services=useLoaderData()
    return (
        <div>

            <h3 className="text-3xl">This is a home page</h3>
            <Banner></Banner>
            <h3 className="container mx-auto text-center text-3xl font-bold mt-6 mb-6">Our Services</h3>
            <div className="container mx-auto grid grid-cols-1 mb-14 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
                {
                    services.map((service)=><ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;