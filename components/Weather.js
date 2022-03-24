import { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Weather = () => {

    const [ location, setLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => setLocation(position));
    }, []);

    let url;

    if(location !== null){
        url = `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=imperial`;
    }

    const { data, error } =  useSWR(url, fetcher)

    let image, temperature, city;
    if(data !== undefined){
        image = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temperature = data.main.temp;
        city = data.name;
        // console.log(data)
    }

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <section className="mb-5 mt-[-1.5rem]">
            <div className="flex items-center">
                <Image src={image} width={80} height={80}/>
                <p className=" text-white text-3xl font-bold drop-shadow-tn">
                    {parseInt(temperature)}°
                </p>
            </div>
            <p className="text-white ml-6 text-xl mt-[-1rem] font-bold drop-shadow-tn">
                {
                    city
                }
            </p>
        </section>
    )
}

export default Weather;