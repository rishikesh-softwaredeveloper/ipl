let team=require("./source.json")
let count={};
for(let i=0;i<team.length;i++){
if(team[i]['season']==='2017'){
    const val=team[i]['team1'];
    if(val in count){
        count[val]=count[val]+1;
    }else{
        count[val]=1;
    }
 }
}
//  for (let key in count) {
//     console.log( key,count[key]);
//  }
 console.log(count)