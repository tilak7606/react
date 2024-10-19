import  { useEffect, useState } from 'react'

 function useCurrencyInfo(currency) {

    const [data,setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?amount=1&from=${currency}`)
        .then((res) => res.json())
            .then((res) => setData(res.rates))
            .catch((err) => console.error(err));

    },[currency]);


    return data;
 
}


export default useCurrencyInfo;



