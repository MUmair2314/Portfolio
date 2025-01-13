'use client'
import React from 'react'

import Typewriter from 'typewriter-effect';
import { MdHtml } from "react-icons/md";
import { MdOutlineCss } from "react-icons/md";
import { MdJavascript } from "react-icons/md"
import { TbBrandTypescript } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { TbBrandNextjs } from "react-icons/tb";
export default function Home(){
    return(
        <main>
            <title> M Umair Port folio</title>
            {/*Header Section*/}

            {/*Nav Bar Include Some Pages And Social Urls*/}
           
<header className=" text-gray-600 body-font   ">
<div className="bg-gray-100">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">M Umair Port folio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center  text-base justify-center">
      <a className="inline-flex items-center py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href='#home'>Home </a>
      <a className="inline-flex items-center  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href='#aboutus'>About us</a>
      <a className="inline-flex items-center py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href='#services'>Services</a>
      <a className="inline-flex items-center  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href='#contactus'>Contact us</a>
    </nav>
    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">
     Download Resume <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
  </div>
</header>


{/*Hero Section*/}
<section id='home' className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-600"> 
      <Typewriter
  options={{
    strings: ['Hello', 'Im Umair'],
    autoStart: true,
    loop: true,
  }}
/>
   </h1> <br /> <br />
      <p className=" text-gray-600"> 
         Expert Web Developer | Building Innovative Digital Solutions'
      </p>

      
    
      <div className='container px-3 py-6 mx-auto flex flex-wrap flex justify-center items-center space-x-2
text-2x1'>
    
           <button className="bg-gray-100 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <img  className="w-15 h-10"src="Image/Github.png" alt="" />
            
           </button>
     
           <button className="bg-gray-100 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <img  className="w-15 h-10"src="Image/Facebook.png" alt="" />
             
           </button>
     
           <button className="bg-gray-100 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <img  className="w-15 h-10"src="Image/Instagram.png" alt="" />
             
           </button>
     
           <button className="bg-gray-100 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <img  className="w-15 h-10"src="Image/Linkedin.png" alt="" />
             
           </button>
          
           </div>
          </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-right rounded" alt="hero" src="Image/Photo.png" height={50}/>
    </div>
  </div>
</section>

{/*aboutus*/}
<section id='aboutus'>
<h1 className='text-4xl font-black px-2 py-8  title-font text-black text-center tracking-widest uppercase'> About us</h1> 
<br />

<div className='container bg-gray-100 px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center '>
  
<p>
Hello, I'm Umair, a passionate and detail-oriented web developer <br />
 with expertise in crafting innovative digital solutions. <br />
 With a strong foundation in HTML, CSS, JavaScript, and Next.js, <br /> 
 I deliver responsive, scalable, and secure web <br />
  My passion lies in building user-friendly interfaces and seamless user experiences. <br />
 I'm committed to staying up-to-date with industry trends and best <br />
  Let's bring your vision to life
</p>


</div>
<br /> <br /> <br /> 

<div className='container px-4 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6
text-2x1'>  

<h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-Black-600" >
<Typewriter
  options={{
    strings: ['Im Expertise in:'],
    autoStart: true,
    loop: true,
  }}
/></h1>
<div className='flex flex-col rounded-lg  items-center bg-gray-100 hover:bg-gray-200 border-black p-4 transition-transform 
duration-300 ease-in-out transform hover:scale-110'>
<MdHtml className='text-silver-500 text-6xl' />

</div>



<div className='flex flex-col rounded-lg items-center bg-gray-100 hover:bg-gray-200 border-black p-4 transition-transform 
duration-300 ease-in-out transform hover:scale-110'>
<MdOutlineCss  className='text-silver-500 text-6xl' />

</div>



<div className='flex flex-col rounded-lg  items-center bg-gray-100 hover:bg-gray-200 border-black p-4 transition-transform 
duration-300 ease-in-out transform hover:scale-110'>
<MdJavascript className='text-silver-500 text-6xl' />

</div>



<div className='flex flex-col rounded-lg  items-center bg-gray-100 hover:bg-gray-200 border-black p-4 transition-transform 
duration-300 ease-in-out transform hover:scale-110'>
<TbBrandTypescript className='text-silver-500 text-6xl' />
 </div>

<div className='flex flex-col rounded-lg  items-center bg-gray-100 hover:bg-gray-200 border-black p-4 transition-transform 
duration-300 ease-in-out transform  '>
<TbBrandNextjs className='text-silver-500 text-6xl' />

</div>
</div>


<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

 <div className='bg-gray-100 hover:bg-white  border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4 hover:scale-110'>
  <div className='min-h-[100px]'>
 <img src="image/blog1.jpg"
 alt="Artificial Intelligence"
 className='w-full rounded-lg' />
  


  <div className='p-b text-center'>
  <h3 className='text-xl font-black ' >Artificial Intelligence </h3>
  
  <p  className=' mt-3 text-grey-500 leading-relaxed'>Exploring Artificial Intelligence in 2024 </p>
  <button className='mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-zinc-800 hover:bg-zinc-900'>
   <link href="src\pages\blog1.tsx"/>
    Read More  </button>
    </div>

   
    </div>
  </div>
  <div className='bg-gray-100 hover:bg-white border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4 hover:scale-110'>
  <div className='min-h-[245px]'>
   <img src="image/blog2.jpg"
   alt="it "
   className='w-full rounded-lg' />
  


   <div className='p-b text-center'>
   <h3 className='text-xl font-black'>The Coding Corner </h3>
   <p  className=' mt-3 text-grey-500 leading-relaxed'>Exploring Coding Languages in 2024 </p>
    <button className='mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-zinc-800 hover:bg-zinc-900'>
    <link rel="stylesheet" href="" /> 
    Read More </button>
    </div>

   
    </div>
  </div>

  <div className='bg-gray-100 hover:bg-white  border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4 hover:scale-110'>
  <div className='min-h-[245px]'>
 <img src="image/blog3.jpg"
 alt="it "
 className='w-full rounded-lg' />
  


  <div className='p-b text-center'>
  <h3 className='text-xl font-black'>Mataverse</h3>
  <p  className=' mt-3 text-grey-500 leading-relaxed'>Exploring Mataverse in 2024 </p>
  <button className='mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-zinc-800 hover:bg-zinc-900'>
    <link rel="stylesheet" href="" /> 
    Read More </button>
    </div>

   
    </div>
  </div>
  </nav>
  
 </section>




{/*Feature Section*/}


<section id='services' className="text-gray-600 body-font">
  <div className="container px-4 py-24 mx-auto ">
    <div className="text-center mb-20">
    <h1 className='text-4xl font-black title-font text-black text-center tracking-widest uppercase'> Services</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"> Professional Services Tailored To Your Needs</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Front-end Development</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Back-end Development</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Full-stack Development</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Responsive Web Design</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Api Integration</span>
        </div>
      </div>
    
    </div>
    </div> 
   
   {/*Contact Section*/}
   <section id='contactus' className="text-gray-600 body-font relative">
  <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please fill this form If you have any querries,complain message for us </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
         <div className="p-2 w-full">
          <button className="flex mx-auto text-black bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded text-lg">Submit</button>
        </div>
        <div className="p-2 w-full pt-4 mt-4 border-t border-gray-200 text-center">
          <button className="bg-white-100 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none" >
            
             <img  className="w-15 h-10"src="Image/images.png" alt=""  />
            M Umair
            <a  href="muhammadumairparyo@gmail.com"></a>
            
           </button>
     
        
         
          <p></p> <br />

          
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
</section>

    


</section>




<footer className="text-gray-600 body-font">
 
  <div className="bg-gray-200">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 M Umair
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"></a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>


</footer>

</main>
    )
}
