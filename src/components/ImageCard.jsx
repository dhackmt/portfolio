import {  ChevronUp } from 'lucide-react';
import { useContext, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import { usePageContext } from '../context/PageProvider';

const ImageCard=()=>{
const {isPageUp,setIsPageUp}=usePageContext();
return(
    <div className='relative w-screen h-screen '>
        <div className={`flex justify-center items-center min-h-screen flex-col transition-transform duration-900 ease-in-out ${isPageUp ? "-translate-y-full" : "translate-y-0"}`}>
    <div className="w-80 h-80 overflow-hidden ">
        <img src="public\portfolioImg.png" alt="portfolioImage" className="object-cover drop-shadow-3xl backdrop-blur-xl  w-full h-full"></img>
    </div>
            <div className="border-t-gray-500 relative w-screen pb-5 shadow-2xl flex flex-col gap-20 rounded-t-[70px] bg-white z-1 bottom-0">
                <div className=" font-roboto text-center relative top-10 flex flex-col gap-8">
                    <h1 className="text-3xl">Hello I'm</h1>
                <h1 className="text-4xl bg-gradient-to-r from-pink-500  to-purple-500 bg-clip-text text-transparent">
                    <TypeAnimation
                    sequence={["Drishti Jadhwani",1000,"Software Engineer",1000]}
                    wrapper='span'
                    speed={30}
                    repeat={Infinity}
                    /> 

                </h1>
                     <div className="p-6 text-center">
                        I'm a backend developer with a passion for building scalable, efficient systems using Node.js, TypeScript, and PostgreSQL. I’ve developed microservices, serverless apps on AWS, and real-time features for e-commerce platforms. I'm driven by clean architecture and enjoy turning complex requirements into simple, maintainable solutions.
                        </div>     
                    </div>   
    <div className='flex items-center justify-center'>
    <ChevronUp className='animate-bounce' onClick={()=>setIsPageUp(!isPageUp)}/>
    </div>                    
    </div>

        </div>
        <div className={`absolute top-0 cleft-0 w-full h-full transition-transform duration-700 ease-in-out ${isPageUp ? "translate-y-0" : "translate-y-full"}`}>
            <About />
        </div>
    </div>

)
}

export default ImageCard