const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function(){
    const h1Card = 1;
    const pCard = 2;
    const imgId = card.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("img").src = `assets/${imgId}.png`
    modalOverlay.querySelector("h1").innerText = card.children[h1Card].innerText;
    modalOverlay.querySelector("p").innerText = card.children[pCard].innerText;
  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector("img").src = "";
  modalOverlay.querySelector("h1").innerText = "";
    modalOverlay.querySelector("p").innerText = "";
})