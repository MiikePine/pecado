import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {useDispatch } from "react-redux";
import { fetchPosts } from "../features/userSlice";





function Settings() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();



  useEffect(() => {

  
    fetchData();
  }, []);

  console.log("Valor do usuário:", user);

  const fetchData = async () => {
  
    try {
     const data = await dispatch(fetchPosts());
    console.log(data)
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  return (   
<div>
      <Layout  user={user} className="bg-neutral-100"/>
      <div>
      <span>{user}</span>
      </div>
      </div>
  );
}

export default Settings;