function changetext() {
    let fpara=document.getElementById('first');
    fpara.textContent="hello pranit"
}

let fpara=document.getElementById('first');

fpara.addEventListener('click',changetext);