const Card=(Props)=>{
return(
    <div className="bg-transparent w-100 h-auto rounded-2xl  p-8 hover:scale-105 border-fuchsia-500 shadow-fuchsia-500 shadow-md   transition-transform ease-in-out duration-100 delay-75 hover:shadow-fuchsia-100  hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]" >
      <div className="flex items-center justify-center relative">
    <img src={Props.img} className="w-full h-50 rounded-2xl" alt={Props.title}></img>
      </div>
    
         <div className="mt-4 text-fuchsia-500 text-center text-3xl">
        {Props.title}
      </div>
      <div className="mt-4 text-white w-[300px] text-center ">
      {Props.description}

      </div>  
            <div className="flex justify-center">
        <button className="right-2 bg-fuchsia-500 text-white md:p-2 p-2 mt-4  rounded-lg md:text-xl text-lg">Get Code</button>
      </div>


    </div>
)
}

export default Card;