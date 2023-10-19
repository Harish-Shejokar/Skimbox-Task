import React, { useEffect, useState } from "react";

const StopWatch = () => {
    const [id, setId] = useState(null);
    const [startStop, setStartStop] = useState(true); 
  const [second, setSeconds] = useState("00");
  const [min, setMin] = useState("00");
  const [hour, setHour] = useState("00");

  const resetWatch = () => {
      setSeconds("00");
      setMin("00");
      setHour("00");
      clearInterval(id);
      setId(null);
      setStartStop(true);
    };
    const stopWatch = () => {
        clearInterval(id);
        setId(null);
        setStartStop(true);
    }
  // console.log(id);
    console.log(second);
    if (min > 59) {
        setMin(() => "00");
        setHour(prev => Number(prev + 1));
    }
    
    if (second > 59) {
      setSeconds(() => "00");
      setMin((prev) => Number(prev + 1  ));
    }

    const startWatch = () => {
        setStartStop(false);
    setId(() => {
        const id = setInterval(() => {
         
          setSeconds((prev) => Number(prev + 1));

      }, 1000);
      return id;
    });
  };
  return (
    <div className="bg-slate-200 mx-8  lg:w-[40%] lg:mx-auto mt-8 rounded-xl">
      <h1 className="text-5xl font-semibold text-center">StopWatch</h1>
      <div className="flex justify-center my-2 text-8xl">
        <span>{hour < 10 && hour > 0 ? "0" + hour : hour}:</span>
        <span>{min < 10 && min > 0 ? "0" + min : min}:</span>
        <span>{second < 10 && second > 0 ? "0" + second : second}</span>
      </div>
      <div className="flex justify-center gap-4 p-4">
        {startStop ? (
          <button
            onClick={startWatch}
            className="px-10 py-4 border-2 border-black text-2xl font-bold rounded-3xl bg-green-600"
          >
            Start
          </button>
        ) : (
          <button
            onClick={stopWatch}
            className="px-10 py-4 border-2 border-black text-2xl font-bold rounded-3xl bg-red-600"
          >
            Stop
          </button>
        )}
        <button
          onClick={resetWatch}
          className="px-10 py-4 border-2 border-black text-2xl font-bold rounded-3xl bg-yellow-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
