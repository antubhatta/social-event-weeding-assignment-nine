import { Link, useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {
    const data=useLoaderData()
    const { services} = data;
    const {id}=useParams();
    
   const detailService=services?.find(services=>services.id===id)
  
   
    return (
        <div className="container mx-auto">
           
           <h3 className="text-4xl font-bold mt-10 mb-4">{detailService.title}</h3>
           <img className="rounded-lg h-auto w-full mb-4" src={detailService.img} alt="" />
           <p className="text-base text-[#1C1B1B99] font-normal mb-4">{detailService.desc}</p>
           <Link to="/"><button className="bg-gradient-to-r mb-12 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-6 rounded">Home</button></Link>
        </div>
    );
};

export default ServiceDetails;