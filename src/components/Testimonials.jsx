import React from 'react';
import ellipse34 from '../../src/assets/ellipse-34-2.png';
import ellipse34Alt from '../../src/assets/ellipse-34.png';


function Testimonials() {
  return (
    <div className="testimonials bg-[#0C0C20] py-12 px-6 text-white">
      <div className="text-center text-2xl font-bold mb-8">What students say</div>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Testimonial 1 */}
        <div className="testimonial bg-gray-800 p-6 rounded-lg flex items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="flex-1">
            <div className="text-xl font-bold">Finlay Kirk</div>
            <p className="mt-2 text-gray-400">
              “Teachings of the great explorer of truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, pleasure itself”
            </p>
            <div className="mt-2 text-gray-400">Web Developer</div>
          </div>
          <img className="w-24 h-24 rounded-full border-2 border-gray-600 ml-6" src={ellipse34} alt="Finlay Kirk" />
        </div>
        {/* Testimonial 2 */}
        <div className="testimonial bg-gray-800 p-6 rounded-lg flex items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="flex-1">
            <div className="text-xl font-bold">Dannette P. Cervantes</div>
            <p className="mt-2 text-gray-400">
              “Complete account of the system and
              <br />
              expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”
            </p>
            <div className="mt-2 text-gray-400">Web Developer</div>
          </div>
          <img className="w-24 h-24 rounded-full border-2 border-gray-600 ml-6" src={ellipse34Alt} alt="Dannette P. Cervantes" />
        </div>
        {/* Testimonial 3 */}
        <div className="testimonial bg-gray-800 p-6 rounded-lg flex items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="flex-1">
            <div className="text-xl font-bold">Clara R. Altman</div>
            <p className="mt-2 text-gray-400">
              “There are many variations of passages
              <br /> of Lorem Ipsum available, but the majority
              <br /> have suffered alteration in some form,
              <br /> by injected humour”
            </p>
            <div className="mt-2 text-gray-400">UI & UX Design</div>
          </div>
          <img className="w-24 h-24 rounded-full border-2 border-gray-600 ml-6" src={ellipse34Alt } alt="Clara R. Altman" />
        </div>
      </div>
      <p className="mt-12 text-center text-gray-400">Lorem Ipsum is simply dummy text of the printing.</p>
    </div>
  );
}

export default Testimonials;
