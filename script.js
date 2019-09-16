    window.addEventListener("load", sidenVises);

    function sidenVises() {
        console.log("sidenVises igen");


        document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    }


    function toggleMenu() {
        console.log("toggleMenu");
        document.querySelector("#menu").classList.toggle("hidden");

        let erSkjult = document.querySelector("#menu").classList.contains("hidden");

        if (erSkjult == true) {
            document.querySelector("#menuknap").textContent = "☰";
            document.querySelector("section").classList = "";
            document.querySelector("#menuknap").style.color = "#3b3b3b";
        } else {
            document.querySelector("#menuknap").textContent = "X";
            document.querySelector("section").classList = "hidden";
            document.querySelector("#menuknap").style.color = "white";
        }
    }
