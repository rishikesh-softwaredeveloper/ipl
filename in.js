let jsonData = require('./source.json');
let object={};
for(let i=0;i<jsonData.length;i++){

    if(Object.entries(object).length!==0){
        console.log(object[jsonData[i]['season']]); 
        if(object[jsonData[i]['season']]===jsonData[i]['season'] && object[jsonData[i]['season']] !== undefined){
            object[jsonData[i]['season']]=jsonData[i]['team1'];  
          console.log('no',object[jsonData[i]['season']]);        
        }else{
            console.log('true')
            object[jsonData[i]['season']]=jsonData[i]['team1'];  

        }
    }else{
         console.log('yes',jsonData[i]['season']);
        object[jsonData[i]['season']]=jsonData[i]['team1'];  
    }
}

console.log(object)
