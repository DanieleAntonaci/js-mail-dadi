let listEmail = [
    'mariorossi@gmail.com',
    'federicagialli@libero.it',
    'stefanoverdi@hotmail.com'
];
let insertName = document.getElementById('email');
let userVerified = false;
let output = document.getElementById('output');

let btnVerification = document.querySelector('button');

btnVerification.addEventListener('click', function () {
    for (let i = 0; i < listEmail.length; i++) {
        const element = listEmail[i];
        if (element == insertName.value) {
            output.innerHTML = 'Sei uno degli invitai alla festa';
            output.style.color = "chartreuse";
            userVerified = true;
        };
    };
    if (!userVerified) {
        output.innerHTML = 'Mi dispiace, non sei uno degli invitati alla festa';
        output.style.color = "red";
    }
})