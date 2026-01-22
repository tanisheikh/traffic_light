import React, { useEffect, useRef, useState } from "react";

const useTrafficLight = (delay) => {
  const [time, setTime] = useState(delay /1000);
  let timeIntervalRef =useRef(null)
console.log('delay---',delay)
  useEffect(() => {
    timeIntervalRef.current = setInterval(() => {
        if(time !== 0){
      setTime((prev) => {
        console.log('prev--',prev)
        return prev - 1
      });
}
if(time === 0){
    clearInterval(timeIntervalRef)
}
    },delay);
  }, []);
  return {time};
};

export default useTrafficLight;
