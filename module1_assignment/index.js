const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

// Convert a CSV file toJSON, use a source of customer-data.csv if none specified.
const convertCSVToJSON = (csvFile = 'customer-data.csv') => {
    const jsonOutputFile = 'customer-data.json';
    try {
        csv()
            .fromFile(csvFile)
            .then((jsonObj) => {
                fs.writeFileSync(jsonOutputFile, JSON.stringify(jsonObj, null, 2), 'utf-8');
                console.log("Converted " + csvFile + " to " + jsonOutputFile);
            });
    } catch (error) {
        console.log(error);
    }
}

convertCSVToJSON(process.argv[2]);