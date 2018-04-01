//console.log("2");
//vubirka

var x = prompt('write number');

switch(x){
	case 3:
		console.log("3");
		break;
	case 4: 
	case 5:
		console.log("4");
		break;
	default :
		console.log("2");
		break;
}	

var browser = 'IE'; //0,1,2,3,4

if (browser == 'IE'){
	alert('IE bad browser');
}else if (browser =='Chrome' || browser == 'Safari' || browser == 'Opera' || browser == 'Firefox'){
	alert('Good browser');
}else{
	 alert('Who this PC?');
}

switch (browser) {
    case 'IE':
        alert('IE bad browser');
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Good browser');
        break;
    default:
        alert('Who this PC?');
}


var b = 4;
switch(b){
	case 1 :
		console.log('1');
		break;
	case 2 : 
		console.log('2');
		break;
	case 3 :
	case 4 :
		console.log('3,4');
	default :
		b=0;				 
}
outer:for (var i = 0; i <= 10; i++) {
	console.log(i);
	if (i==3){
		break outer;
	}
}
var i = 0;
while (i<=10){
	console.log(i);
	i+=2;
}
for (var j = 0; j<=10 ; j+=2){
	console.log(j );
}
for (var  k = 0, g =''; k<= 7; k++){
	g+='#'; 
	console.log(g + '\n');
}



//function



function showMessages(){
	console.log('function');
}

showMessages();

var name = 'Vitalik';

function changeName(){
	name = 'Ira';
}
console.log(name);
changeName();
console.log(name);





function add (a,b){
	return a+b;
}
var c = add(2,2);
 console.log(c);

 function poriv(a,b){
 	if (a>b){
 		return b;
 	}else if (a<b){
 		return a;
 	}else 
 		return "ravno";
 }



 var c = poriv(2,-2);
 	console.log(c);

















