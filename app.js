// const a =[1, 2, 3];
// const b = [...a];
// b.splice(1, 1);
// console.log(b);


// const arr = [1, 2, 3, 4];
// const [a, b, c, d] = arr;
// console.log(a, b, c);


// =======================map===========================

// const arr = ["a", "b", "c", "abc"];
// arr.map(function (value, index){
//     console.log("value ==" , value);
//     console.log("index ==" , index);
// });


// let a = [{id:1}, {id:2}, {id:3}];
// let b1 = JSON.parse(JSON.stringify(a));
// // let b = [...a];
// console.log(b1);

 let a = [
    {
        id: 1,
        name: "abc",
        category: "A"
    },
    {
        id: 2,
        name: "def",
        category: "B"
    },
    {
        id: 3,
        name: "ghi",
        category: "C"
    },
    {
        id: 4,
        name: "jkl",
        category: "C"
        
    }
 ];

//  let numArray = [ 10, 20, 30, 40]

// a.map(function(e, i){
//     console.log(e);
//     console.log(i)
// })
// =======================filter================================
// let b = a.filter(function(x, i){
//     if (x.category == "A"){
//         return x
//     }
// });
// console.log(b);

// =======================forEach================================


// a.forEach(function(x, i){
//     x.inst = "SIAMS";

// });
// console.log(a);


// numArray.forEach(function(x, i)
// {
//     x = x + 2
// });
// console.log(numArray );


// let d = [1, 2, 3, 4, 5, 3, 2, 4, 1];
  
// let g = [new Set([...d])];
// console.log(g);



//=========================findIndex===================================

// let b = a.findIndex(function (x){
//     return (x.id == 4 ? x : null);{
    
//     }
// });
// console.log(b);

//==========================functions=================================


// Arrow functions

// let abc = (a)=>{
//     console.log(a);
// };
// abc(a);

// let abc = a => {
//     console.log(a);
// };
// abc(a);

// let abc = a.filter(x => x.category == "B");
// console.log(abc);  


//=======================callback Functions============================

// let abc = (a)=>{                   // callBack function
//     return a
// }
// let xyz = (a)=>{                    // higher order function
//     return      a*2      
// }
// console.log(xyz(abc(10)));

// let abc = ()=>{
//     console.log('abc');
//     return()=>{
//         console.log("xyz");
//     }
// }

// abc()()
















