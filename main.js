const mostrar = document.getElementById("player");



const reproducir = (data) => {
    const arr=data;
    const box= document.getElementById('player');
    arr.forEach(element => {
       box.innerHTML=`<div class="imgs">${element["Poster"]}</div>` 
    });
    }
    mostrar.innerHTML = reproducir(MARVEL);