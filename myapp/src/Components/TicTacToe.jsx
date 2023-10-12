import React from 'react'
import { useLocation } from 'react-router-dom';

const TicTacToe = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <img
        className="w-[100%] h-[87.5vh] "
        src="https://img.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.jpg?w=360&t=st=1697005573~exp=1697006173~hmac=196af107c42d8baa5cca4282a6734baa022310d4e1661810094ae2fa399ddee0"
      />
    </div>
  );
}

export default TicTacToe
