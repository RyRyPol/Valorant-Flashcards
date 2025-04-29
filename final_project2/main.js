const term = document.querySelector('.term');
const role = document.querySelector('.role');
const checkButton = document.querySelector('.check');
const nextButton =  document.querySelector('.next');

let words = {
    Brimstone: "Controller",
    Viper: "Controller",
    Harbor: "Controller",
    Omen: "Controller",
    Astra: "Controller",
    Clove: "Controller",
    Jett: "Duelist",
    Waylay: "Duelist",
    Phoenix: "Duelist",
    Yoru: "Duelist",
    Raze: "Duelist",
    Neon: "Duelist",
    Iso: "Duelist",
    Reyna: "Duelist",
    Killjoy: "Sentinel",
    Deadlock: "Sentinel",
    Vyse: "Sentinel",
    Cypher: "Sentinel",
    Sage: "Sentinel",
    Chamber: "Sentinel",
    Sova: "Initiator",
    Skye: "Initiator",
    Tejo: "Initiator",
    Breach: "Initiator",
    Kayo: "Initiator",
    Fade: "Initiator",
    Gekko: "Initiator",
    

}

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    role.innerHTML = `<h4>${randomTerm[1]}</h4>`;

}


checkButton.addEventListener('click', function(){
    role.style.display = 'block';
});

nextButton.addEventListener('click', function(){
    getRandomWord();
    role.style.display = 'none';
    });
