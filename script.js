const input = document.getElementById("in");
let list = document.querySelector("#list");
const button = document.querySelector("#btn");

function storage() {
    localStorage.setItem("data" ,list.innerHTML )
    
}

function showdata(){
    list.innerHTML = localStorage.getItem("data");
    
}


button.addEventListener("click" , function(){

    if(input.value === "")
    {
        alert("Please add SomeItems");
    }else{
       
         let li = document.createElement("li");
         li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       
    }

    input.value = ""
    storage();
})

list.addEventListener("click" , function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storage();
    }
})


showdata();
