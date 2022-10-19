import React, { useEffect, useState } from "react";
import Login from "../Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Register from "../Register";
import PersonCard from "../../Components/PersonCard";
import { PeopleProvider } from "../../Context/PeopleContext";


const Routering = () => {
  const userskey = "people";
  const [peopleList, setpeopleList] = useState([]);
  const fetchUsers = () => {
    const users = JSON.parse(window.localStorage.getItem(userskey)) || [];
    setpeopleList(users);
  };

  const updatePeopleList = (email, password) => {
    let obj = {
      email: email,
      password: password,
      favorite: [],
    };

      if( peopleList.length === 0 ) {
        setpeopleList([obj])
      } else {
        let people = [...peopleList, obj];
        setpeopleList(people);
      }
    window.localStorage.setItem(peopleList, JSON.stringify(people));
  };

  useEffect(() => {
    fetchUsers();
  },[]);

  return (
    <PeopleProvider
      value={{
        peopleList: peopleList,
        updatePeopleList: updatePeopleList,
      }}>
      <Router>
        <Routes>
          <Route path='/home/PersonCard/:personId' element={<PersonCard />} />
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Dashboard />} />
        </Routes>
      </Router>
    </PeopleProvider>
  );
};

export default Routering;
