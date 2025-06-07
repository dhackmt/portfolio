// import { ContactIcon, InstagramIcon, Linkedin, LinkedinIcon, MailIcon } from "lucide-react"
import { SocialIcon } from 'react-social-icons'
const LinkBar=()=>{
return(
    <div className=" rounded-[50px] w-auto h-auto mt-2 bg-white p-2 shadow-2xl">
        <ul className='flex flex-col gap-2'>

            {/* this gives bottom right and top left shadow before comma it is grey and after comma it is white */}
                <li className="rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] p-3 transition hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]"><SocialIcon url="https://instagram.com" style={{height:30,width:30}} /></li>    
                <li className="rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] p-3 transition hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]"><SocialIcon url="https://linkedin.com" style={{height:30,width:30}} /></li>    
                <li className="rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] p-3 transition hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]"><SocialIcon url="mailto:djadhwani20@gmail.com" style={{height:30,width:30}} /></li>       
        </ul>        
    </div>
)
}

export default LinkBar