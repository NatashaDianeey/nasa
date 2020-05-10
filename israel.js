const axios = require("axios");
function getAsteroids(start, end){
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=Slt8vHnSfn6bkcrQ1JkUmassBCxo497kV9obExog`
    axios.get(url)
    .then((api) =>{
        const datos = api.data
        const fecha = datos.near_earth_objects
        const asteroides = fecha[start]
        asteroides.forEach(asteroide => {
            console.log("Este Asteroide es Llamado: ",asteroide.name)
            console.log("Su Diametro Minimos es",asteroide.estimated_diameter.meters.estimated_diameter_min)
            console.log("Su Diametro MAximo es",asteroide.estimated_diameter.meters.estimated_diameter_max)
            if(asteroide.is_potentially_hazardous_asteroid === true){
                console.log("Este Asteroide tiene el potencial de ser peligroso para la humanidad")
            }else{
                console.log("Este Asteroide No es peligroso para la humanidad")

            }

        });
    })
    .catch((errores) =>{
        console.log(errores)
    })







}

getAsteroids("1990-01-20", "1990-01-20")

 

// conso
//     module.exports = getAsteroids