// ARR function


//split

var arr = [1,2,3,4,5,6,7,8,9];
var s = 'Get, sun, her';
console.log(s.split(', '));
console.log(arr.reverse().join(' '));

delete arr[8]; //undefined


arr.splice(1,1);
console.log(arr);

arr = [1,2,3,4];
arr.splice(-1,0,'1')
console.log(arr);


console.log(arr.slice(1,4));

///sort

var arr2 = [3,4,2,1,1209,1223];
function compareNumeric(a, b) {
 if (a > b) return 1;
 if (a < b) return -1;
 return 0;
}
var arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
//or
console.log(arr2.sort(function(a, b) { return b-a }));

var arr3 = [1,4,1,2,3 ,'rewr' ,11 , 8 , 5 , 'vitalik'];

arr3.sort((function(a,b){
	if(+a && +b){
		return a-b;
	}else if(+b){
		return -1;
	}else{
		return 1;
	}
}));
console.log(arr3)




//function arr

console.log(arr3.reverse());
// concat for cluster array 
console.log(arr3.concat(10,11));
//LastindexOf
console.log(arr3.indexOf(1));



var user = {
	name: 'Vitalik',
	age: 18
}
// not for in
var keys = Object.keys(user);

console.log(keys);


var obj2 = {
	className: 'open menu'
}

function  addClass(obj,name){
	var arr = obj.className.split(' ');
	for (var i = 0; i<= arr.length; i++) {
		if(arr[i] == name)
			return obj;
	}

	return obj.className + ' '+ name;
}

addClass(obj2, 'new');
addClass(obj2, 'open');
addClass(obj2, 'me');
console.log(obj2);

function toCamelCase(str){
	var arr = str.split('-');
	
	for(var i=1;i<arr.length;i++){
		arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
	}
	return arr.join('');
}

console.log(toCamelCase('-webkit-transition'));

var arr = [5, 2, 1, -10, 8];
arr.sort((function(a,b){
	return b-a;
}))
console.log(arr);


var arr4 = [1,2,3,4];


arr4.forEach(function(item,i,arr){
	console.log( i + ' ' + item + ' ' + arr);
});


var arr = [1, -1, 2, -2, 3];
var positiveArr = arr.filter(function(number) {
 return number > 0;
});
console.log( positiveArr ); 



var names =  ['Есть','жизнь','на','Марсе'];

var nameLengths = names.map(function(name) {
 return name.length / 2;
});

console.log( nameLengths );


// argumets 

function addArguments (){
	var sum = 0;
	console.log(arguments.length);
	for (var i = 0; i < arguments.length ; i++) {
		sum +=  arguments[i];
	}
	return sum;
}

console.log(addArguments(1,2,3,4,5,5));




