import Card from "./projectCard";
import resume from "../assets/resume.png";
import tailor from "../assets/tailor.png";
import games1 from "../assets/games1.png";


const Projects=()=>{

const projects=[
  {title:"Games-hub" ,description:" A JavaScript-based gaming platform where users can log in, play classic games like Tic-Tac-Toe, Rock Paper Scissors, Whack-a-Mole, and Spin Machine. User scores are tracked and displayed in their profile, with options to update profile details. Admins can manage users, add or remove games, and view high scores.",img:games1},
  {title:"Custom-Portfolio-builder" ,description:"A web application where users can log in, fill out a personal information form, and generate resumes using customizable templates. Users can edit their information, adjust font size and color, and regenerate resumes instantly. Includes an admin panel to manage users and their resumes.",img:resume},
  {title:"Local Tailoring Platform",description:" A community-driven website where local tailors can register by submitting their shop details, specialties, services, images, and reviews. Upon admin approval, shops are showcased on the platform. Users can log in to explore and discover nearby tailor shops, promoting visibility and support for local businesses.",img:tailor  }
]
    return (
       <div className=" min-h-screen "> 
        <div className="text-white text-3xl text-center relative top-28">My Recent
            <span className="px-2 text-fuchsia-500">Works</span> </div>
                <div className="flex flex-wrap flex-row mb-10 gap-20 justify-center mt-10 px-10 py-30 ">
            {projects.map((project)=>(
                <Card title={project.title} description={project.description} img={project.img} />
            ))}
        </div>
       </div>
 
    )
}

export default Projects;