import React, { useEffect } from "react";
import InfoFilter2 from "./InfoFilter2";
import { useState } from "react";
import {BsFillArrowUpCircleFill} from "react-icons/Bs";
import {BsFillArrowDownCircleFill} from "react-icons/Bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InfoFilter = ({user, onDeletingUser}) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  function closeFilter() {
    setIsVisible(false);
  }

  const deleteUser = async () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(`http://localhost:3000/posts/${user.id}`, requestOptions);
    if (response.ok) {  
      console.log("Delete was successful");
      onDeletingUser(user);
      toast.error("membre supprimé avec succès");
    } else {
      console.log("HTTP-Error: " + response.status);
    }
  }


  return (
<div className="mt-12 md:mt-0 py-3 px-10 md:px-10 w-5/5">
    <div className="md:flex md:text-left items-center  md:flex-row">
      <div className="flex justify-between">
        <div className="md:flex-row">
              <div className="md:ml-10 sm:pr-10 pr-20 sm:basis-1 md:basis-1/5">
                <img src={user.logo} className="w-20 md:w-20 md:h-auto" alt="Logo"></img>
              </div>
        </div>
              <div className="block md:hidden basis-1/4"> 
                  {isVisible ? (
                            <BsFillArrowUpCircleFill size={45} className="text-neutral-400" onClick={handleVisibility}></BsFillArrowUpCircleFill>
                          ) : (
                            <BsFillArrowDownCircleFill size={45} className="text-neutral-400" onClick={handleVisibility}></BsFillArrowDownCircleFill>
                  )}  
              </div>
      </div>
    
 
          <div className="text-xl md:text-base md:block py-8 md:py-0 basis-1/4 md:pl-32">{user.name} {user.lastName}</div>
          <div className="text-xl md:text-base md:block py-4 md:py-0 basis-1/4 md:pl-20"> {user.company}</div>
         
          <div className="flex justify-start text-xl md:text-base basis-1/4 py-4 md:py-0 ">
            <div className="bg-neutral-200 rounded-full w-32 justify-center text-base md:text-base px-4 py-1 border-2 border-zinc-300 shadow-lg text-red">
              {user.dateValue}
            </div>       
          </div> 

          <div className="hidden md:mr-10 md:block" > 
              {isVisible ? (
                        <BsFillArrowUpCircleFill size={45} className="text-neutral-400" onClick={handleVisibility}></BsFillArrowUpCircleFill>
                      ) : (
                        <BsFillArrowDownCircleFill size={45} className="text-neutral-400" onClick={handleVisibility}></BsFillArrowDownCircleFill>
              )}  
          </div>

          
      </div> 
      <div>{isVisible && <InfoFilter2 user={user} close={closeFilter} deleteUser={deleteUser} />}</div>


      <div className="border-b-2 border-neutral-300 pb-8 md:pb-6 md:mx-2"></div>
    </div>
  );
};

export default InfoFilter;

