//---------------- PÀGINES ------------------
let page = "inici";

window.onload = function() {
    changePage("inici")
};

function changePage(newPage) {
    page = newPage
    document.getElementById('inici').style.display = "none";
    document.getElementById('qui-soc').style.display = "none";
    document.getElementById('contacte').style.display = "none";
    document.getElementById('productes').style.display = "none";
    document.getElementById(page).style.display = "block";
    document.getElementById('menu').checked = false;
}

//---------------- INICI ------------------

function popupVarietats(onoff, mel) {
    if (onoff == "off") {
        document.getElementById('overlay-varietats').style.visibility = "hidden";
    document.getElementById('popup-varietats').style.visibility = "hidden";
    }else{
        document.getElementById('overlay-varietats').style.visibility = "visible";
        document.getElementById('popup-varietats').style.visibility = "visible";
        if (mel == "farigola") {
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Farigola";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de farigola és indicada per problemes respiratoris de caràcter inflamatori com tos consulsiva i asma Antisèptica i eficaç en estats depressius. Reguladora de la tensió arterial."
        }else if (mel == "bruc") {
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Bruc";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de bruc és diürètica, energitzant, reconstituent, rica en ferro, útil en anèmia, reumatisme, desmineralitzacions i produeix un efecte tònic al cos."
        }else if (mel == "castanyer") {
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Castanyer";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de castanyer estimula la circulació de la sang. Degut a que és una mica astrinyent, és apropiada en cas de diarrea."
        }else if (mel == "arboç") {
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel d'Arboç";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel d'arboç és una mel amargant. Antisèptica de les vies urinàries. Apropiada en cas d'asma i beneficiosa pel fetge."
        }else if (mel == "mil") {
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Mil Flors";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de mil flors és de les més completes, degut a la gran varietat dels diversos tipius de flors, sense que n'hi hagi cap que destaqui. Sabor i color variable segons l'origen de les flors i lloc de procedència."
        }else if (mel == "romani") {
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Romaní";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de romaní és recomanable en trastorns hepàtics, acidesa, úlceres gàstriques i intestinals. Estimulant. Indicada en cas destrès i ansietat."
        }else if (mel == "tiler") {
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Til·ler";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de til·ler és una mel sedant i relaxant. Afavoreix el descans nocturn. Alleuja el mal de cap i calma el tracte digestiu."
        }
    }
}

//---------------- INICI ------------------

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// PRODUCTES

function popupProductes(onoff,nom,preu){
    if (onoff == "off") {
        document.getElementById('overlay-productes').style.visibility = "hidden";
    document.getElementById('popup-productes').style.visibility = "hidden";
    document.getElementById('popup-productes-desc-a').style.display = "none";
    }else{
        document.getElementById('overlay-productes').style.visibility = "visible";
        document.getElementById('popup-productes').style.visibility = "visible";
        document.getElementById('popup-productes-desc-a').style.display = "flex";
    }
}