import React from 'react';
import Footer from '../component/Footer';
import Title from '../component/Title';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
      
      {/* Page Content */}
      <div className="flex-grow pt-[80px] w-full flex flex-col items-center px-4">
        <br></br>
        <Title text1="CONTACT" text2="US" />

        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-10 my-[50px]">
          
          {/* Contact Form */}
          <div className="lg:w-[60%] w-full">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-[#ffffff0a] border border-gray-600 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-[#ffffff0a] border border-gray-600 text-white"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-3 rounded bg-[#ffffff0a] border border-gray-600 text-white"
              />
              <button
                type="submit"
                className="bg-[#00d6e3] text-black font-semibold py-2 px-6 rounded hover:bg-[#00b6c4] w-fit"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-[35%] w-full flex flex-col gap-4">
            <p><strong>Email:</strong> support@onecart.com</p>
            <p><strong>Phone:</strong> +91 80929 23039</p>
            <p><strong>Address:</strong> 123 Market Street, Kolkata, India</p>
          </div>
        </div>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      {/* Footer appears at bottom only if content height exceeds screen */}
      <Footer />
    </div>
  );
}

export default Contact;
