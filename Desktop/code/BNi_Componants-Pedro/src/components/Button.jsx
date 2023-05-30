import { TfiClose } from "react-icons/Tfi";



const Button = ({trimestre, active, ...props}) => {
  return (
    <div>
      {props.loginRed && (
        <button className="w-full px-4 py-2 text-center text-white rounded-lg shadow-lg bg-red hover:bg-black">
          {props.loginRed} 
        </button>
      )}
      {props.Paye && (
        <button className="py-3 m-2 text-center text-white rounded-lg shadow-lg px-7 bg-green hover:bg-black">
          {props.Paye}
        </button>
      )}
      {props.bill && (
        <button onClick={props.open} className="px-24 py-3 md:px-10 md:py-2 md:ml-2 md:mr-4 text-center text-white rounded-lg shadow-lg bg-red hover:bg-black">
          {props.bill}
        </button>
      )}
    
    {trimestre && (
        <button
          className={`px-4 py-2 bg-neutral-100 text-black rounded-lg ${
            active ? "bg-red" : ""
          }`}
        >
          {trimestre}
        </button>
      )}
      
      {props.create && (
      <button className={"w-full px-2 py-4 text-lg md:px-4 md:py-3 mt-2 tracking-wide text-white shadow-lg hover:bg-black transition-colors duration-8000 transform bg-red rounded-xl hover:bg-red-400 focus:outline-none focus:bg-red focus:ring focus:ring-red-300 focus:ring-opacity-50"}>
        {props.create}
        </button>
      )}

      {props.NewMember && (
        <button onClick={props.onClick} className="bg-red text-white px-20 py-3 md:px-10 md:py-2 md:ml-2 md:mr-4 rounded-lg shadow-lg shadow-neutral-400 hover:bg-black">
          {props.NewMember}
        </button>
      )}


      {props.suprimer && (
        <button onClick={props.open} className="px-6 py-2 m-2 items-center flex text-center text-white rounded-lg shadow-lg bg-red hover:bg-black">
          {props.suprimer}
          <TfiClose size={20} className="text-white ml-4 "></TfiClose>
        </button>
)}

{props.actif && (
        <button onClick={props.open} className="px-6 py-2 m-2 w-1 items-center text-center text-white rounded-lg shadow-lg bg-green">
          {props.actif}
          
        </button>
)}

 
    </div>
  )
}

export default Button;