import React from 'react';
import backgroundImage from '../../src/assets/background.png';

function Contact() {
    return (
        <div className="contact py-12 px-6 bg-[#0C0C20] relative">
            <div className="relative bg-[#0C0C20]">
                <div className="relative bg-[#0C0C20] p-8 rounded-lg">
                    <div className="relative bg-white rounded-lg overflow-hidden">
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-[#0C0C20] bg-opacity-50 flex flex-col justify-center items-center p-8 text-center">
                            <p className="text-2xl font-bold text-white mb-4">Let’s Discuss the idea!</p>
                            <p className="text-white mb-8">
                                Lorem Ipsum is simply dummy text of the printing.
                            </p>
                            <div className="flex flex-col space-y-4 w-full max-w-md">
                                <label className="text-white">Email Address</label>
                                <input
                                    type="email"
                                    className="p-2 rounded border border-gray-300 text-black w-full"
                                    placeholder="Enter your email"
                                />
                                <button className="bg-blue-500 text-white p-2 rounded w-full">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
