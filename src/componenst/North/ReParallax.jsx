import React from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../Images/north/bg.jpg'
const ReParallax = () => {
  return (
    <div className="relative">
      <Parallax bgImage={bg} strength={500} bgImageStyle={{objectFit: 'cover', width: '100%', height: '100%'}}>
        <div className="h-screen flex items-center justify-center text-white">
          {/* Content here */}
        <p className='px-[4.5rem]'>North Mumbai has emerged as the aspirational location for all property investment in Mumbai. JP Infra has played a major role in building an international standard of living within the upcoming hub of Mira Road. Offering the best-in-class amenities, lush green surroundings and a peaceful serene nature, JP North is an epitome of ideal living in a busy suburban city like Mumbai. Mira - Bhayander Rising, an initiative by JP Infra, is a fine example of the community living that has been built and encouraged by the team of JP Infra.</p>
        </div>
      </Parallax>
    </div>
  );
};

export default ReParallax;
