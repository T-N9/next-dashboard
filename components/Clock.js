import { useEffect, useState } from "react";

function Clock() {

    const [ clockTime, setClockTime] = useState('TIME HERE!');
    let formattedTime;

    useEffect(()=> {
        
        const getFormattedTime = () => {
            const date = new Date();
            formattedTime = date.toLocaleTimeString("en-us", {timeStyle : "short"});
            setClockTime(formattedTime);

            // console.log(formattedTime);
        } 

        setInterval(getFormattedTime, 1000);
    }, [formattedTime]);

  return (
    <section className="flex justify-center items-center">
        {/* <h1 className="text-white  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full flex items-center justify-center text-5xl sm:text-6xl drop-shadow-tn font-bungee">
            {clockTime}
        </h1> */}
        <h1 className="text-white w-full flex items-center justify-center text-5xl sm:text-6xl drop-shadow-tn font-bungee sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] ">
            {clockTime}
        </h1>
    </section>
  )
}

export default Clock