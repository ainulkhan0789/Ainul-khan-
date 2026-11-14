let chatsection=document.getElementsByClassName("chatsection")[0]
console.log(chatsection);
let inp =document.getElementsByClassName("inp")[0]
let data ={
    "hi": "hello",
    "how are you":"fine how can i help you!"
}
 let send = function(){
    chatsection.innerHTML+=`<p>${inp.value}</p>`
    let reply = ""
    if(inp.value in data){
        reply=data[inp.value]
    }
    else{
        reply= " sorry i have no data"
    }
    chatsection.innerHTML+=`<p>${reply}</p>`
    inp.value=""
}