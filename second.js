const jsonData=require('./source.json')
let result=jsonData.reduce((acc,item)=>{
    let season=item['season'];
    let team1=item['team1'];
   if(acc[season]){

      if(acc[season][team1]){
          acc[season][team1] += 1
      }else{
        acc[season][team1] = 1
      }
       
       
   }else{
       acc[season] ={[team1]:1}
   }
   return acc
},{});
console.log(result)