var a = 8;
while(a){
	var st = "";
	if(a%2==0){
		for (var i = 0; i<4 ; i++){
			st+='# ';
		}
	}else{
		for (var i = 0; i<4 ; i++){
			st+=' #';
		}
	}
	console.log(st);
	a--;
}


// object

var t = new Object();
var y = {};

var humen = new Object();
	humen.name = 'Vitalik';
	humen.age = 21;
	delete humen.age;

	if ('name' in humen){
		console.log('1');
	}
	//or
	console.log(humen.name);
	humen['name'] = 'Taras';


	var user = {
		bottom : '10px',
		top :{
			margin : '20px',
		},
	}
    console.log(user.top.margin)



    var user2 = new Object();
     user2.name  = 'Sergey';
     user2.surname = 'Petrov';
     user2.name = 'Andrey';
     user2.age = 30;
     delete user2.name;
     console.log(user2)





     for (key in user){
     	console.log(key);
     }


     var counter = 0;
     for (var item in user2){
     	counter ++;
     }
     console.log(counter);




     user2 = {

     };

     function TodoList(obj){
     	for (var item in obj){
     		return false;
     	}
     	return true;  	
     }

     console.log(TodoList(user2));

     user2['homework'] = 'lesson5';

 	 console.log(TodoList(user2));




 	 function SummSallary(obj){
 	 	var summ = 0;
 	 	for (var item in obj){
 	 		summ += obj[item];
 	 	}
 	 	return summ;
 	 }


 	 user2 = {
 	 	first : 200,
 	 	second : 100,
 	 	third : 10
 	 }
 	console.log(SummSallary(user2));


 	// значення обёєктів передаєтьтся по силці 
 	// щоб не міняти одне значення в одному обєкті і в іншому ловити баг , треба зробити перезапис на for in item[key]


 	// array is object

 	var arr = [];

 	var arr2 = ['Egg' , 'Lemon' , 'Apple'];

 	console.log(arr2[2]);
 	arr2[3] = 'orange';
	console.log(arr2.length);



	// function in array 

	arr2.pop();
	console.log(arr2);
	arr2.push('22');
	console.log(arr2);
	arr2.unshift("33");
	console.log(arr2);
	arr2.shift();
	console.log(arr2);
	var b = new Array(2,1);
	console.log(b);

	arr3 = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
	];

	console.log(arr3);





	//practics

	arr2.pop();

	function oldArr(arr){
		return arr[arr.length-1];
	}

	console.log(oldArr(arr2));


	function pushItem(arr,item){
		var f = new Array;
		for (var i = 0; i<arr.length;i++){
			f[i] = arr[i];	
		}
		f.push(item);
		return f;
	}


	console.log(pushItem(arr2,true));
	console.log(arr2);



	var fruits  = ["apple", "orange"];
	fruits.push("kiwi");
	fruits[fruits.length-1] = "pear";
	//console.log(fruits[0]);
	fruits.shift();
	fruits.unshift("apricot","peach");
	console.log(fruits);


	function ranNum(arr){
		var num = 0 + Math.floor(Math.random()*((arr.length-1)+1-0));
		return arr[num];
	}

	arr2 = [1,2,3,4,5,6,7,8,9];
	console.log(ranNum(arr2));



	function find(arr,value){
		for(var j =0; j<arr.length; j++){
			if(arr[j]==value){
				return j;
			}
		}
		return -1;
	}

	console.log(find(arr2,1));


	function filtr(arr,a,b){
		var e = [];
		for(var i=0;i<arr.length;i++){
			if(arr[i]>=a && arr[i]<=b ){
				e.push(arr[i]);
			}
		}
		return e;
	}

	console.log(filtr(arr2,1,3));





