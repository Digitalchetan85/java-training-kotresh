//console.log("Wel cone to Java script");

//alert("welcome");

//document.write("welcome");

// var da = document.getElementById("data");

// console.log(da);
// da.innerHTML = "welcome";

// da.style.color = "red";

// var a = "chetan", b = 5;

// //var b = 5;

// var c = a + b;

// console.log(c);

// console.log(a + b);

// var x = 20, y = 20;

// x += y;

// x = x + y;

// var x = 20, y = 20;

// var z = x + y;

// console.log(z)
// console.log(typeof z)

// console.log(typeof y)

    
    
// if (z === "40")
// {
//     console.log("no");
// }
// else 
// {
//     console.log(z);
// }

// var a = 2, b = 3;

// if (a === "2")
// {
//     document.write("hello");
// }
// else 
// {
//     document.write('sorry');
// }

// var a = 5;

// switch(a)
// {
//     case 0: 
//         document.write("Order Placed");
//         break;

//     case 1:
//         document.write("Order Processing");
//         break;

//     case 2:
//         document.write("Order Processed");
//         break;

//     case 3:
//         document.write("Payment needs to be done");
//         break;

//     default: 
//         document.write("contact Admin");
// }



/*for (var i = 2; i <= 2; i++)
{
    for(var j = 10; j >= 1; j--)
    {
        a = "";
       // document.write(i+"*"+j +"=" +i*j + "<br>");
       a = document.getElementById("data");

       a.innerHTML += ("<br>" +i+"*"+j +"=" +i*j );
    }
}*/


// for (var i = 2; i <= 30; i++)
// {
//     for (var j = 2; j < i; j++)
//     {
//         if (i % j == 0) 
//         {
//             break;
//         } 
//     }

//     if (i == j) {
//         //document.write("Prime No = "+i+"<br>");
//         var a = document.getElementById("data");

//         a.innerHTML +=  ("Prime No = "+i+"<br>");
//     }
// }

// var i = 1;

// var table = 3776;

// while (i <= 10) {
//     //document.write("Prime No = "+i+"<br>");
//     var a = document.getElementById("data");

//     a.innerHTML +=  (table+"*"+i+"="+table*i+"<br>");

//     i++;
// }

// var i = 1;

// var table = 6;

// do {
//     //document.write("Prime No = "+i+"<br>");
//     var a = document.getElementById("data");

//     a.innerHTML +=  (table+"*"+i+"="+table*i+"<br>");

//     i++;
// } while (i <= 10)


// function a() {
//     alert("hello");
// }

// a();

// var a = new function() {
//     alert("second");
// }

// a();

// hen = () => {
//     alert("three");
// }

// hen();

// var x,y,z;

// function add(x,y) {
//     z = x + y;
    
//     //document.write(z);
//     return z;
// }

// add(10,20);

// a = document.getElementById("data");

// a.innerHTML = z;


// var obj = {name: "chetan", subject: "JavaScript"};
// console.log(obj);

// var obj = new Object();
// obj.name = "chetan";
// obj.subject = "Javascript";

// console.log(obj);

// function person(fname,age,city)
// {
//     this.firstname = fname;
//     this.age = age;
//     this.city = city;
// }

// var father = new person("chetan","30","Bangalore");
// var mother = new person("Vijayalakshmi",61,"Bangalore");

// document.getElementById("data").innerHTML = father.firstname+" and age will be "+father.age+" stayed in "+father.city;

// document.getElementById("data1").innerHTML = mother.firstname+" and age will be "+mother.age+" stayed in "+mother.city;


// var obj = { name:"chetan", subject:"Jvascript", City:"Bangalore", state:"Karnataka"};
// //console.log(obj.city); //Key is case Sensitive
// //console.log(City);
// console.log(typeof obj);

// var txt = "";

// for (x in obj) {
//     console.log(x);
//     console.log(obj[x]);
//     console.log(x +"=" + obj[x]);
//     document.getElementById("data").innerHTML += x+ " =" + obj[x]+"<br>";

//var k = Object.keys(obj);

// console.log(k); 

// var k = Object.values(obj);

// console.log(k);
    
//     txt += x+ " =" + obj[x]+ " <br>";
// }

//   document.getElementById("data").innerHTML = txt ;


// var obj = [  
//     { name:"chetan", subject:"Jvascript", City:"Bangalore", state:"Karnataka"},
//     { name:"Kotresh", subject:"Jvascript", City:"Bangalore", state:"Karnataka"},
//     { name:"Praveen", subject:"Jvascript", City:"Bangalore", state:"Karnataka"},
//     { name:"shrinivas", subject:"Jvascript", City:"Bangalore", state:"Karnataka"}
// ];

// console.log(obj);
// console.log(typeof obj);

// var k = Object.keys(obj[0]);

// console.log(k); 

// var k = Object.values(obj[2]);

// console.log(k); 

// var records = "";

// var cols = Object.keys(obj[0]);

// records += "<tr>";

//     for (var i = 0; i < obj.length; i++) {
//         records += "<th>"+cols[i].toUpperCase()+"</th>";
//     }

// records += "</tr>";

// for (var k = 0; k < obj.length; k++) {
//     records += "<tr>";
//         for(var j = 0; j < cols.length; j++) {
//             records += "<td>"+obj[k][cols[j]]+"</td>";
//         }
//     records += "</tr>";
// }

// document.getElementById("records").innerHTML = records;

var arr = [10,20,30,40,50,45,3,53];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}






