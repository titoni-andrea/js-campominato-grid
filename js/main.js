let inizia = document.querySelector(".inizia")
let difficolta
const griglia = document.querySelector(".griglia")

inizia.addEventListener("click", function () {
    difficolta = document.getElementById("difficolta").value

    if (difficolta == "facile") {
    griglia.innerHTML = ""

    for (let i = 1; i <= 100; i++) {
        const quadrato = document.createElement("div");
        quadrato.classList.add("q-easy")

        griglia.append(quadrato)

        quadrato.addEventListener("click", function () {
            quadrato.classList.add("clicked")
            console.log(i)
        })
    }
    }
    else if (difficolta == "media") {
        griglia.innerHTML = ""

        for (let i = 1; i <= 81; i++) {
            const quadrato = document.createElement("div");
            quadrato.classList.add("q-medium")
    
            griglia.append(quadrato)
    
            quadrato.addEventListener("click", function () {
                quadrato.classList.add("clicked")
                console.log(i)
            })
        }
    }

    else {
        griglia.innerHTML = ""
        
        for (let i = 1; i <= 49; i++) {
            const quadrato = document.createElement("div");
            quadrato.classList.add("q-difficult")
    
            griglia.append(quadrato)
    
            quadrato.addEventListener("click", function () {
                quadrato.classList.add("clicked")
                console.log(i)
            })
        }
    }

})