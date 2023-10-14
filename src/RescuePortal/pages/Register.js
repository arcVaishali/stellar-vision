import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-gradient-to-bl from-[#BAAC9A] to-white min-h-screen flex items-center justify-center md:p-0 p-3">
            <div className="shadow-md md:h-[450px] shadow-[#62553B] rounded-xl border-2 border-[#c7aa8b] bg-gradient-to-t from-[#2F2D29] to-[#47433D] transition ease-in-out delay-50 hover:-translate-y-2 duration-500 px-16 py-8" style={{ backgroundColor: "#BAAC9A" }}>
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src="https://i.ibb.co/S6dS0Gw/relief-connect-logo-removebg-preview.png" alt="Logo" className="w-24 h-16" />
                    </div>
                    <div>
                        <h1 className="md:text-3xl font-semibold text-gray-100 text-lg">Register with Us</h1>
                        <p className="text-gray-100">Fill in the details below:</p>
                    </div>
                </div>
                <form className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input w-full mt-2 p-2 outline-none  rounded-lg "
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="place" className="block text-gray-300">Place</label>
                        <input
                            type="text"
                            id="place"
                            name="place"
                            className="form-input w-full mt-2 p-2 outline-none rounded-lg "
                            placeholder="Your Place"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-gray-300 ">Contact No</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            className="form-input w-full mt-2 p-2 outline-none rounded-lg "
                            placeholder="Your Contact No"
                        />
                    </div>
                
                    <Link
                        to="/location"
                        type="submit"
                        className="border-2 border-[#c7aa8b] bg-[#c7aa8b] hover:bg-transparent hover:border-[#c7aa8b] hover:shadow-md hover:shadow-gray-500 hover:text-[#c7aa8b] text-center uppercase text-inherit px-2 py-1 rounded"
                    >
                        Submit
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
