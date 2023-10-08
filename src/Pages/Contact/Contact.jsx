import { FaFacebook, FaTwitter,FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
        <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-pink-700">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">We love to hear from you!</p>
        </div>
        <section className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-20">
                        <div>
                        <h3 className="text-2xl font-semibold">Contact Us</h3>
                        <p className="text-base mb-2 mt-3">Email: contact@info.com</p>
                        <p className="text-base">Phone: 01383483829</p>
                        </div>
                        <div>
                        <h3 className="text-2xl font-semibold">Our Office</h3>
                        <p className="text-base mt-3">1137, Nurerchala, Vatara, Ghulsan 1212</p>
                        </div>
                        <div>
                        <h3 className="text-2xl font-semibold">Social Media</h3>
                        <div className='flex gap-3 mt-3 text-lg'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaGithub></FaGithub>
                            <FaInstagram></FaInstagram>
                        </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us a Message</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-800">Name</label>
                                <input type="text" id="name" name="name" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-600" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-800">Email</label>
                                <input type="email" id="email" name="email" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-600" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-800">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-600"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
      </div>
    );
};

export default Contact;