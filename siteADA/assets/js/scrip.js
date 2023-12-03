


function inverterCor() {
    let span = document.querySelectorAll('span');
    for (let i = 0; i < span.length; i++) {
        span[i].classList.toggle('mudar-cor-click');
    }

}

const btnlogin = document.querySelector('.btn-login');
const btnMudarCor = document.querySelector('.mudar-cor');

let corAtualRosa = '#FF5678';

btnMudarCor.addEventListener('click'), function () {
    if (corAtualRosa === '#FF5678') {
        corAtualRosa = '#35E6E9';
    } else {
        corAtualRosa = '#FF5678';
    }

    btnlogin.style.backgroundColor = corAtualRosa;
};