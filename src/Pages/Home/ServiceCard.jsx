import { Link } from "react-router-dom";


const ServiceCard = ({services}) => {
    const {id,title,img,price,description}=services
    return (
        <div className="shadow-xl rounded-lg">
            <div>
                <img className="h-[220px] p-6 w-full rounded-lg " src={img} alt="" />
            </div>
            <h3 className="mt-3 pl-6 font-bold text-2xl text-[#49516F]">{title}</h3>
            <p className="pl-6 text-base font-normal text-[#49516F] mt-3">{price}</p>
            <p className="pl-6 pr-6 mt-3 text-base font-normal text-[#49516F]">{description}</p>
            <Link to={`/service/${id}`}><button className="text-base text-indigo-700 underline pl-6 mt-3 mb-5">See Details</button></Link>
        </div>
    );
};

export default ServiceCard;