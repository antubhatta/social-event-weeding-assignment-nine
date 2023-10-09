import images from '../../assets/pic12-free-img (1).png'
const Wedding = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            
                <img className='mt-12' src={images} alt="" />
            
            <div className='flex flex-col items-center justify-center'>
                <h3 className= 'text-base font-medium md:text-2xl mb-2'>Our Exclusive</h3>
                <h3 className='text-4xl font-bold mb-3'>Wedding Management</h3>
                <p className='text-base '>At Social event wedding, we specialize in creating unforgettable weddings that reflect your unique love story. Our expert team handles every detail, from personalized design to flawless execution, ensuring your special day is truly exceptional. Experience the wedding of your dreams with us.</p>
                <button className='mt-7 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-4 rounded'>Read More</button>
            </div>
        </div>
    );
};

export default Wedding;