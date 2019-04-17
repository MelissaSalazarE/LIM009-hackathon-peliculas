const box = document.getElementById('player-aven');
const box2 = document.getElementById('player-aven2');
const dataMarvel= MARVEL.marvel;
console.log(dataMarvel);

const reproducir = (arr,box) => {
   arr.forEach(elem => {
      box.innerHTML += `<div class="cuadros"><img class="imgs" src=${elem["imagen"]}></div>`
   });
};

const select = document.getElementById("aven1");
select.addEventListener("click", () => {
   const properity = MARVEL["AVENGERS"];
   let arr = [];
   arr.push(properity[0]);
   box.style.display="block";
   reproducir(arr,box);
});

const select2 = document.getElementById("CapiAmerica");
select2.addEventListener("click", () => {
   box2.style.display="block";
   reproducir(MARVEL["CAPITAN"],box2);
});