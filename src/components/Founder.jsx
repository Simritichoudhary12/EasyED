import React from 'react';
import founderPic from '../../src/assets/founder-pic.png';

function Founder() {
    return (
        <div className="bg-[#0C0C20] p-8 flex items-center justify-between">
            <div className="text-white max-w-lg">
                <p className="text-lg mb-4">
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                    tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                    sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos..
                </p>
                <div>
                    <div className="text-2xl font-bold">Abhishek Ranjan</div>
                    <div className="text-lg">Founder EASYED</div>
                </div>
            </div>
            <img className="w-1/2 h-auto object-cover" alt="Founder pic" src={founderPic} />
        </div>
    );
}

export default Founder;
