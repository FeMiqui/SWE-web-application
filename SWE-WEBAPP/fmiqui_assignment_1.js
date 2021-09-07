// Name: Fellipe Sho Miqui
// GNumber: G01046115
// Crashes in DC
// author of the database: DC Open Data.
// File source API: https://opendata.arcgis.com/datasets/70392a096a8e431381f1f692aaa06afd_24.geojson

// Question about the database?
// 1. What is the highest number of passengers who were in a fatal state after one crash?

// 2. What is the average speed of the vehicles when an accident happens?

// 3. How many of those accidents are related with Bicyclists?

// 4. In which region most of the accidents happen?

// 5. Was there any situation where the driver was impaired and the pedestrian not?

// 6. Is it more common for pedestrian to suffer major or minor injuries?
 
// 7. Which street had the most number of accidents.

// 8. In which day of the week most of the accidents happen?

const https = require('https')
const url = "https://opendata.arcgis.com/datasets/982f6bfb0888404db5c42cb1e8c70ed0_12.geojson";
https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    for (n in data){
        console.log(n);
    }
  })
}).on('error', err => {
  console.log(err.message);
})