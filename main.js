menuListArray = ["Pizza Vegetariana",
"Pizza de frango", "Pizza potuguesa", "Pizza de quatro queijos", "Pizza de calabresa", "Pizza Extravaganza"                    ];

function getMenu(){
    var htmldata;
    menuListArray.sort();
    for(var i=0; i<menuListArray.length;i++){
        htmldata=htmldata+menuListArray[i]+'<br>'
    }
    document.getElementById("displayMenu").innerHTML= htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""

var imgtags= '<img id="im1" src="images/pizzaImg.png"/>'

for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+menuListArray[i]+'<br>';

}
    document.getElementById("displayAddedMenu").innerHTML= htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();   
}