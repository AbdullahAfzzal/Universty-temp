//  console.time('Your Code Took');
// console.log('hello console');
// console.log(34+65); 
// console.log(765);
// console.log([4,96,987,8]);
// console.log({hello:'this',mark:32});
// console.table({hello:'this',mark:32});
// console.warn("this is warning");
// console.timeEnd('Your Code Took');
// console.assert(564<189, 'age>189 is not possible')
// console.error('this is an error');
// var name_1 ='abdullah';
// var channel;
//  channel='abdullah'
// var marks = 432
// console.log(name_1,channel,marks);
// const name1='ad'
// console.log(name1)
// var city='lahore'
// console.log(city)
// {
//     let city='karachi'
//     console.log(city)
// }
// console.log(city);
// const arr1=[87,3,23,32];
// arr1.push(75);
// console.log(arr1)
// /*rules of varible 
// 1.cannot start with number
// 2.can start with letters,number ,_ and $
// 3. they are case sensitive

// Most common case types
// 1.camelCase
// 2.kebab-case
// 3.snake_case
// 4.PascalCase
// */
// //Premitive data types
// //1.string
// let name2='da';
// console.log('my string is '+name2)
// console.log('my string is '+(typeof name2))

// //Number
// let mark=42
// console.log('my string is '+(typeof mark))


// //Boolean

// let isDriver=true
// console.log('my string is '+(typeof isDriver))

// //null

// let nullVar=null
// console.log('my string is '+(typeof nullVar))

// //undefined

// let undef=undefined
// console.log('my string is '+(typeof undef))

// //refrence data types

// //arrays
// let myarr=[32,5,7,4,false ,'string']
// console.log('my string is '+(typeof myarr))

// // object litreles

// let stMark=
// {
//     a:453,
//     b:645,
//     c:653
// }
// console.log(stMark)
// console.log('my string is '+(typeof stMark))

// //function
// function findName(){
    
// };
// console.log( typeof findName);

// // Type conyersion and type coercion
// let m;
// m =String (578);

// console.log(typeof m)

// let booleanvar=String(true);
// console.log(booleanvar, (typeof booleanvar ))

// // we can change any type into another type by adding name before value
// //we can also use parsefloat and parsent

// //tofixed is a number function that is used to show specific number after . 


// let string="123"
// let num=324
// console.log(string+num)

// /*string properties 
// 1. concat  : it is used to add one string into another string
// 2. tolowercase is used to change into lower case and touppercase is used to change into upper case 
// 3.index and chraAt 
// 4.endsWith gives gives boolean return 
// 5.includes
// 6.substring provides chracter of string after geting num and slice - provides chracter from last 
// 7.split provide string in break
// 8.replace */



// let fruit1='Apple';
// let fruit2='Mango';
// let myHtml=`Hello ${name_1}
//            <h1> This is heading</h1> 
//            <p> You like ${fruit1} and ${fruit2}
//            `;

// document.body.innerHTML = myHtml;

// const mar = [34,33,54,32,65];
// const fruit=['apple','pineapple','orange'];
// const mixed=[123,'apple',[23,09]];
// const arr=new Array(23,354,); 
//  console.log(mar);
// //  console.log(mixed);
// //  console.log(fruit);
// //  console.log(mar[2]);
// // console.log(Array.isArray(arr.length))
// arr[1]='wd';
// //   console.log(arr);

// let value=mar.indexOf(54);
// // console.log(value)

// //Modifying arras 
// // mar.push(0930293);
// // mar.unshift(0930293);
// // mar.pop()
// // mar.shift()
// // mar.splice(1,2)
// // mar.reverse()
// //concat add another array in array
// console.log(mar)
//  // there can be not equal to condition also 
// const age = 34;
// if (age==19){ 
//     console.log("age is 19")
// }
// else if(age==56){
//     console.log('age is not 56')
// }

// else{
//     console.log('age is not 19')
// }

// for(let i=0; i<100;i++)
// {
//     console.log(i);
// }

// let a= "document";
//  a=["abdullah ","menam ","hurab"];

// Array.from(a).forEach(element => {
//     if((element).includes("ahmad")){
// console.log(a)
//     }
    
// });
// console.log('hello world')

// let element = document.getElementById('id');
// console.log(element);

let element =document.createElement('li');
element.id='11';
element.innerText='hello';
let ul=document.querySelector('ul.this');
ul.appendChild(element);


let element2=document.createElement('li');
element2.id='22';
let tnode=document.createTextNode('this is node');
element2.appendChild(tnode);
element.replaceWith(element2);


document.getElementById('heading').addEventListener(
    'click',function(){
        console.log('you clicked this');
        // location.href='//codewithharry.com'
        
    });



















