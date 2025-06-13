import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    console.log("useCurrencyInfo", data);
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then(res => res.json())
            .then(res => setData(res.rates));
    }, [currency]);
    console.log("useCurrencyInfo", data);
    return data;
}
export default useCurrencyInfo;