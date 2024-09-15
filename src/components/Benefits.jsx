import React from 'react';
import unionIcon from '../../src/assets/benefits-img.png';

const Benefits = () => {
    return (
        <div
            className="flex flex-col lg:flex-row items-center p-8 text-white"
            style={{
                background: '#0C0C20',
            }}
        >
            <div className="flex-1 lg:w-1/2 lg:mr-6 flex justify-center items-center">
                <img
                    src={unionIcon}
                    alt="Union"
                    className="w-3/4 h-auto max-w-xs"
                />
            </div>
            <div className="flex-1 p-6 lg:p-12">
                <div className="mb-6">
                    <p className="text-2xl font-bold mb-2">
                        Everything you can do in a physical classroom, you can do with EASYED
                    </p>
                    <div className="h-1 w-16 bg-blue-500 rounded"></div>
                </div>
                <div className="flex items-start">
                    <p className="text-gray-300">
                        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                        tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu
                        ad litora torquent per conubia nostra, per inceptos himenaeos..
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
