import Search from "./Search";
import { useLocation } from "react-router-dom";

const Header = ({users}) => {
  console.log("Users data: header", users); 
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  return (
    <div className="flex items-center w-full px-4 py-8 bg-neutral-100 border-b-2 border-neutral-300">
        <div className="hidden w-48 pl-10 mt-5 mb-2 text-4xl md:block font-inter bg-neutral-100">
           <h1>{pathName}</h1>   
        </div>
        
        <Search  users={users}/> 
       

        <div className="hidden w-48 mt-6 md:block bg-neutral-100">
            <div className="flex flex-col items-center justify-between">
                <img src="../Images/avatar.jpeg" width={50} height={50} alt="avatar" />
            <div>
                    <p className="self-center mt-3 text-center">Username</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;

