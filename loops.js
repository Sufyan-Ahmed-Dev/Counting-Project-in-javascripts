//  enter =parseInt( prompt("Enter Something"))
// var div = document.getElementById("main")
// for (i=0; i<10 ;i++){
//     h1 = document.createElement("h1")
//     h1.innerHTML = enter
//     div.appendChild(h1)
//     console.log(enter)
// }

count = parseInt(prompt("Enter Your Number"));
var div = document.getElementById("main");

table_tag = document.createElement("table");
div.appendChild(table_tag);


for (i = 1; i <= count; i++) {
    table_row = document.createElement("tr");
    table_tag.appendChild(table_row)
   

  table_data = document.createElement("td");
  table_data.innerHTML = i;

  table_row.appendChild(table_data);
 
}

