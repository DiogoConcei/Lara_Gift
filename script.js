const sim = document.getElementById("Sim");
const nao = document.getElementById("Nao");
const img = document.getElementById("center_image");
const frase = document.getElementById("frase_principal");

const frases = [
  "Tem certeza?",
  "Certeza absoluta?",
  "Pense de novo!!",
  "Última chance!!",
  "Certamente não?",
  "Você pode recriar isso!",
  "Pense novamente!",
  "Você está absolutamente certo?",
  "Isso pode ser um erroP!",
  "Tenha um coração!",
  "Não seja tão frio!",
  "Mudança de coração?",
  "Você não reconsideraria?",
  "Essa é sua resposta final?",
  "Você está quebrando meu coração ;(",
];

let contador = 0;

nao.addEventListener("click", () => {
  const larguraAtual = sim.getBoundingClientRect().width;
  const alturaAtual = sim.getBoundingClientRect().height;
  sim.style.height = alturaAtual + 25 + "px";
  sim.style.width = larguraAtual + 25 + "px";

  nao.textContent = frases[contador];
  contador = (contador + 1) % frases.length;
});

sim.addEventListener("click", () => {
    img.src = '/instagram-zefexwoo-shaurya.gif'; 
    sim.style.display = 'none'
    nao.style.display = 'none'
    frase.textContent = 'EBA <3 !!!'; 
});
