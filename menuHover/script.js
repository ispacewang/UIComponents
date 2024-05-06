const home = document.querySelector(".home");

const off = document.querySelector(".off");
const on = document.querySelector(".on");

// 监听事件
home.addEventListener("click", () => {
  if (off.classList.contains("hidden")) {
    on.classList.add("hidden");
    off.classList.remove("hidden");
    home.classList.remove("active");
  } else {
    off.classList.add("hidden");
    on.classList.remove("hidden");
    home.classList.add("active");
  }
});
