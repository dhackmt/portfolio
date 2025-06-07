import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import lambda from "../assets/lambda.png";
import dynamo from "../assets/dynamo.png";
import java from "../assets/java1.png"
import javascript from "../assets/javascript1.png"
import postgres from "../assets/postgres.png"
import mongo from "../assets/mongo1.png"
import python from "../assets/python.png"

//tools
import docker from "../assets/docker.png";
import postman from "../assets/postman.png";
import swagger from "../assets/swagger.png";
import vscode from "../assets/vscode.png";
import aws from "../assets/aws.png";
import git from "../assets/git.png";


const skills=[
    javascript,nodejs,mongo,postgres,java,react,lambda,dynamo,python
]

const tools=[
   vscode,postman,swagger,aws,docker,git
]

const Skills=()=>{
    return(
        <>
        <h1 className="text-center text-4xl text-white font-Raleway mt-30 ">Professional <span className="text-fuchsia-500 font-Raleway text-4xl">Skillset</span></h1>
        <div className="flex flex-row gap-20 mt-20 justify-center flex-wrap mb-10 px-10">
            {
                skills.map((skill)=>(
                    <span className="w-20 p-2 md:w-32 border-2 border-white flex justify-center"><img src={skill} height={"80px"} width={"80px"}/></span>
                ))
            }
        </div>
        <h1 className="text-center text-4xl text-fuchsia-500 font-Raleway mt-20 ">Tools <span className="text-white font-Raleway text-4xl">I use</span></h1>
           <div className="flex flex-row gap-20 mt-20 justify-center flex-wrap mb-10 px-10">
            {
                tools.map((tool)=>(
                    <span className="w-20 p-2 md:w-32 border-2 border-white flex justify-center"><img src={tool} height={"80px"} width={"80px"}/></span>
                ))
            }
        </div>

        </>
    )
}

export default Skills;