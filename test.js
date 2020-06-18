
// function repeatedcount(array) {
// 	const count = {};
// 	for (let i = 0; i < array.length; i++) {
// 		const val = array[i];
// 		if (val in count) {
// 			count[val] = count[val] + 1;
// 		} else {
// 			count[val] = 1;
// 		}
// 	}

// 	for (let key in count) {
// 		console.log(key,count[key]);
// 	}
// }
// repeatedcount([1,1,1,3,3,3,3,3,2,2,2,2,2])

// // or
// const data = require('./source.json');
// function get(input, feilds){
// 	var output={};
	
//     for(let i=0;i<input.length;i++)
//         if(output[input[i][feilds]]){
//             output[input[i][feilds]] += 1
//         }else{
//             output[input[i][feilds]] = 1;
//         }
//         // console.log(output);
//     }
//     return output;
// }
// console.log(get(data,"team1"))
let jsonData = require('./source.json');
let tem=[];
for(let j in jsonData){
    
	tem.push(jsonData[j]['team1']);         

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
   console.log( key,count[key]);
}
