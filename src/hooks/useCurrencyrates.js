import React, { useEffect, useState } from 'react'
import FetchRates from "../services/FetchRates";


function useCurrencyRates() {
 
    const [rates, setRates] = useState(null);

    useEffect(() => {
        FetchRates().then((data) => setRates(data));

    }, []);

    return { rates };
}

export default useCurrencyRates