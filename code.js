//---------------- PÀGINES ------------------
let page = "inici";

function changePage(newPage,footer) {
    page = newPage
    document.getElementById('inici').style.display = "none";
    document.getElementById('qui-soc').style.display = "none";
    document.getElementById('contacte').style.display = "none";
    document.getElementById('productes').style.display = "none";
    document.getElementById('carro').style.display = "none";
    document.getElementById(page).style.display = "block";
    document.getElementById('menu').checked = false;
    if (footer == "on"){
        document.getElementById('footer').style.display = "block";
    }else{
        document.getElementById('footer').style.display = "none";
    }
    if (page == "productes"){
        document.getElementById('input-buscador').value = "";
        for (let i = 0; i < 28; i++) {
        document.querySelectorAll('.card-productes')[i].style.display = "flex";
        
        }
        document.getElementById('no-resultat-buscador').style.display = "none";
    }
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
            document.getElementById('popup-vairetats-img').src = "./img/farigola-50.png"
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Farigola";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de farigola és indicada per problemes respiratoris de caràcter inflamatori com tos consulsiva i asma Antisèptica i eficaç en estats depressius. Reguladora de la tensió arterial."
        }else if (mel == "bruc") {
            document.getElementById('popup-vairetats-img').src = "./img/bruc-50.png"
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Bruc";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de bruc és diürètica, energitzant, reconstituent, rica en ferro, útil en anèmia, reumatisme, desmineralitzacions i produeix un efecte tònic al cos."
        }else if (mel == "castanyer") {
            document.getElementById('popup-vairetats-img').src = "./img/castanyer-50.png"
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Castanyer";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de castanyer estimula la circulació de la sang. Degut a que és una mica astrinyent, és apropiada en cas de diarrea."
        }else if (mel == "arboç") {
            document.getElementById('popup-vairetats-img').src = "./img/arboç-50.png"
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel d'Arboç";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel d'arboç és una mel amargant. Antisèptica de les vies urinàries. Apropiada en cas d'asma i beneficiosa pel fetge."
        }else if (mel == "mil") {
            document.getElementById('popup-vairetats-img').src = "./img/milflors-50.png"
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Mil Flors";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de mil flors és de les més completes, degut a la gran varietat dels diversos tipius de flors, sense que n'hi hagi cap que destaqui. Sabor i color variable segons l'origen de les flors i lloc de procedència."
        }else if (mel == "romani") {
            document.getElementById('popup-vairetats-img').src = "./img/romani-50.png"
            document.getElementById('popup-varietats-tittle-h4').innerHTML = "Mel de Romaní";
            document.getElementById('popup-vairetats-desc-p').innerHTML = "La mel de romaní és recomanable en trastorns hepàtics, acidesa, úlceres gàstriques i intestinals. Estimulant. Indicada en cas destrès i ansietat."
        }else if (mel == "tiler") {
            document.getElementById('popup-vairetats-img').src = "./img/tiler-50.png"
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

function popupProductes(onoff,nom,preu,desc,foto){
    if (onoff == "off") {
        document.getElementById('overlay-productes').style.visibility = "hidden";
    document.getElementById('popup-productes').style.visibility = "hidden";
    document.getElementById('popup-productes-desc-a').style.display = "none";
    }else{
        document.getElementById('overlay-productes').style.visibility = "visible";
        document.getElementById('popup-productes').style.visibility = "visible";
        document.getElementById('popup-productes-desc-a').style.display = "flex";
        document.getElementById('popup-productes-tittle-h4').innerHTML = nom;
        document.getElementById('popup-productes-preu').innerHTML = preu;
        document.getElementById('popup-productes-desc-p').innerHTML = desc;
        document.getElementById('popup-productes-img-2').src = foto;
        document.getElementById('popup-productes-img-1').src = foto;
    }
}

//---------------- CARRO ----------------


let carro = [];
titleEquals = false;
totalPrice = 0;

function productesCarro(){
    titleEquals = false;

    const itemTitle = document.getElementById('popup-productes-tittle-h4').innerHTML
    const itemPrice = parseInt(document.getElementById('popup-productes-preu').innerHTML.split(" ")[0])
    const itemDescription = document.getElementById('popup-productes-desc-p').innerHTML
    const itemImg = document.getElementById('popup-productes-img-2').src
    console.log(itemPrice)
    const newItem = {
        title: itemTitle,
        description: itemDescription,
        image: itemImg,
        price: itemPrice,
        priceforone: itemPrice,
        quantity: 1
    }
    console.log(newItem)
    
    for (var i = 0; i < carro.length; i++) {
        console.log(carro[0].title)
        if (newItem.title == carro[i].title) {
            titleEquals = true;
            carro[i].quantity = parseInt(carro[i].quantity) + parseInt(newItem.quantity)
        }
    }
    if (titleEquals == false) {
        carro.push(newItem)
        console.log("title equals")
    }
    renderCarro()
    popupProductes("off");

    document.getElementById('notificacio').style.transform = "translate(0,210px)";
    setTimeout(() => {
        document.getElementById('notificacio').style.transform = "translate(0,0px)";
    }, 3000);
}


function renderCarro(){
    totalPrice = 0;

    document.getElementById('elements-carro-num').innerHTML = carro.length

    carroProductesDelete = document.getElementById('carro2')
    carroProductesDelete.remove()
    carroBack = document.getElementById('carro1')
    carroProductes = document.createElement('div')
    carroProductes.setAttribute('id','carro2')
    carroBack.append(carroProductes)

    carroRightProductesDelete = document.getElementById('carro-right-2')
    carroRightProductesDelete.remove()
    carroRightBack = document.getElementById('carro-right-1')
    carroRightProductes = document.createElement('div')
    carroRightProductes.setAttribute('id','carro-right-2')
    carroRightBack.append(carroRightProductes)

    for (let i = 0; i < carro.length; i++) {
        console.log("rederCarro for")
        console.log(carro.length)
        
        carro[i].price = carro[i].quantity * carro[i].priceforone
        totalPrice = totalPrice + carro[i].price;

        const Content = `
                <div class="carro-tittle">
                    <img class="carro-tittle-img" src="${carro[i].image}" alt="">
                    <h3 class="carro-tittle-h3">${carro[i].title}</h3>
                </div>
                <div class="carro-tittle-right">
                    <div class="carro-desc">
                        <h3 class="carro-desc-h3">${carro[i].description}</h3>
                    </div>
                    <div class="carro-desc-right">
                        <div class="carro-preu">
                            <h3 class="carro-preu-h3">${carro[i].priceforone} €</h3>
                        </div>
                        <div class="carro-preu-right">
                            <div class="carro-quantitat">
                                <input class="carro-quantitat-input" max="99" min="1" value="${carro[i].quantity}" type="number">
                            </div>
            
                            <div class="carro-total">
                                <div class="carro-cross">
                                    <img class="carro-cross-img" src="./img/cross.png" alt="">
                                </div>
                                <h3 class="carro-total-h3">${carro[i].price} €</h3>
                            </div>
                        </div>
                    </div>
                </div>
            `
        cardCarro = document.createElement('div')
        cardCarro.classList.add('carro-left-card')
        cardCarro.innerHTML = Content;
        carroProductes.append(cardCarro)
        cardCarro.querySelector(".carro-quantitat-input").addEventListener('change', sumaQuantitat)
        cardCarro.querySelector(".carro-cross-img").addEventListener('click', removeItemCarro)

        const Content2 = `
                <div class="div-producte-total-l">
                                <p class="productes-total-l-p">${carro[i].title}</p>
                            </div>
                            <div class="div-producte-total-r">
                                <p class="productes-total-r-p">${carro[i].price} €</p>
                            </div>
            `
        cardRightCarro = document.createElement('div')
        cardRightCarro.classList.add('div-producte-total')
        cardRightCarro.innerHTML = Content2;
        carroRightProductes.append(cardRightCarro)
        
    }
    document.getElementById('title-price').innerHTML = "Total: "+totalPrice+" € *";
    addLocalStorage()
}

function sumaQuantitat(e){
    const input = e.target
    const card = input.closest(".carro-left-card")
    const title = card.querySelector('.carro-tittle-h3').textContent;
    for (let i = 0; i < carro.length; i++) {
        if (title == carro[i].title) {
            carro[i].quantity = input.value
        }
    }
    renderCarro()
}

function removeItemCarro(e){
    console.log("remove")
    const input = e.target
    const card = input.closest(".carro-left-card")
    const title = card.querySelector('.carro-tittle-h3').textContent;
    for (let i = 0; i < carro.length; i++) {
        if (title == carro[i].title) {
            carro.splice(i, 1)
        }
    }
    renderCarro()
}

function comprar(){
    prova = ""
    console.log("comprar")
    for (var i = 0; i < carro.length; i++) {
        prova = prova + "%0A" + carro[i].quantity + " de " + carro[i].title + " --> " + carro[i].price + "€"
    }
    prova = prova + "%0A%0ATotal: " + totalPrice + "€ (enviament no inclòs)"

    mailContent = `mailto:labellarepublicana@gmail.com?subject=Comanda de mel&body=${prova}`
    document.getElementById('button-carro').href = mailContent;
    carro = []
    renderCarro()
}

function missatge(){
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || !document.getElementById('email').value.includes("@") || document.getElementById('message').value == ""){
        if (document.getElementById('name').value == ""){
            document.getElementById('name').style.border = "2px solid #be0000";
            document.getElementById('name-label').style.color = "#be0000";
            setTimeout(() => {
                document.getElementById('name').style.border = "2px solid #fafafa";
                document.getElementById('name-label').style.color = "white";
            }, 2000);
        }
        if (document.getElementById('email').value == "" || !document.getElementById('email').value.includes("@")){
            document.getElementById('email').style.border = "2px solid #be0000";
            document.getElementById('email-label').style.color = "#be0000";
            setTimeout(() => {
                document.getElementById('email').style.border = "2px solid #fafafa";
                document.getElementById('email-label').style.color = "white";
            }, 2000);
        }
        if (document.getElementById('message').value == ""){
            document.getElementById('message').style.border = "2px solid #be0000";
            document.getElementById('message-label').style.color = "#be0000";
            setTimeout(() => {
                document.getElementById('message').style.border = "2px solid #fafafa";
                document.getElementById('message-label').style.color = "white";
            }, 2000);
        }
    }else{
        mailContent = `mailto:labellarepublicana@gmail.com?subject=Contacte [${document.getElementById('name').value}]&body=${document.getElementById('message').value}%0A%0A${document.getElementById('name').value}%0A${document.getElementById('email').value}%0A${document.getElementById('phone').value}`
        document.getElementById('button-missatge').href = mailContent;
    }
}

document.getElementById('input-buscador').addEventListener('change', (event) => {
    
    x = String(document.getElementById('input-buscador').value.split(" ")[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    if (x == ""){
        for (let i = 0; i < 28; i++) {
        document.querySelectorAll('.card-productes')[i].style.display = "flex";
        
        }
        document.getElementById('no-resultat-buscador').style.display = "none";
    }else{
        for (let i = 0; i < 28; i++) {
        document.querySelectorAll('.card-productes')[i].style.display = "none";
        }
        for (let index = 0; index < document.querySelectorAll('.'+x).length; index++) {
            document.querySelectorAll('.'+x)[index].style.display = "flex";
        }
        if (document.querySelectorAll('.'+x).length <= 0) {
            document.getElementById('no-resultat-buscador').style.display = "flex";
        }else{
            document.getElementById('no-resultat-buscador').style.display = "none";
        }
    }
});

function addLocalStorage(){
  localStorage.setItem('carro', JSON.stringify(carro))
}

window.onload = function(){
    changePage("inici","on")
  const storage = JSON.parse(localStorage.getItem('carro'));
  if(storage){
    carro = storage;
    renderCarro()
  }
}