

const Work = ({work}) => {
    const {img}=work;
    return (
       <div className="w-full">
         <div data-aos="fade-left" className="flex w-[300px] mx-auto px-6 lg:px-0 lg:w-full justify-center mt-7 items-center">
            <img className="h-[300px]" src={img} alt="" />
        </div>
        
       </div>
    );
};

export default Work;