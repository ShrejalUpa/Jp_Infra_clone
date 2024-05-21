import React from 'react'
import banner from '../Images/contact/banner.jpg'
import email from '../Images/contact/email.jpg'
import phone from '../Images/contact/call.jpg'
import fax from '../Images/contact/b.jpg'
import add from '../Images/contact/location.jpg'
import Layout from '../componenst/Layout'

const Contact = () => {
  return (
    <Layout>
      <div className="mb-4">
        <img src={banner} alt="banner" className="w-full h-full object-cover" />
      </div>

      <div className="px-3 py-8 pb-[6rem]">
        <hr className="w-20 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-5 md:w-40 dark:bg-gray-400" />
        <h2 className="md:text-4xl mb-20 font-bold text-blue-900 text-center text-3xl">
          Find Us Here
        </h2>

        <div className="md:flex md:flex-row">
          <div className="w-full md:w-1/2 px-3 pt-8">
            <div className="flex gap-4 mb-5">
              <img src={add} alt="add" className="w-[20px] h-[30px]" />
              <p>
                JP Infra Mumbai Pvt. Ltd. 4th Floor, Viraj Towers, Western Express
                Highway, Near WEH Metro Station, Andheri(E), Mumbai-400093
              </p>
            </div>

            <div className="flex gap-4 mb-5">
              <img src={email} alt="email" className="w-[30px]" />
              <p>sales@jpinfra.com</p>
            </div>
            <div className="flex gap-4 mb-5">
              <img src={phone} alt="phone" className="w-[30px]" />
              <p>022 42415678</p>
            </div>
            <div className="flex gap-4 mb-5">
              <img src={fax} alt="fax" className="w-[30px]" />
              <p>022 42415679</p>
            </div>
          </div>

          <div className="w-full md:w-1/2  px-3 pt-8 pb-10 shadow-xl">
            <form action="">
              <h1 className="text-2xl font-bold text-black flex justify-center lg:justify-end ">HAVE A QUESTION?</h1>
              <h3 className="mb-8">Ask Us Here</h3>
              <div className="">
              <input type="text" class="border border-gray-400 focus:border-blue-500 p-2 rounded block w-full text-gray-800 mb-4" placeholder="Name" />
              <input type="email" class="border border-gray-400 focus:border-blue-500 p-2 rounded block w-full text-gray-800 mb-4" placeholder="Email" />
              <div class="flex">
                <input type="tel" class="border border-gray-400 focus:border-blue-500 rounded p-2 bg-slate-200	 flex-shrink-0 w-20 text-black mb-4" value="+91" />
                <input type="tel" class="border border-gray-400 focus:border-blue-500 rounded p-2 flex-grow w-full text-gray-800 mb-4" placeholder="Phone" />
              </div>  
              <input class="border border-gray-400 focus:border-blue-500 p-2 block w-full rounded text-gray-800 mb-4" placeholder="Message"/>
              <input type="checkbox" class="form-checkbox h-4 w-5 text-indigo-600"/>
              <label class="ml-2  font-bold text-black pb-5">By clicking I give my consent to receive messages/email and updates to my number or email id</label>
              
              <button type="button" className="float-right bg-blue-900 mt-10 w-full  text-white font-bold py-2 px-20 shadow">SUBMIT</button>
              </div>            
            </form>
          </div>
        </div>

        <div className="relative w-full h-[100vh]">
          <iframe
          className="absolute inset-0 w-full h-full mt-20 pt-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7542714562355!2d72.85337840827134!3d19.118433050569266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82d9321e4a7%3A0x9e3705d14d40f385!2sJP%20Infra%20Mumbai%20Private%20Limited!5e0!3m2!1sen!2sin!4v1715798392108!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
