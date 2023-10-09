import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import Footer from "./Footer";
import Team from "./Team";
import Work from "./work";
import { useEffect } from "react";
import Aos from "aos";

import 'aos/dist/aos.css';
import Wedding from "./Wedding";


const Home = () => {
    const data =useLoaderData()

    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div>

            <Banner></Banner>
            <h3 className="container mx-auto text-center text-xl md:text-2xl lg:text-5xl font-bold mt-8 md:mt-12 lg:mt-20 mb-6">Our Services</h3>
            <div className="container mx-auto grid grid-cols-1 mb-8 md:mb-12 lg:mb-14 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
                {
                    data?.services?.map((service)=><ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>
            <div className="container mx-auto mb-8 md:mb-12 mt-4 overflow-x-hidden">
                <h3 className="text-xl md:text-2xl lg:text-4xl text-center font-bold">Our Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto">
                    {
                        data?.wedding_gallery.map(works=><Work key={works.id} work={works}></Work>)
                    }
                </div>
                <Wedding></Wedding>
            </div>
            <div className="container mx-auto shadow-xl ">
            <h3 className="text-xl md:text-2xl lg:text-4xl mb-6 pt-4 container mx-auto text-center font-bold">Our Team Members</h3>
            <p className="text-center px-4 text-sm mb-12">Our team members are eagerly looking forward to a joyous and memorable social event - a wedding! It is not just any wedding; it is a special occasion where one of our cherished colleagues is about to embark on a beautiful journey of love and commitment. The air is filled with excitement and anticipation as we prepare to celebrate this significant milestone in their life.This wedding is not only a celebration of love but also a testament to the strong bonds we share as a team. We have worked together, faced challenges, and supported each other through thick and thin.</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
            
                {
                    data?.team_members.map((team,idx)=><Team key={idx} teams={team}></Team>)
                }
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;