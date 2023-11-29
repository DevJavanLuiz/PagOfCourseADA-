document.querySelector('.mudar-cor').addEventListener('click', (e) =>{
    e.target.classList.toggle('.mudar-cor')
    document.body.classList.toggle('dark');
})