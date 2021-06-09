let row = document.querySelector("row")
let space = document.getElementsByClassName('space')

for(let i=0; i < space.length;i++){
    space[i].addEventListener('click', function(){

        if(space[i].querySelector('h3').innerText){
            alert(space[i].querySelector('h3').innerText)
        }
        if(space[i].querySelector('h2').innerText){
            alert(space[i].querySelector('h2').innerText)
        }
        alert(space[i].id + "," + (i+1))
    })
}

