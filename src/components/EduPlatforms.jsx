import React from 'react';

function EduPlatforms() {
    return (
        <div className="bg-[#0C0C20] text-white py-12 px-6 lg:px-16">
            <h2 className="text-3xl font-bold mb-8 text-center">All-in-one Education Platform</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="bg-[#162352] rounded-lg p-6 flex flex-col items-start">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">For Students</h3>
                        <p className="text-gray-300">
                            Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices
                        </p>
                    </div>
                </div>
                <div className="bg-[#162352] rounded-lg p-6 flex flex-col items-start">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">For Teachers</h3>
                        <p className="text-gray-300">
                            Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices
                        </p>
                    </div>
                </div>
                <div className="bg-[#162352] rounded-lg p-6 flex flex-col items-start">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">For Communities</h3>
                        <p className="text-gray-300">
                            Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EduPlatforms;
