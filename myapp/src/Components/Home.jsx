import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { interval,Observable } from 'rxjs';

const Home = () => {
  const [state, setState] = useState(0);
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },

    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
  ];

  const observable$ = new Observable(function (subscribe) {
    subscribe.next(
      `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
    );
  });
   
  
  const fun = () => {
   navigate("/ticTacToe",{state:data});
  }
 
  useEffect(() => {
    // observable$.subscribe(value =>console.log(value));
  },[])
    
  return (
    <div>
      <button
        onClick={fun}
        className="bg-transparent p-4 absolute text-white font-bold border border-gray-400 rounded-lg "
      >
        shorcut to funZone
      </button>
    <div className="bg-transparent w-[100px] h-[100px]  absolute left-[15rem] text-white font-bold text-2xl">
        {state}
      </div>

      <img
        className="w-[100%] h-[87.5vh] "
        src="https://img.freepik.com/free-photo/animal-spooky-forest-moonlight-evil-beak-generative-ai_188544-8358.jpg?w=1060&t=st=1697003240~exp=1697003840~hmac=56fc2ef1dfe1ca40e6f161ec905d5cd62348f1686853fae9a4bb228b2189dc2f"
      />
    </div>
  );
}

export default Home
