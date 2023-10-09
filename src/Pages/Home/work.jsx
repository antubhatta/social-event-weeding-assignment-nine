

const Work = ({work}) => {
    const {img}=work;
    return (
       <div>
         <div data-aos="fade-left" className="flex justify-center mt-7 items-center">
            <img className="h-[300px] w-full" src={img} alt="" />
        </div>
        
       </div>
    );
};

export default Work;