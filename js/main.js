let inizia = document.querySelector(".inizia")
let difficolta
const griglia = document.querySelector(".griglia")

inizia.addEventListener("click", function () {
    difficolta = document.getElementById("difficolta").value

    for (let i = 1; i <= 100; i++) {
        const quadrato = document.createElement("div");
        quadrato.classList.add("q-easy")

        griglia.append(quadrato)

        quadrato.addEventListener("click", function () {
            quadrato.classList.add("clicked")
            console.log(i)
        })
    }

})