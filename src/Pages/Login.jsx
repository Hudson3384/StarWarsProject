import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleSubmit (e) {
    e.preventDefault()
    console.log('submit')
  }
  function handleRegister (e) {
    e.preventDefault();
    navigate('/register')
  }
  ;
  return (
    <>
      <main className='bg-[#00088]  flex justify-center items-center flex-row'>
        <div className='bg-[#ffffff] h-auto mx-5 m-10 p-5 w-[600px] flex flex-col rounded-md'>
          <h3 className='font-semibold text-sm mb-8'>SIGN UP</h3>
          <form className='flex flex-col'>
            <label className='text-sm' htmlFor='inputEmail'>
              E-mail:
            </label>
            <input
              id='inputEmail'
              name='email'
              type='email'
              value={email}
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
              value={password}
              onChange={(e)=>(setPassword(e.target.value))}
              className='mb-3 text-sm rounded border-[#adadad] border-2 border-opacity-25 hover:bg-[#f5f5f5] active:border-none'
            />
            <input
              type='submit'
              className='p-2 mt-4 rounded bg-[#fa8e00] text-[#fff] text-center hover:bg-[#eb8500] focus:bg-[#e46c02]'
              value='Login'
              onClick={handleSubmit}
            />
          </form>
            <input
              type='button'
              className="p-2 mt-4 pl-6 rounded bg-[#fa8e00] text-[#fff] text-center hover:bg-[#eb8500] focus:bg-[#e46c02]"
              value='Register'
              onClick={handleRegister}
            />
        </div>  
      </main>
    </>
  );
};

export default Login;
