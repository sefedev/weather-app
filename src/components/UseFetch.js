import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false);

    useEffect( () => {
        const fetchWeather = async () => {
            setIsPending(true);
            const weatherData = await fetch(url);
            //console.log(weatherData.json());
            const getData = await weatherData.json();
            setIsPending(false);
            setData(getData)
        }

        if(url !== "")
            fetchWeather();
    },[url])

    return { data, isPending };
}

export default useFetch;
