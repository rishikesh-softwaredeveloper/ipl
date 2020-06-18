dgcdcgjedjd

let jsonData = require('./source.json');
let obj={};
let tem=[];

for(let j in jsonData){
    if(jsonData[j]['season']==='2017'){
     tem.push(jsonData[j]['team1']);         
    }
}
const count={};
for(let i=0;i<tem.length;i++){
    const val=tem[i];
    if(val in count){
        count[val]=count[val]+1;
    }else{
        count[val]=1;
    }
}
for (let key in count) {
    console.log(key,count[key]);
}

for(let i in jsonData){
    obj[jsonData[i]['season']]={};
}
console.log(obj)
