let ukupanRacun = 0;

function addToCart(proizvod) {
    let mainEl = proizvod.closest('.single-item');
    let cijena = mainEl.querySelector('.price').innerText;
    let naziv = mainEl.querySelector('h3').innerText;
    // KOLIČINA MORA BITI NUMBER
    let kolicina = Number(mainEl.querySelector('input').value);

    // AKO JE UNESENA KOLIČINA VEĆA 0, onda...
    if (kolicina > 0) {
        let cartItems = document.querySelector('.cart-items');
        let ukupnaCijena = parseInt(cijena.substring(1)) * kolicina;
        ukupanRacun += ukupnaCijena;

        cartItems.innerHTML += `<div class="cart-single-item">
            <h3>${naziv}</h3>
            <p>${cijena} x ${kolicina} = $<span>${ukupnaCijena}</span></p>
            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
        </div>`;

        let total = document.querySelector('.total').innerText = `Total: $${ukupanRacun}`;


        proizvod.innerText = 'Dodato';
        proizvod.setAttribute('disabled', 'disabled');
    }
}

function removeFromCart(button) {
    let mainEl = button.closest('.cart-single-item');
    let cijena = Number(mainEl.querySelector('p span').innerText);
    let naziv = mainEl.querySelector('h3').innerText;
    let sviProizvodi = document.querySelectorAll('.single-item');
    ukupanRacun -= cijena;

    document.querySelector('.total').innerText = `Total: $${ukupanRacun}`;

    mainEl.remove();

    sviProizvodi.forEach(function (proizvod) {
        if (proizvod.querySelector('.si-content h3').innerText === naziv) {
            proizvod.querySelector('.actions input').value = 0;
            proizvod.querySelector('.actions button').removeAttribute('disabled');
            proizvod.querySelector('.actions button').innerText = 'Dodaj';
        }
    })

    console.log("Radi reda");
}