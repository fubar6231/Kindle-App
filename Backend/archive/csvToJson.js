// Modules required included
const fs = require('fs');
const csv = require('Books/archive/csvToJson')

// Converting Deliveries.csv to JSON and saving into data folder
const csvFilePath = './books.csv';
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync('./books.json', JSON.stringify(jsonObj), (err, data) => {
      if (err) {
        console.log("Error :", err);
      } else {
        console.log("File Created");
      }
    })
  });

