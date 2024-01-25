const form = document.forms[0];
const outcome = document.querySelector('input[type="hidden"]');
const btns = document.querySelectorAll(".spans input");
btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    btns.forEach(function (bt) {
      if (bt == e.target) {
        bt.classList.remove("normal");
        bt.classList.add("clicked");
        outcome.value = e.target.value;
      } else {
        bt.classList.remove("clicked");
        bt.classList.add("normal");
      }
    });
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (outcome.value != "") {
    document.querySelector(".main").classList.add("result");
    document.querySelector(".thn").classList.add("res");
    document.querySelector(".thn").classList.remove("thn");
    document.querySelector(".selected").textContent = outcome.value;
  } else {
    document.querySelector(".main").classList.remove("result");
    document.querySelector(".thn").classList.add("thn");
    document.querySelector(".thn").classList.remove("res");
  }
});
