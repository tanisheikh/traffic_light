import React, { useEffect, useRef, useState } from "react";
import "./traffic.css";
const TrafficLight = () => {
  const lights = [
    {
      id: 1,
      light: "green",
      time: 5000,
    },
    {
      id: 2,
      light: "yellow",
      time: 500,
    },
    {
      id: 3,
      light: "red",
      time: 3000,
    },
  ];
  const initialState = lights[0];
  const [sec, setSec] = useState(initialState.time);
  const [lightsColor, setLightsColor] = useState(initialState.light);

  let trafficLightRef = useRef(null);
  const startTrafficLight = (color, delay) => {
    trafficLightRef.current = setInterval(() => {
      setSec((prev) => prev > 0 && prev - 1000);
      if (sec === 0) {
        setLightsColor(color);
        setSec(delay);
        clearInterval(trafficLightRef);
      }
    }, delay);
  };
  useEffect(() => {
    if (lightsColor === "green") {
      startTrafficLight("yellow", 2000);
    } else if (lightsColor === "yellow") {
      startTrafficLight("red", 4000);
    } else {
      startTrafficLight("green", 3000);
    }
  }, [lightsColor, sec]);
  return (
    <div className="traffic-container">
      <h1>Traffic Lights</h1>
      <div className="traffic-div">
        {lights.map((item) => {
          const viewSec = sec / 1000;
          return (
            <div className={`traffic-light-div`} key={item.id}>
              <div className={`traffic-lights ${item.light}`} />
              {lightsColor === item.light && (
                <span className="sec">{`${viewSec} sec`}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLight;
