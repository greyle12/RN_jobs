
import { useState, useEffect } from "react";
import axios from "axios";



const useFetch = (endpoint, query) => {
    const [data, setData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
        'X-RapidAPI-Key': '1433e8ca28msh833e362f1f8e5ffp16a1efjsn992c95f5d0f4',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
            //console.log(response.data)
        } catch(error) {
            setError(error);
            alert(error)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }

    return { data, isLoading, error, refetch };


}

export default useFetch;
