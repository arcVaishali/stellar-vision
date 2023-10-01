import React from 'react';

const Register = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#BAAC9A" }}>
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src="https://i.ibb.co/S6dS0Gw/relief-connect-logo-removebg-preview.png" alt="Logo" className="w-16 h-16" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800">Register with Us</h1>
                        <p className="text-gray-500">Fill in the details below:</p>
                    </div>
                </div>
                <form className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input w-full mt-2"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="place" className="block text-gray-700">Place</label>
                        <input
                            type="text"
                            id="place"
                            name="place"
                            className="form-input w-full mt-2"
                            placeholder="Your Place"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-gray-700">Contact No</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            className="form-input w-full mt-2"
                            placeholder="Your Contact No"
                        />
                    </div>
                
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
