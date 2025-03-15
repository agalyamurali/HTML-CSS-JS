
var sidenav = document.querySelector(".side-navbar")
function show(){
    sidenav.style.left = "0"
}

function closebar(){
    sidenav.style.left= "-60%"
  
}

//collections js

var products = document.getElementById("productlist")
var input = document.getElementById("search")
var productitems = products.querySelectorAll("div")

input.addEventListener("keyup",function(event){
    var input_val = event.target.value

    for(var i = 0; i< productitems.length; i++){
        var productname = productitems[i].querySelector("p").textContent
        if(productname.indexOf(input_val)<0){
                productitems[i].style.display = "none"
        }
        else{
            productitems[i].style.display = "block"
        }
    }

})