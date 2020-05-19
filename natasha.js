const axios = require("axios");
function getAsteroids(start, end){
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=Slt8vHnSfn6bkcrQ1JkUmassBCxo497kV9obExog`
    console.log(`------------ N A T A S H A ---------------`)
    axios.get(url)
    .then((asteroides) =>{
        const names = asteroides.data.near_earth_objects[start].map((data) =>{
            console.log(`El planeta es: ${data.name}`)
            console.log(`El diámetro máximo es de: ${data.estimated_diameter.kilometers.estimated_diameter_max} km`)
            console.log(`El diámetro mínimo es de: ${data.estimated_diameter.kilometers.estimated_diameter_min} km`)
            if (data.is_potentially_hazardous_asteroid == true){
                console.log("Es muy probable que ocurra una catástrofe");
            } else {
                console.log("Puedes vivir un día más ");
            }
            console.log("------------------------------------------")
        })
    })
    .catch((error) => {
        console.log(`Error: ${error.response.data.code} ${error.response.data.error_message}`)
    })
}
// getAsteroids("1995-05-27", "1995-05-27")
module.exports = getAsteroids