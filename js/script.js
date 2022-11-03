let container = document.querySelector(".container");
let container_medium = document.querySelector(".container_medium");
let container_hard = document.querySelector(".container_hard");
let livello = document.querySelector(".livello");
let play = document.querySelector(".play");
let indiceSelezionato = livello.selectedIndex;
let valoreSelezionato = livello.options[0];
let valueOption = valoreSelezionato.value;

for (let i = 1; i <= 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.append(cell);
    cell.innerHTML = i;
    cell.addEventListener("click", function () {
        cell.classList.toggle("active");
    });
};


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let cell = document.querySelector(".cell")
const arrNrandom = [];

play.addEventListener("click", function () {
    container.replaceChildren()
    if (livello.value === "Easy") {
        container_medium.classList.add("display_none");
        container_hard.classList.add("display_none")
        container.classList.remove("display_none");

        for (let i = 1; i <= 100; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            container.append(cell);
            cell.innerHTML = i;



            cell.addEventListener("click", function () {
                cell.classList.toggle("active");
            });

        };

        let randomNumber;
        for (let i = 1; i <= 16; i++) {
            do {
                randomNumber = getRandomInteger(1, 16);
            } while (arrNrandom.includes(randomNumber))
            arrNrandom.push(randomNumber);
            console.log(arrNrandom)
            if (arrNrandom.includes(randomNumber)) {

                cell.style.color = "red"

            }
        }


    } else if (livello.value === "Medium") {
        container_medium.replaceChildren()
        container_medium.classList.remove("display_none");
        container.classList.add("display_none");
        container_hard.classList.add("display_none");
        for (let i = 1; i <= 81; i++) {
            let cell_medium = document.createElement("div");
            cell_medium.classList.add("cell_medium");
            container_medium.append(cell_medium);
            cell_medium.innerHTML = i;
            cell_medium.addEventListener("click", function () {
                cell_medium.classList.toggle("active");
            });
        };
    } else {
        container_hard.replaceChildren()
        container_hard.classList.remove("display_none");
        container.classList.add("display_none");
        container_medium.classList.add("display_none");
        for (let i = 1; i <= 49; i++) {
            let cell_hard = document.createElement("div");
            cell_hard.classList.add("cell_hard");
            container_hard.append(cell_hard);
            cell_hard.innerHTML = i;
            cell_hard.addEventListener("click", function () {
                cell_hard.classList.toggle("active");
            });
        };

    }
})