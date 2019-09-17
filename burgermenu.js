//kalder funtionen sidenVises når siden er loaded
window.addEventListener("load", sidenVises);

//lytter om der bliver klikket på menuknappen
function sidenVises() {
    console.log("sidenVises igen");


    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

//funktionen åbner og lukker burgermenuen
function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    //indstillinger når burgermenuen er lukket
    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector("section").classList = "";
        document.querySelector("#menuknap").style.color = "#3b3b3b";

        //indstillinger når burgermenuen er åben
    } else {
        document.querySelector("#menuknap").textContent = "X";
        document.querySelector("section").classList = "hidden";
        document.querySelector("#menuknap").style.color = "white";
    }
}
