let jsonData = require('./source.json');
let resultObject = {}

for (let i=0; i<jsonData.length;i++){
    for (let j =0; j<jsonData.length; j++){
        if(jsonData[i]['season'] === jsonData[j]['season'] && resultObject[jsonData[i]['season']]){
            if(resultObject[jsonData[j]['season']]){
                if(resultObject[jsonData[j]['season']]['team1']){
                    resultObject[jsonData[j]['season']]['team1'] += 1 
                }else{
                    resultObject[jsonData[j]['season']]['team1'] = 1
                }
            }else{
                resultObject[jsonData[j]['season']][jsonData[j]['team1']] =1
            }
        }else{
            resultObject[jsonData[j]['season']] = {[jsonData[j]['team1']] : 1}
        }

    }
}
console.log(resultObject)







































// for(let j=0; j< jsonData.length; j++){

//     // let obj={};
//     let count=0;
//     // let count1={};
//     // let temparray=[jsonData[i]]
// if(!resultObject[jsonData[j]["season"]]){
//     resultObject[jsonData[j]["season"]] = {}
// }
//     for(let i=0;i<jsonData.length;i++){
//         if(jsonData[i]['season']=== jsonData[j]['season']){
//             if(jsonData[i]['team1'] === jsonData[j]['team1'] && resultObject[jsonData[]]){
//                 count++;
//                 resultObject[jsonData[j]["season"]] = {[jsonData[j]['team1']] : count}
//                 if(resultObject[jsonData[j]['team1']]){
                    
//                 }
//             }
//         }
//     }
//     console.log(resultObject)
//     //     const val=jsonData[i]['team1'];
//     //     if(val in count){
//         //         count[val]=count[val]+1;
//         //     }else{
//             //         count[val]=1;
//             //     }
//             // }        
//             // if(jsonData[i]['season']==='2017'){ 
//                 //     obj[jsonData[i]['season']]={count};
//                 // }
//                 // }
//             }
//             // console.log(obj)
//             console.log(resultObject)

