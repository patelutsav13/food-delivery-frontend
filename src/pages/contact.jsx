// import React from "react";
// import Footer from "./Footer";
// import CommonBanner from "./CommonBanner";
// function Contact()
// {
//     return(
//         <>
//             <div className="mt-80">
//                 <CommonBanner title="Contact"/>
//                 <Footer/>
//             </div>
//         </>
//     )
// }
// export default Contact;


import React from "react";
import Footer from "./Footer";
import CommonBanner from "./CommonBanner";

function Contact() {
    return (
        <div className="w-full">
            <div className="mt-24 lg:mt-80">
                <CommonBanner title="Contact" />
            </div>
            {/* You can add a Contact Form here similarly to Admin.jsx */}
            <div className="py-40 text-center">
                <h2 className="text-5xl md:text-8xl font-bold text-blue-950">Get In Touch</h2>
                <p className="text-2xl md:text-4xl text-gray-500 mt-10"> Ahmedabad, Gujarat, India</p>
            </div>
            <Footer />
        </div>
    )
}
export default Contact;