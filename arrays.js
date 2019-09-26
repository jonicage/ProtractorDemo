var a=5;
var b=["helo","world","member",4,"goodbay"];

// for(var i=0;i<5;i++)
// {	
// 	var f=i;
	
// 	console.log(f+": "+b[i]);
// }


// for(var i=0;i<b.length;i++)
// {	
// 	var f=i;
	
// 	console.log(f+": "+b[i]);
// }


var c = new Array();
c[0]= "goodbay";
c[1]=4;
c[2]= "world";
c[3]= "member";
c[4]= "world";

console.log(c.length);
console.log(c);

for(var i=0;i<c.length;i++)
{	
	var f=i;
	
	console.log(f+": "+c[i]);
}

//Print the array at reverse 
for(var j=c.length-1;j>=0;j--)
{	
	var f=j;
	
	console.log(f+": "+c[j]);
}