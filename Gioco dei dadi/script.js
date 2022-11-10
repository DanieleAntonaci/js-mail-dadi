let btn = document.querySelector('button');

btn.addEventListener('click',

    function () {
        let user = Math.floor(Math.random() * 6) + 1;;
        let computer = Math.floor(Math.random() * 6) + 1;
        let output = document.querySelector('h1')

        if (user > computer) {
            output.innerHTML = "Complimenti hai vinto";
        } else if (user < computer) {
            output.innerHTML = "Mi dispiace hai perso";
        } else {
            output.innerHTML = "Avete pareggiato"
        }
    }
);