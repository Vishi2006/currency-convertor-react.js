import { useEffect, useState } from "react";

function useCurrencyInfo (currency){

    const [data, setData] = useState({});
    //set empty object to not crash the web app in case of np data is provide.


    //now using useEffect hook because we need to call Api when again and again when the dependency changed.
    useEffect( ()=> {
        fetch(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_API_KEY}/latest/${currency}`)
        .then( (response)=> response.json())
        .then( (response) => {
            if (response.result === "success"){
                setData(response.conversion_rates);
            } else {
                console.error("API error : ", response);
            }
        })
        .catch( (error) => console.error("Fetch error : ", error))
        //set the value given by Api into the Data, via useState hook.
    } , [currency])
    
    return data;
}

export default useCurrencyInfo;