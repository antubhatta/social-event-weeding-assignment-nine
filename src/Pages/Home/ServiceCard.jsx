import { Link } from "react-router-dom";


const ServiceCard = ({services}) => {
    const {id,title,img,price,description}=services
    return (
        <div data-aos="fade-up" className="shadow-xl rounded-lg flex flex-col">
            <div>
                <img className="h-[220px] p-6 w-full rounded-lg " src={img} alt="" />
            </div>
            <h3 className="mt-3 pl-6 font-bold text-2xl text-[#49516F]">{title}</h3>
            <p className="pl-6 text-base font-normal text-[#49516F] mt-3">{price}</p>
            <p className="pl-6 flex-grow pr-6 mt-3 text-base font-normal text-[#49516F]">{description}</p>
            <div className="pl-6">
            <Link to={`/service/${id}`}><button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 text-white hover:to-green-600 px-5 py-3 rounded-lg mt-3 mb-5">See Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;