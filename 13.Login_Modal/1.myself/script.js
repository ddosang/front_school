const modal = document.querySelector(".login-modal");

const btn = document.querySelector(".login-box__btn-login");

function modalAppear() {
    modal.classList.toggle("on");
}

btn.addEventListener("click", modalAppear);