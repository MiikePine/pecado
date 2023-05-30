import React from "react";
import Layout from "../components/Layout";
import Filter from "../components/Filter";
import { useState, useEffect } from "react";
import InfoFilter from "../components/InfoFilter";
import axios from "axios";
import Button from "../components/Button";
import Register from "../components/Register";
import { useSelector, useDispatch } from 'react-redux'
import Logout from "./Logout";


const Members = () => {
  const [users, setUsers] = useState([]);
  const [filterActif, setFilterActif] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [newUserAdded, setNewUserAdded] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const user = useSelector((state) => state.user.value)



  const openMenuM = () => {
    setShowRegister(!showRegister);
}

const handleDeleteUser = (deletedUser) => {
    setUsers(users.filter(user => user.id !== deletedUser.id));
  };

const updateUsers = () => {
    setNewUserAdded(prevState => !prevState);
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  useEffect(() => {
    console.log(newUserAdded);
    fetchUsers();
  }, [newUserAdded]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setUsers(response.data);    
    } catch (error) {
    
    }
  };

  const handleNewUser = () => {
    setNewUserAdded(prevState => !prevState);
  }



  function convertDate(inputFormat) {
    let dt = inputFormat.split("-");
    return new Date(dt[2], dt[1] - 1, dt[0]);
  }

  const handleFilterActif = (isActive) => {
    setFilterActif(isActive);
  };

  const filteredUsers = filterActif ? users.filter(user => user.actif) : users;

  let sortedUsers = [...filteredUsers];
  if (sortByDate) {
    sortedUsers.sort((a, b) => convertDate(b.dateValue) - convertDate(a.dateValue));
  }

  return (
    <div>
      <Layout user={user}>
        <div className="flex flex-col-reverse items-center justify-center mt-0 md:flex-row md:justify-between md:mt-4 md:mx-16">
            <div className="flex-row-reverse items-center mt-8 md:flex md:mt-0">
              <Filter onFilterActif={handleFilterActif} onSortByDate={setSortByDate} sortByDate={sortByDate} onRegisterSuccess={updateUsers}  users={users}/>
            </div>

            <span>{user}</span>

            <div className="items-center mt-6 text-xl md:order-last md:text-base md:mb-16 md:mr-8">
              <Button className="px-20 py-3 md:px-10 md:py-2 md:ml-2 md:mr-4" NewMember="New Member" onClick={openMenuM} />
            </div>
        </div>
        <div>
          {sortedUsers.map((user) => (
            <InfoFilter key={user.id} user={user} onDeletingUser={handleDeleteUser} />
          ))}
         
        </div>
        {showRegister &&  <Register onRegisterSuccess={updateUsers} />}
      </Layout>

    </div>
  );
};

export default Members;









