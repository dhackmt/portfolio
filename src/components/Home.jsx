import { TypeAnimation } from 'react-type-animation';
import ProgrammingImage from "../assets/programming.png"
import { Github, InstagramIcon, Linkedin, LinkedinIcon, Mail, MailIcon } from 'lucide-react';
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

const Home=()=>{
    return(
        <div className="font-Raleway mt-14  md:mt-0">
        <div className="flex md:flex-row justify-around items-center gap-10 min-h-screen flex-col">
            <div className="  flex flex-col gap-8 md:w-[500px] w-full text-white px-4">
                          <h1 className="md:text-4xl text-2xl">Hi there! </h1>
                        <h1 className="md:text-4xl text-2xl">I'M {" "}
        <span className='text-2xl md:text-4xl  text-fuchsia-400 md:ml-4'>
           <TypeAnimation
                          sequence={["Drishti Jadhwani",2000,"Software Engineer",2000,"Mern Stack Developer",2000]}
                          wrapper='span'
                          speed={3}
                          repeat={Infinity}
                          /> 
        </span>
                        </h1>                         
                          <h1 className='md:mt-10 md:text-xl mt-2 text-lg  text-white md:w-[500px] lg:w-[600px]'> I accidentally fell into backend development—and now I can't stop building APIs ,obsessing over API response times, or convincing my frontend to behave nicely.
     </h1>
            </div>   
            <div>
                <img src={`${ProgrammingImage}`}  alt="programming" className='relative md:w-[420px] bottom-10 h-auto object-contain w-[350px]' />
            </div>
        </div>         
  <div className="relative md:bottom-32 bottom-10  text-white">
          <div className='flex gap-3 flex-col items-center justify-between'>
         <span className='text-center text-fuchsia-500 font-semibold md:text-3xl text-2xl'>Find me on</span>
          <div className='flex flex-row items-center justify-center gap-10 mt-2'>
     
  

        <a
  href="https://github.com/dhackmt"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-white"
>
   <span className='p-2 rounded-full w-12 h-12 bg-white'><img src={github} alt={<Github />} width={"40px"} height={"40px"} /></span>
         
</a>


             <a
  href="https://www.linkedin.com/in/drishtijadhwani/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-white"
>
          <span className='p-2 rounded-full w-12 h-12 bg-white'><img src={linkedin} alt={<Linkedin />} width={"40px"} height={"40px"} /></span>
         
</a>
        <a
  href="mailto:jadhwanidrishti@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-white"
>
  <span className='p-2 rounded-full w-12 h-12 bg-white'><img src={gmail} alt={<Mail />} width={"40px"} height={"40px"} /></span>
         
</a>
          </div>
          </div>
         


        </div>

        </div>
   

    )
}

export default Home

            {/* <div className='text-white px-10'>
            <span className='text-3xl text-center mb-10'>LET ME INTRODUCE MYSELF!</span>
            <span className='relative flex flex-row gap-8'>
                <ul className='text-2xl  w-1/2'> 
                    <li className="mb-10">
                        I accidentally fell into backend development—and now I can't stop building APIs, designing systems, and refactoring code I wrote two days ago.
                        </li>

<li className="mb-10"> I'm fluent in TypeScript, Node.js, and PostgreSQL, and I firmly believe that console.log() is both a debugging tool and a lifestyle.</li>

<li className="mb-10"> I'm most excited when I'm wiring together microservices, writing clean architecture, or deploying serverless magic with AWS Lambda.</li>

<li className="mb-10">  You’ll usually find me turning coffee into code, obsessing over API response times, or convincing my frontend to behave nicely.</li>
                </ul>
                <span className='absolute  top-10'>  
                    <img src={`${avatar}`} alt="avatar"></img>
                </span>
            </span>
            </div>  */}
            {/* <div className='text-white px-10'>
  <h2 className='text-2xl text-center mb-10'>LET ME INTRODUCE MYSELF!</h2>
  <div className='flex md:flex-row  items-center justify-around gap-8 flex-col-reverse'>
    <ul className='text-xl md:w-1/2'>
      <li className="mb-10">
      </li>
    </ul>

    <div className="w-1/2 flex justify-center pb-10">
      <img src={avatar} alt="avatar" className="w-[200px] hidden md:block h-auto object-contain" />
    </div>
  </div>
</div> */}