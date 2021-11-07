let getButton = document.querySelector('#changeBG');
let getBackground = document.querySelector('.d1');
let getShadow = document.querySelector('.form');
let getDarkButton = document.querySelector('.teste');

function change() {
    getBackground.classList.toggle('dark');
    getShadow.classList.toggle('shadow');
    if(getDarkButton.classList.toggle('darkButton')){
        getDarkButton.innerText = 'Modo Claro'
    } else {
        getDarkButton.innerText = 'Modo Escuro'
    }
}
getButton.addEventListener('click', change);


let getInformation = document.querySelector('#send');

getInformation.addEventListener('click', function(event){
    event.preventDefault();
    let user = document.querySelector('#login');
    let value = user.value;
    alert(`Olá ${value}, Seja Bem Vindo!`);
})