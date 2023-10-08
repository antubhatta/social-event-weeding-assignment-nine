import banner from "../../assets/pexels-pixabay-59948.jpg"
import queen from "../../assets/pic10-free-img.png"
const Banner = () => {
    return (
        <div className="static md:relative md:h-[90vh] ">
            <img className="h-full object-cover w-full" src={banner} alt="" />
            <div className="md:absolute top-0 left-0 w-full h-full">
                <div className=" absolute inset-0 bg-black h-full opacity-50"></div>
                    <div className="flex absolute z-10 inset-0 flex-col items-center justify-center ">
                            <img src={queen} alt="" />
                            <h3 className="text-2xl mt-3 text-white font-medium">Countries Best Luxury</h3>
                            <h3 className="text-8xl mt-3 font-bold text-white">WEDDING</h3>
                            <p className="text-2xl text-white mt-3 font-medium">Planners & Event Organizers!</p>
                    </div>
                    </div>
                
            

        </div>
    );
};

export default Banner;