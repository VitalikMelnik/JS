// 1 task

var obj = {
  className: 'open menu menu get ret menu menu'
};

function removeCssClass(obj, name){
	var arr = obj.className.split(' ');

	for(var i=0; i<=arr.length;i++){
		if(arr[i] == name){
			arr.splice(i,1);
			i--;
		}	
	}
	obj = arr.join(' ');
	return obj;
}
console.log(removeCssClass(obj , 'menu'));


//2 task

var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = [];
for(var i = 0; i<arr.length;i++){
	arrSorted[i] = arr[i];
}
arrSorted.sort();

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); 


// task 3

var arr = [1,2,3,4,5];

function randomSort(arr){
	var len = arr.length +1;
	arr.sort(function(a,b){
		return b - Math.floor(Math.random()*len);
	})
	return arr;
}

console.log(randomSort(arr));



// task 4

function compareAge(personA, personB) {
  return personA.age - personB.age;
}


var vasya = { name: "V" , age: 23 };
var masha = { name: "M", age: 18 };
var vovochka = { name: "Vova", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);


for(var i = 0; i < people.length; i++) {
  console.log(people[i].name);
}



