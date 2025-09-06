
const btn = document.getElementById("fetchbtn");
const API_KEY = "94737b71a6474fcf8c3154621250509";
const BASE_URL = "http://api.weatherapi.com/v1";

async function fetchweather() {
    const city = document.getElementById("city");
    if (!city) {
        alert("CITY NAME TOH DAAL BSDK");
        return;
    }
    try {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city.value}`);
        const data = await response.json();
        console.log(data.current.temp_c);
        city.value = data.current.temp_c;
        return data.current.temp_c
    }
    catch (error) {
        console.error("Error is: ", error);
    }


}

