import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {
    const service=useLoaderData()
    console.log(service)
    const {id}=useParams();
    
   const detailService=service?.find(services=>services.id===id)
   console.log(detailService)
   
   
    return (
        <div className="container mx-auto">
           
           <h3 className="text-4xl font-bold mt-10 mb-4">{detailService.title}</h3>
           <img className="rounded-lg h-auto w-full mb-4" src={detailService.img} alt="" />
           <p className="text-base text-[#1C1B1B99] font-normal mb-12">{detailService.desc}</p>
        </div>
    );
};

export default ServiceDetails;