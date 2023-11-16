const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume-slider input");
const toggleKeys = document.querySelector(".keys-check input");

let audio = new Audio("./src/tunes/a.wav");
let mapedKeys = [];

/* Esse trecho executa o som de referência da tecla. Também acrescenta a classe "active" e remove,
 para dar o efeito visual de uma tecla sendo pressionada.*/
const playTune = (key) => {
  audio.src = `./src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key = "${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => clickedKey.classList.remove("active"), 150);

  console.log(mapedKeys);
};

// Esse trecho exe referencia as teclas com os sons e direciona para o playTune()
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));

  mapedKeys.push(key.dataset.key);
});

/*Evento para capturar a tecla pressionada e então disparar o playTune()
 A um tratamento de erro aplicado, apenas irá disparar o play se a tecla 
 estiver incluida no mapedKeys*/
document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

//Controle de volume
const handleVolume = (e) => {
  audio.volume = e.target.value;
};

volume.addEventListener("input", handleVolume);

// Controle de remover e retornar as teclas do piano
const showHideKeys = () => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
  });
};
toggleKeys.addEventListener("click", showHideKeys);
