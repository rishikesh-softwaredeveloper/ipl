let jsonData = require('./source.json')
let result=jsonData.reduce((acc,item)=>
    {
    
        let key=item['season'];
        if(acc[key]){
            acc[key]++;
        }else{
            acc[key]=1;
        }
        return acc;
    },{});
    console.log(result);