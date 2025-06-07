import { ChevronDown } from "lucide-react"
import { usePageContext } from "../context/PageProvider"
import { Timeline } from "./utils/timeline";

const data = [
  {
    title: "Started with JavaScript",
    content: "Learned JavaScript fundamentals and built interactive web components.",
  },
  {
    title: "Backend with Node.js & Express",
    content: "Developed RESTful APIs and server logic using Node.js and Express.",
  },
  {
    title: "Dived into Databases",
    content: "Worked with MongoDB, PostgreSQL, DynamoDB, and Cosmos DB.",
  },
  {
    title: "Explored Cloud Platforms",
    content: "Deployed apps on AWS and Azure using Lambda, Fargate, and API Gateway.",
  },
  {
    title: "Built Full Projects",
    content: "Built scalable backends like an e-commerce platform using microservices.",
  },
  {
    title: "Applied Design Patterns",
    content: "Used InversifyJS, clean architecture, and OOP for maintainable code.",
  },
  {
    title: "Worked with Dev Tools",
    content: "Used Swagger, Datadog, Postman, and Git for development and monitoring.",
  },
  {
    title: "Learning React",
    content: "Currently learning React to build full-stack applications.",
  },
];



const About=()=>{
    return(
       <div className="mt-10">
        <Timeline data={data} />
       </div>
    )
}

export default About