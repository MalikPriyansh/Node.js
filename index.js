const {parse} = require('csv-parse');
const fs = require('fs');

const results = [];

function ishabitable(planet){
    return planet['pl_controv_flag'] === "Published Confirmed" ;
}

fs.createReadStream('PS_2022.04.20_11.39.04.csv')
/*.pipe(parse({
    comment : '#',
    columns : true,
}))*/
.on('data' , (data)=>{
    if(ishabitable(data))
    {
        results.push(data);
    }
    
})
.on('error',(err)=>{
    console.log(err);
})
.on('end',()=>{
    console.log(`${results.length} habitable planets found`);
    /*console.log(habitablePlanets.map((planet) => {
        return planet['kepler_name'];
      }));*/
    console.log("end");
})