import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import peopleContext from "../Context/PeopleContext";



const Register = () => {

  const {updatePeopleList} = useContext(peopleContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    console.log(e)
    updatePeopleList(email, password)
    navigate('/')
  }
  
  return (
    <>
      <main className='bg-[#00088]  flex justify-center items-center flex-row'>
        <div className='bg-[#ffffff] h-auto mx-5 m-10 p-5 w-[600px] flex flex-col rounded-md'>
          <h3 className='font-semibold text-sm mb-8'>Register</h3>
          <form className='flex flex-col'>
            <label className='text-sm' htmlFor='inputEmail'>
              E-mail:
            </label>
            <input
              id='inputEmail'
              name='email'
              type='email'
              onChange={(e)=>(setEmail(e.target.value))}
              className='mb-3 text-sm rounded border-[#adadad] border-2 border-opacity-25 hover:bg-[#f5f5f5] active:border-none'
            />
            <label className='text-sm' htmlFor='password'>
              Password:
            </label>
            <input
              id='password'
              name='password'
              type='password'
              onChange={(e)=>(setPassword(e.target.value))}
              className='mb-3 text-sm rounded border-[#adadad] border-2 border-opacity-25 hover:bg-[#f5f5f5] active:border-none'
            />
            <button
              type='submit'
              className='p-2 mt-4 rounded bg-[#fa8e00] text-[#fff] text-center hover:bg-[#eb8500] focus:bg-[#e46c02]'
              value='Register'
              placeholder="Register"
              name="Register"
              onClick={handleSubmit}
            />
          </form>
        </div>  
      </main>
    </>
  );
};

export default Register;
