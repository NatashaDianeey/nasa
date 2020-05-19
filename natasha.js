const axios = require("axios");
function getAsteroids(start, end){
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=Slt8vHnSfn6bkcrQ1JkUmassBCxo497kV9obExog`
    axios.get(url)
    .then((asteroides) =>{
        return asteroides.data.near_earth_objects
        
    })
    // .then((asteroides) =>{
    //     // console.log(asteroides.near_earth_objects)
    //     return asteroides.near_earth_objects        
    // })
    .then((asteroides) =>{
        console.log(asteroides[start][0].name)  
    })
    .catch((errores) =>{
        console.log(errores)
    })







}

getAsteroids("1995-05-27", "1995-05-27")