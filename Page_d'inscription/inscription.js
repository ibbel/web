const send = (event) =>{            
    event.preventDefault()
    console.log(event)
    for(let elem of event.target){
        console.log(elem.value)
    }
}

document.querySelector("#FormInscription").addEventListener('submit', send)

// const send = (event) => {
//     event.preventDefault()
//     for (let i = 0; i < 6; i++) {
//         console.log(event.target[i].value)
//     }
// }

// document.querySelector('#FormInscription').addEventListener('submit', send)