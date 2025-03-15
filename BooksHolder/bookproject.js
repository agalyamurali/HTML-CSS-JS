var addbtn = document.querySelector(".addbtn")
var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup") 

addbtn.addEventListener("click",function(){
    overlay.style.display = "block"
    popup.style.display = "block"
})
 
var cancel = document.querySelector(".cancel")
cancel.addEventListener("click",function (){
    overlay.style.display = "none"
    popup.style.display = "none"
})

var update = document.querySelector(".update")
function add(){
    
    var books_container = document.querySelector(".bookscontainer")
    var entered_title = document.querySelector("#title").value
    var entered_name = document.querySelector("#author").value
    var entered_detail = document.querySelector("#description").value
    

    if(!entered_title || !entered_name){
        alert("Enter book name and title")
        return
    }
        
    var body = document.createElement("div")
    body.setAttribute("class","container")
    
    /*body.innerHTML = `<h2>${entered_title}</h2>
                        <h3>${entered_name}</h3>
                        <p>${entered_detail}</p>
                        <button>delete</button> `
    books_container.append(body) */
    
    var title = document.createElement("h2")
    var author = document.createElement("h3")
    var para = document.createElement("p")
    var del = document.createElement("button")
    del.textContent = "delete"
    del.onclick = function(){
        body.remove()
    }

    title.textContent = entered_title
    author.textContent = entered_name
    para.textContent = entered_detail

    body.append(title,author,para,del)
    books_container.append(body)
   
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#description").value = ""
    
  

    overlay.style.display = "none";
    popup.style.display = "none";
}

