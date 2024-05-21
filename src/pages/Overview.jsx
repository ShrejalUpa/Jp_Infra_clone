import React from 'react'
import Layout from '../componenst/Layout'
import Banner from '../Images/overview/banner.jpg'
import about from '../Images/overview/About.jpg'
import about2 from '../Images/overview/abou2.jpg'
import Vijay from '../Images/overview/Vijay.jpg'
import Shubham from '../Images/overview/Shubham.jpg'
import concreteImage from '../Images/overview/concreteImage.jpg'
import Achievements from '../componenst/overview/Achievements'
const Overview = () => {
  return (
    <Layout>
         <div className="mb-4">
        <img src={Banner} alt="Banner" className="w-full h-full object-cover" />
      </div>

    <div className="px-6 py-4">
    <hr className="w-20 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:w-40 md:my-5 dark:bg-gray-400" />
    <h2 className="text-3xl md:text-4xl mb-10 font-bold text-blue-900 text-center">
        About JP Infra
    </h2>
</div>



      <div className="md:flex md:flex-row">
        <div className="w-full md:w-1/2 px-8 pt-2">
          <h2 className="text-blue-900 md:text-3xl text-2xl font-bold mb-6">
            JP Infra signifies the perfect combination of dynamism and growth.
          </h2>
          <p>
            With strong leadership at the helm, the business has set a strong
            vision and an ambitious growth path for itself. Founded in 2006, JP
            Infra has carved a niche for itself in terms of project delivery,
            with most projects being referred to as landmarks; few even as
            benchmarks. JP Infra believes in bringing serenity back to the
            bustling and busy nature of the city of Mumbai. The brand offers a
            calm, peaceful lifestyle to its residents with the provision of lush
            green spaces. That doesn’t take away from the futuristic and
            progressive technology employed in the working of the projects or
            the state-of-the-art amenities available to home buyers and
            residents. Thanks to its ultra-modern thinking and approach, JP
            Infra has been rewarded with most prestigious awards in the recent
            times, all of which will tie back in with the concept of providing
            international standards of modern living.
          </p>
        </div>
        <div className="px-8 pt-2 m-8 relative w-full md:w-1/2 flex flex-row">
          <img
            src={about}
            alt="First Image"
            className="object-cover w-1/2 h-auto md:h-1/2 md:w-1/2"
          />
          {/* <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-2xl">Actual Image</p>
          </div>  */}
          <img
            src={about2}
            alt="Second Image"
            className="object-cover absolute w-1/2 h-auto md:h-1/2 md:w-1/2 md:top-20 md:left-40"
          />
          {/* <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-2xl">Actual Image</p>
          </div> */}
        </div>
      </div>
      <div className="px-6 py-4 pt-20">
        <hr className="w-20 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-5 md:w-40  dark:bg-gray-400" />
        <h2 className="md:text-4xl text-3xl mb-10 font-bold text-blue-900 text-center text-xxl">
          Our Leaders
        </h2>
      </div>

      <div className="w-full md:w-1/2 p-4 px-3 py-4 mt-10 md:ml-10 pt-10 border border-black m-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-3 ">
          <div className="w-full md:1/2 ">
            <img
              src={Vijay}
              alt="MR.-Vijay-Jain"
              className="w-full h-auto m-4"
            />
          </div>
          <div className="w-full md:1/2 ">
            <p className="text-xl md:ml-5 text-blue-800 font-bold mb-2">
              MR.-Vijay-Jain
            </p>
            <p className="mb-2 md:ml-5 text-blue-600">Chairman</p>
            <p className="text-gray-700 md:ml-5">
              Mr. Vijay Jain is a proud first-generation entrepreneur who has
              led from the front to allow JP Infra to grow into the formidable
              force in Mumbai's real estate space that it is today. His
              easy-going nature, strong networking skills, and pleasant approach
              allow him to provide a relatable human face to the brand.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 px-6 py-4 mt-10 md:ml-10 pt-10 border border-black m-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-3">
          <div className="w-full md:1/2">
            <img
              src={Shubham}
              alt="MR.-Vijay-Jain"
              className="w-full h-auto mb-4"
            />
          </div>
          <div className="w-full md:1/2">
            <p className="text-xl font-bold md:ml-5 text-blue-800 mb-2">
            Mr. Shubham Jain
            </p>
            <p className="mb-2 md:ml-5 text-blue-600">Managing Director</p>
            <p className="text-gray-700 md:ml-5">
              Mr. Shubham Jain is highly influential for the dynamism and modern
              thinking that the brand is growing with. Thanks to his sheer
              commitment and undeniable passion, Shubham was awarded the Young
              Achiever of the Year in 2015. With a futuristic approach in mind,
              Shubham leads the team to being a step ahead of the curve.
            </p>
          </div>
        </div>
      </div>

<div>
<hr className="w-40 h-1 mx-auto mt-5 bg-gray-200 border-0 rounded md:my-5 md:w-40  dark:bg-blue-800 " />
</div>
      <div
        className="h-screen relative mt-20 "
        style={{
          backgroundImage: `url(${concreteImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-10 flex items-center justify-center">
          <div className="text-center p-5">
            

            <h1 className="mt-10 md:text-4xl text-3xl mb-1 font-bold text-blue-900 text-center text-xxl">
              Our Redevelopment Projects
            </h1>
            <p className="w-full text-center items-center mt-20">
              JP Infra through its redeveloped projects have taken the first
              step towards sustainable living and maintaining ecological balance
              making the residents proud eco-warriors.
            </p>
            <button className="mt-10 bg-blue-900 text-white px-8 py-2 rounded hover:bg-blue-700">
              Know More <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <hr className="w-40 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-5 md:w-40  dark:bg-gray-400" />
        <h2 className="md:text-4xl text-3xl mb-10 font-bold text-blue-900 text-center text-xxl">
          Achievements
        </h2>

        <div className="w-3/4 m-auto">
          <Achievements />
        </div>
      </div>

      <div className="text-center p-12 pt-20 m-0">
        <hr className="w-40 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-5 md:w-40  dark:bg-gray-400" />
        <h2 className="md:text-4xl text-4xl mb-10 font-bold text-blue-900 text-center text-xxl">
          Work With Us
        </h2>

        <p className="w-full text-center items-center">
          JP Infra is one of India’s most established real estate brands in the
          Mumbai suburban market. At JP Infra, we believe in team spirit and
          working together like one unit to build homes that provide you the
          lifestyle you dream of. Our motto is that inspired teams naturally
          provide excellent and dedicated customer service, which can be brought
          about by providing a healthy work environment.
        </p>
        <p className=" mt-10 ">
          Upload resumes at careers@jpinfra.com to join the team.
        </p>
        <button className="mt-10 bg-blue-900 text-white text-center py-4 px-4 rounded hover:bg-blue-700">
          CLICK TO <b>VIEW THE POSITIONS AVAILABLE</b>
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </Layout>
  )
}

export default Overview
