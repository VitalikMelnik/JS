//recursion theme , lesson 4 

function pow (x,a){
	if(a != 1){
		return x * pow(x , a-1);
	}else{
		return x;
	}
}

console.log(pow(2,3));

//recursion
function sumTo(n){
	if(n!=1){
		return n + sumTo(n-1);
	}else{
		return n;
	}
}
//for
var t = 0;
for (var n = 4; n>=1;n--) {
	t += n;	
}
//arefmetiks progres
var y = ((1 + 4)*4)/2;
console.log(y);
console.log(t)
console.log(sumTo(4));

//factorial 

function factorial(n){
	var j =0;
	if(n!=1){
		j++;
		return n*factorial(n-j);
	}else{
		return n;
	}
}
console.log(factorial(10));

// іменовані функціональні вираження

var t = function seyHi(){
	console.log("2");
}


//є методи і свойства (методи це функції )(свойства це значення)
function isNumeric(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(Math.round(2.5));
console.log(n.toFixed(2));

function ran1 (min,max){
	return Math.floor(Math.random()*(max - min + 1)) + min;
}

var x,a,b,c = 0;
console.log(ran1(-10,10));
Math.sqrt(x);
Math.log(x);
Math.pow(x, 2);
Math.abs(x);
Math.exp(x);
Math.max(a, b, c);
Math.min(a, b, c);
Math.random();

// string

var st = "String".length;
console.log(st);
var st = "String";
console.log(st[2]);
console.log(st.indexOf("St"));

// різниця коли береш відємне число
console.log(st.substr(2,6));
console.log(st.slice(2,6));

function firstLetter(s){
	if(s==''){
		return '';
		}else{
	return s[0].toUpperCase() + s.slice(1,s.length);
	}
}

console.log(firstLetter('het'));