import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";


const Layout = ({children, user}) => {
    console.log("Users data layout", user)



    return (
        <main className="relative block md:flex md:h-full bg-neutral-100">
            <Menu/> 
            <div>   
                <MenuMobile />
            </div>
                <div className="flex-1 bg-neutral-100 h-full">
                    <Header user={user}/>
                {children}
                </div>
        </main>
    )
  };
  


  export default Layout;





































