import React from 'react';

const Location = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">

            <img
                src="https://i.ibb.co/S6dS0Gw/relief-connect-logo-removebg-preview.png"
                alt="Logo"
                className="w-16 h-16 absolute top-4 left-4"
            />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 absolute top-4 right-4 cursor-pointer"
            >
                <path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
            </svg>


            <div className="grid grid-cols-3 gap-4 mt-12">

                <div className="relative bg-gray-700 text-center p-4 rounded-lg">
                    <div className="absolute top-2 left-2 cursor-pointer">
                        {/* Map Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                    </div>
                    <img
                        src="Location_1_Image_URL"  // Replace with the URL of your location image
                        alt="Location 1"
                        className="w-16 h-16 mx-auto mt-6"
                    />
                    <p className="mt-2">kerela</p>
                </div>

                {/* Location Square 2 */}
                <div className="relative bg-gray-700 text-center p-4 rounded-lg">
                    <div className="absolute top-2 left-2 cursor-pointer">
                        {/* Map Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                    </div>
                    <img
                        src="Location_2_Image_URL"  // Replace with the URL of your location image
                        alt="Location 2"
                        className="w-16 h-16 mx-auto mt-6"
                    />
                    <p className="mt-2">Wese Bengal</p>
                </div>


                {/* Location Square 3 */}
                <div className="relative bg-gray-700 text-center p-4 rounded-lg">
                    <div className="absolute top-2 left-2 cursor-pointer">
                        {/* Map Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                    </div>
                    <img
                        src="Location_3_Image_URL"  // Replace with the URL of your location image
                        alt="Location 3"
                        className="w-16 h-16 mx-auto mt-6"
                    />
                    <p className="mt-2">Orissa</p>
                </div>
                {/* Location Square 4 */}
                <div className="relative bg-gray-700 text-center p-4 rounded-lg">
                    <div className="absolute top-2 left-2 cursor-pointer">
                        {/* Map Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                    </div>
                    <img
                        src="Location_4_Image_URL" 
                        alt="Location 4"
                        className="w-16 h-16 mx-auto mt-6"
                    />
                    <p className="mt-2">Andhra Pradesh</p>
                </div>
                {/* Location Square 5 */}
                
                <div className="relative bg-gray-700 text-center p-4 rounded-lg">
                    <div className="absolute top-2 left-2 cursor-pointer">
                        {/* Map Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                    </div>
                    <img
                        src="Location_5_Image_URL"  // Replace with the URL of your location image
                        alt="Location 5"
                        className="w-16 h-16 mx-auto mt-6"
                    />
                    <p className="mt-2">Gujrat</p>
                </div>
                {/* Location Square 6 */}
                <div className="relative bg-gray-700 text-center p-4 rounded-lg">
                    <div className="absolute top-2 left-2 cursor-pointer">
                        {/* Map Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                    </div>
                    <img
                        src="Location_6_Image_URL"  // Replace with the URL of your location image
                        alt="Location 6"
                        className="w-16 h-16 mx-auto mt-6"
                    />
                    <p className="mt-2">Assam</p>
                </div>

            </div>
        </div>
    );
};

export default Location;
