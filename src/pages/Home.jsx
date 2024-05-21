import { useEffect, useRef } from "react";
import video from "../Images/video/home.mp4";
import { CgArrowLongRight } from "react-icons/cg";
import Layout from "../componenst/Layout";
import homeimg from '../Images/home.jpg'
const Home = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <Layout>
      <div className="w-full bg-white">
        <video ref={videoRef} className="w-full rounded-md" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="p-6 bg-gray-200 h-auto w-full">
        <div className="flex flex-col items-center justify-center">
          <hr className="h-[0.20rem] w-24 bg-slate-500" />
          <h1 className="mt-6 text-3xl">BUILDING RESPONSIBLY</h1>
          <h1 className=" text-sky-800 text-2xl lg:text-6xl font-bold mt-2">
            Pushing Boundaries
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center p-5 mt-9 gap-7">
          <div>
            <div className="relative">
              <img
                src="https://www.jpinfra.com/img/home/pushingB/Pushing-Boundaries-Imade-01.jpg"
                alt="Design"
                className="h-[40vh] contrast-50"
              />
              <h1 className="absolute bottom-0 left-0 right-0 ml-4 text-white text-xs">
                Rendered Image
              </h1>
            </div>
            <h1 className="text-center text-lg font-bold p-5 text-sky-800">
              Design Innovation
            </h1>
          </div>
          <div>
            <div className="relative">
              <img
                src="https://www.jpinfra.com/img/home/pushingB/Pushing-Boundaries-Imade-02.jpg"
                alt="Design"
                className="h-[40vh] contrast-50"
              />
              <h1 className="absolute bottom-0 left-0 right-0 ml-4 text-white text-xs">
                Rendered Image
              </h1>
            </div>
            <h1 className="text-center text-lg font-bold p-5 text-sky-800">
              Integrated Living
            </h1>
          </div>
          <div>
            <div className="relative">
              <img
                src="https://www.jpinfra.com/img/home/pushingB/Pushing-Boundaries-Imade-03.jpg"
                alt="Design"
                className="h-[40vh] contrast-50"
              />
              <h1 className="absolute bottom-0 left-0 right-0 ml-4 text-white text-xs">
                Representative Image
              </h1>
            </div>
            <h1 className="text-center text-lg font-bold p-5 text-sky-800">
              Because We Care
            </h1>
          </div>
          <div>
            <div className="relative">
              <img
                src="https://www.jpinfra.com/img/home/pushingB/Pushing-Boundaries-Imade-04.jpg"
                alt="Design"
                className="h-[40vh] contrast-50"
              />
              <h1 className="absolute bottom-0 left-0 right-0 ml-4 text-white text-xs">
                Representative Image
              </h1>
            </div>
            <h1 className="text-center text-lg font-bold p-5 text-sky-800">
              Our Carbon Footprint
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <button className="text-center flex items-center justify-center text-lg  border-2 border-current font-bold py-2 px-5 text-sky-800">
            Know More
            <CgArrowLongRight className="m-3 w-4 text-sky-600" />
          </button>
        </div>
      </div>

      <div className="p-6 bg-gray-200 w-full">
        <div className="flex flex-col items-center justify-center">
          <hr className="h-[0.20rem] w-24 bg-slate-500" />
          <h1 className="mt-6 text-3xl">AT OUR VISUAL BEST</h1>
          <h1 className=" text-sky-800 text-2xl lg:text-6xl font-bold mt-2">
            About JP Infra
          </h1>
        </div>
      </div>
      <div className="pb-[40rem]">
        <img
          src={homeimg}
          alt="North"
          className="absolute contrast-50"
        />
        <div className="flex flex-col w-full lg:w-[40%] lg:float-right p-10">
          <h1 className="text-right text-white text-3xl lg:text-4xl relative font-bold">
            North - A Lifestyle
          </h1>
          <h2 className="text-right text-white text-xl relative py-4">
            Transforming Mira Road
          </h2>
          <p className="text-right text-white text-lg relative">
            Due to the growing need for individual housing, North Mumbai has
            gone through rapid development over the last decade. Community
            living with access to world-class amenities have become the norm in
            North Mumbai housing projects. The aspiring Mumbaikar welcomes the
            sizeable emergence of affordable housing with international
            standards of living.
          </p>
          <span className="relative mt-2 lg:mt-40 lg:w-[45%] flex items-center  text-lg  border-2 border-current font-bold  py-2 px-5 text-white">
            Know More
            <CgArrowLongRight className="w-4 ml-4 text-white" />
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
