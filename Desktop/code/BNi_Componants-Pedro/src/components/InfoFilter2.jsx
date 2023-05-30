import React from "react";
import Button from "./Button";


const InfoFilter2 = ({user, deleteUser}) =>  {
    const { actif } = user;
   
   

    return (
    <div className="md:flex justify-between mt-10 md:mt-0">
            <div className="pl-0 md:pl-10 mmt-6 md:mt-10 mb-12 md:mb-0 text-xl md:text-base">
                    <div className="mb-2">
                        <p><strong>Email:</strong>{user && user.email} </p>
                    </div>

                    <div className="mb-2">
                        <p><strong>Adresse:</strong> {user && user.adresse}</p>
                    </div>

                    <div className="mb-2">
                        <p><strong>NPA:</strong> {user && user.postCode}</p>
                    </div>

                    <div className="mb-2">
                        <p><strong>Ville:</strong> {user && user.city}</p>
                    </div>
            </div>
            



            <div className="flex items-end gap-6 mr-10">
                    <div
                        className={`px-6 py-2 m-2 w-24 h-10 flex text-center text-white  rounded-lg shadow-lg  shadow-zinc-400 justify-center ${
                            actif ? "bg-green" : "bg-red"}`}>

                            {actif ? "Actif" : "Inactif"}
                    </div>
                    <div>
                        <button className="px-6 py-2 m-2 w-32 h-10 flex text-center rounded-lg shadow-lg shadow-zinc-400 bg-red text-white hover:bg-black justify-center" onClick={deleteUser}>Suprimer </button>
                    </div>
            </div>
    </div>
  


    )
}

export default InfoFilter2