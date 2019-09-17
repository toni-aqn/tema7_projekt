//indskrevet javascript kode for produktsiden

//        kalder funktionen hentjson når Dommen er loaded
document.addEventListener("DOMContentLoaded", hentjson);

//        variabler og konstanter
let planter;
let filter = "alle";

const listevisning = document.querySelector(".data_container");
const template = document.querySelector("template");

//      i funktion læses jsonfilen og dataindholdet bliver sat = variablen planter
async function hentjson() {
    console.log("hentjson");

    let myRawjson = await fetch("https://spreadsheets.google.com/feeds/list/1pUeq7DL83r8HprlFhAdWsyy4jInr6mneRbFrKSbq2fY/od6/public/values?alt=json");

    planter = await myRawjson.json();

    //            kalder funktionerne
    informationer();
    addEventlistenerToButton();

}

function informationer() {
    console.log("køre");


    //  indholdet i
    listevisning.innerHTML = "";


    planter.feed.entry.forEach((plante) => {

        if (filter == "alle" || filter == plante.gsx$kategori.$t || filter == plante.gsx$favoritter.$t) {


            const klon = template.cloneNode(true).content;

            klon.querySelector("img").src = `imgs/${plante.gsx$billede.$t}.jpg`;
            klon.querySelector("article h2").textContent = ` ${plante.gsx$navn.$t}`;
            klon.querySelector("article .kort_beskrivelse").textContent = ` ${plante.gsx$kort.$t}`;


            listevisning.appendChild(klon);
            listevisning.lastElementChild.addEventListener("click", () => {
                location.href = `enkeltside.html?nr=${plante.gsx$id.$t}`;
            });

        }

    });
}

function addEventlistenerToButton() {
    document.querySelectorAll(".filter").forEach(elm => {
        elm.addEventListener("click", filtrering);
    });
}

function filtrering() {

    if (this.dataset.kategori) {
        filter = this.dataset.kategori;

        document.querySelector("h2").textContent = this.textContent;
        document.querySelectorAll(".filter").forEach(elm => {
            elm.classList.remove("valgt");
            console.log(`${filter}`);
        });

        this.classList.add("valgt");

        informationer();
    } else if (this.dataset.favoritter) {
        filter = this.dataset.favoritter;

        document.querySelector("h2").textContent = this.textContent;
        document.querySelectorAll(".filter").forEach(elm => {
            elm.classList.remove("valgt");
            console.log(`${filter}`);
        });

        this.classList.add("valgt");

        informationer();
    }

}
