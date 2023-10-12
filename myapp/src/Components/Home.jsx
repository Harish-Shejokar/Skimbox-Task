import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
   
  
  const fun = () => {
   navigate("/ticTacToe",{state:data});
  }
    
  return (
    <div>
      <button  onClick={fun} className='bg-transparent p-4 absolute text-white font-bold border border-gray-400 rounded-lg'>shorcut to funZone</button>
      <img
        className="w-[100%] h-[87.5vh] "
        src="https://img.freepik.com/free-photo/animal-spooky-forest-moonlight-evil-beak-generative-ai_188544-8358.jpg?w=1060&t=st=1697003240~exp=1697003840~hmac=56fc2ef1dfe1ca40e6f161ec905d5cd62348f1686853fae9a4bb228b2189dc2f"
      />
    </div>
  );
}

export default Home
