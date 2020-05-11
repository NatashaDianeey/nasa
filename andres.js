const axios = require("axios");
function getAsteroids(start, end){
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=Slt8vHnSfn6bkcrQ1JkUmassBCxo497kV9obExog`
    axios.get(url)
    .then((asteroides) =>{
        const nombres = asteroides.data.near_earth_objects[start].map((datos) =>{
            console.log(`El planeta: ${datos.name}`)
            console.log(`Tiene un diametro maximo de ${datos.estimated_diameter.kilometers.estimated_diameter_max}Km`)
            console.log(`Tiene un diametro minimo de ${datos.estimated_diameter.kilometers.estimated_diameter_min}Km`)
            if(datos.is_potentially_hazardous_asteroid == true){
                console.log("Es muy probable que ocurra una catastrofe")
                console.log("___________________________________________________")
            }else{
                console.log("Pudes vivir un día mas")
                console.log("___________________________________________________")
            }
        })
    })
    .catch((errores) =>{
        console.log(errores)
    })

}

// getAsteroids("1984-10-24", "1984-10-24")
module.exports = getAsteroids