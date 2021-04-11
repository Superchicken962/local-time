var lightingmode = "light";
var doc = document.body;

// finding and storing the maintenance gifs in variables
var greygif = document.getElementById("maintenancegifgrey");
var normalgif = document.getElementById("maintenancegif");
var maintenance_lightsbutton = document.getElementById("maintenancelightbutton"); // gets the lights button in maintenance so the text can be changed later
greygif.style.display = "none"; // hiding the grey gif on load / reload
// getting the text and storing it in a variable

function maintenance_changelighting() {
    if (lightingmode == "light") {
        lightingmode = "dark";
    } else if (lightingmode == "dark") {
        lightingmode = "light";
    }
}
setInterval("maintenance_checklighting()", 100);

function maintenance_checklighting() {
    if (lightingmode == "dark") {
        doc.style.backgroundColor = "grey";
        normalgif.style.display = "none";
        greygif.style.display = "block";
        doc.style.color = "white";
        maintenance_lightsbutton.innerText = "Lights On";
    }
    else if (lightingmode == "light") {
        doc.style.backgroundColor = "aliceblue";
        normalgif.style.display = "block";
        greygif.style.display = "none";
        doc.style.color = "black";
        maintenance_lightsbutton.innerText = "Lights Off";
    }
}