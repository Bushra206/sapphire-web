import React  from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
    let FooterData={
        ContactUs:{
            address:"Sapphire Retail Head Office  1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road, Opposite University of Lahore, Lahore.",
            email:'wecare@sapphireonline.pk',
            phone:'+92(0)42 111-738-245'
        },
        CustomerCare:['Exchange &amp; Return Policy','FAQs','Contact Us' ],
        Information:['About Us','Privacy Policy','SafePay Guide','Payments','Store Locator','Fabric Glossy','Blogs'],
        NewsletterSignup:['Subscribe to our Newsletter for Exclusive Updates']

}
useEffect(() => {
    window.addEventListener("load", () => {
      AOS.init({
        //   disable: "phone",
        offset: 70,
        duration: 700,
        delay: 100,
        //   easing: "ease-out-cubic",
      });
    });
  }, []);

  return (
<div className='flex flex-col w-full'>
    <div className="upper-footer bg-[#F6F6F8] flex  justify-between px-[10px] lg:px-[20px] xl:px-[90px] py-[20px] w-full " data-aos="fade-up">

<div className='flex flex-col gap-3 flex-grow max-w-[300px]' >
        <h3 className='text-sm font-semibold capitalize'>{Object.keys(FooterData)[0]}</h3>
         <div className='customer-care-list flex flex-col gap-4 text-[10px] leading-5'>
             <div className='flex gap-1 '>
                   <IoLocationOutline className='text-center'/>
                   <p>Sapphire Retail Head Office <br /> 1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road, Opposite University of Lahore, Lahore.</p>
             </div>
             <div className='flex gap-1 items-center'>
                   <HiOutlineMail />
                   <a href="">wecare@sapphireonline.pk</a>
             </div>
             <div className='flex gap-1 items-center'>
                   <MdPhone />
                   <p>+92(0)42 111-738-245</p>
             </div>

         </div>
</div>
<div className='flex flex-col gap-3  flex-grow'>
        <h3 className='text-sm font-semibold capitalize'>{Object.keys(FooterData)[1]}</h3>
         <div className='customer-care-list flex flex-col gap-2 text-[10px] leading-5'>
         {FooterData.CustomerCare.map((e)=>{
                 return(
                     <div className='flex gap-1 '>
                     <a href="">{e}</a>
                 </div>
                 )
             })}

         </div>
</div>
<div className='flex flex-col gap-3 flex-grow  '>
        <h3 className='text-sm font-semibold capitalize'>{Object.keys(FooterData)[2]}</h3>
         <div className='customer-care-list flex flex-col gap-2 text-[10px] leading-5'>
             {FooterData.Information.map((e)=>{
                 return(
                     <div className='flex gap-1 '>
                     <a href="">{e}</a>
                 </div>
                 )
             })}


         </div>
 </div>
<div className='flex flex-col gap-3 flex-grow '>
        <h3 className='text-sm font-semibold capitalize'>{Object.keys(FooterData)[3]}</h3>
         <div className='customer-care-list flex flex-col gap-4 text-[10px] leading-5'>
             {FooterData.NewsletterSignup.map((e)=>{
                 return(
                     <div className='flex gap-1 '>
                     <a href="">{e}</a>
                 </div>
                 )
             })}
             <div className="flex gap-2">
             {/* <input type="text" className='py-3 px-2 border border-[#000] rounded-xl' placeholder='Your email address' />

             <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white py-1 px-2 rounded-xl">Subscribe</button> */}
             <input type="text" class="py-3 px-10 w-[300px] border border-black rounded-xl pl-2 pr-20" placeholder='Your email address' />
             <button class=" bg-black text-white py-[6px] px-4 rounded-xl">Subscribe</button>
             </div>

             <div className='flex gap-4'>
                 <a href="" className='text-lg'> <FaFacebookF /></a>
                 <a href="" className='text-lg'><FiInstagram /></a>
                 <a href="" className='text-lg'><FaYoutube /></a>

             </div>


         </div>
</div>

</div>


    <div className="lower-footer bg-[#FFFFFF] flex justify-between items-center py-4 px-[110px]" >
        <p className='text-[10px] text-[#878787]'>© COPYRIGHT 2024 SAPPHIRE</p>
        <img className="max-w-[600px]" src="src\assets\footer\logogs_80587d78-218a-43ff-92d2-3b65e39da5f6_1.jpg" alt="" />
    </div>
</div>
  )
}

export default Footer
