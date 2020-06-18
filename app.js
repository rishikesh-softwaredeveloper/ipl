const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

CSVToJSON().fromFile("./source.csv").then(source => {
    
 //  creating source.json
    FileSystem.writeFile('source.json', JSON.stringify(source, null, 4), (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON array is saved.");
            });
    //end to source.json        
            function getFields(input,field) {
                var output = [];
                for (var i=0; i < input.length ; ++i)
                    output.push(input[i][field[0]],input[i][field[1]]);
                return output;
            }
    //calling function for seasonalmatches     
            var result = getFields(source, ["season","team1"]);
            console.log(result);
            result.filter(function(item){
                let count;
                if(item==='2017'){
                    

                }
            })
            
            var count = {};
            result.forEach(function(i) { count[i] = (count[i]||0) + 1;});
            
    //writing the result(count)in seasonMatches.json        
    FileSystem.writeFile('result.json', JSON.stringify(count, null, 4), (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON array is saved.");
    });
    // console.log(count);
    //end to seasonMatches.json
    

 }).catch(err => {
            // log error if any
            console.log(err);
 });