import React from 'react'
import Card from './Card'

const Login = () => {
  return (
    <div className="w-[40rem] m-auto mt-[10rem] p-3 shadow-sm border-2 border-slate-900 rounded-xl ">
      <input
        className="p-2 w-full border border-slate-900 mt-2 font-bold text-xl"
        type="email"
        name="email"
        placeholder="Enter Email"
      />
      <input
        className="p-2 w-full border border-slate-900 mt-2 font-bold text-xl"
        type="password"
        name="password"
        placeholder="Enter Password"
      />
      <button
       
        className="w-full bg-slate-900 text-white py-2 font-bold text-xl mt-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

export default Login
