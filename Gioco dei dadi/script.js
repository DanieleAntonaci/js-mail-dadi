let btn = document.querySelector('button');

btn.addEventListener('click',

    function () {
        let user = Math.floor(Math.random() * 6) + 1;;
        let computer = Math.floor(Math.random() * 6) + 1;
        let output = document.querySelector('h1')

        if (user > computer) {
            output.innerHTML = "Complimenti hai vinto";
            output.style.color = "green";
        } else if (user < computer) {
            output.innerHTML = "Mi dispiace hai perso";
            output.style.color = "red";
        } else {
            output.innerHTML = "Avete pareggiato"
            output.style.color = "orange";
        }
    }
);