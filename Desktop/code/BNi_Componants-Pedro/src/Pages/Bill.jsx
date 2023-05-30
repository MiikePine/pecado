import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/userSlice'
import Logout from "./Logout";


const Bill = () => {

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  return (
      <Layout>


<div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{user}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>




        <div className="flex flex-col-reverse items-center justify-center mt-0 md:flex-row md:justify-end md:mt-2 md:mx-16">
          {/* <Filter /> */}
          <div className="flex items-center mt-10 text-xl md:order-last md:text-base md:mb-16 md:pr-16">
          <Button className="px-20 py-3 md:px-10 md:py-2 md:ml-2 md:mr-4" bill="New Bill" />
          </div>
        </div>
      

      </Layout>  

  );
};
  
export default Bill;




