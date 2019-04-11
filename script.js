var elogios = [
    "Diva sem defeitos",
    "Não é github, mas é gatinho",
    "Máquina de vencer", 
    "Maravilindo",
    "Fada sensata",
    "Joia rara",
    "Sexy",
    "Sensual seduction",
    "Rihanna",
    "Beyoncé",
    "Lacrador",
    "Militudo",
];

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}
