const send = (event) =>{            
    event.preventDefault()
    console.log(event)
    for(let elem of event.target){
        console.log(elem.value)
    }
}

document.querySelector("#FormConnexion").addEventListener('submit', send)