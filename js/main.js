let count = document.querySelectorAll(".count");
let scrollTop = document.getElementById("scrollTop");


count.forEach((item) => {
    let counter = 1


    setInterval(() => {
        item.innerHTML = counter + "+";
        counter++;

        if (counter == 600) {
            counter = 0;
        }
    }, )


})






window.onscroll = function() {
    if (this.scrollY > 500) {
        scrollTop.classList.replace("d-none", "d-block")
    } else {
        scrollTop.classList.replace("d-block", "d-none")
    }
}

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})