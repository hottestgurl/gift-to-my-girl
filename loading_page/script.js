let cantadas_imagem = ["https://i.pinimg.com/564x/50/e0/3c/50e03c349e84a0d7dc9515908d905d89.jpg", "https://i.pinimg.com/564x/c0/1e/fa/c01efae4b2e765a6279ba455ffd6fa60.jpg", "https://i.pinimg.com/564x/96/4d/73/964d737655d01c6b2de50c189219f276.jpg", "https://i.pinimg.com/564x/ff/81/d0/ff81d08d423c37451314fa1ddac022ac.jpg", "https://i.pinimg.com/564x/3f/4d/0f/3f4d0fd9f9bcf2ce1ac952b4a9a12a78.jpg", "https://i.pinimg.com/564x/34/a2/58/34a2586a09d482ce73c726171faa8bae.jpg", "https://i.pinimg.com/564x/43/03/22/4303221b508f075da4737430a52619e3.jpg", "https://i.pinimg.com/564x/e3/9a/ce/e39acea3243756fa1cdf489b815c9481.jpg", "https://i.pinimg.com/564x/41/aa/fa/41aafab10bb4502e869b279194fdecb4.jpg", "https://i.pinimg.com/564x/f9/a5/7e/f9a57ee9d81a9347fe47f7a64512d8c5.jpg", "https://i.pinimg.com/564x/8c/65/71/8c657100b608acf3cc7794a0a5b0a2af.jpg", "https://i.pinimg.com/564x/68/a4/2d/68a42d9eaf5ef04e7a435e9084d825c1.jpg", "https://i.pinimg.com/564x/3f/4e/62/3f4e62af4023e78ee1123e610293f676.jpg", "https://i.pinimg.com/564x/d1/67/6c/d1676c9cab5d1b3eecca9149e78556dc.jpg", "https://i.pinimg.com/564x/69/38/47/6938479e5a8e06b823181305d8ab9bcd.jpg", "https://i.pinimg.com/564x/de/72/01/de72017389f2cdc72469bfbba7107c3e.jpg", "https://i.pinimg.com/564x/d6/fa/a7/d6faa7e7dd557f22449809715690b2df.jpg", "https://i.pinimg.com/564x/b8/3e/c1/b83ec1ddefd37d5efc6eb569615aa0cb.jpg", "https://i.pinimg.com/736x/fe/ea/e1/feeae10d2786404831bb94f28dc69d0b.jpg", "https://i.pinimg.com/564x/73/02/99/7302991c29b79cd0095f8b68759de4be.jpg", "https://i.pinimg.com/564x/90/ca/5d/90ca5d3c9b4ccdf900c92a2f3b9da3e1.jpg","https://i.pinimg.com/564x/a6/2f/49/a62f492e78946dab39c5ac38fa77283e.jpg"];

let cantadas = [
  "Se eu fosse um refrigerante, seria Soda, porque meu coração soda você.",
  "Se eu fosse um papel, você me daria uns amassos?",
  "Você é dolar, ou euro, porque real não pode ser.",
  "Se beleza fosse agua, você seria um oceano.",
  "Por acaso a pandemia acabou?... Porque estou vendo uma aglomeração de beleza no seu rosto.",
  "Eu não costumo desejar o mal a ninguem... mas desejo que case comigo.",
  "Se você fosse um computador, tu seria um DELL, porque você me faz DELLirar de amor.",
  "Não sou ateu, mas meus beijos tá ATEU dispor.",
  "Você não é a lente do meu óculos, mas desde que te encontrei, só tenho foco em você.",
  "Não sou dentista, mas adoraria ver você usando fio dental.",
  "Você deveria entrar pra Hogwarts, porque o que você fez com o meu coração só pode ser bruxaria.",
  "Gata, me chama de máscara e deixa eu colocar, as minhas pernas em cada orelha sua rs.",
  "Gata, pra você virar bombom só está faltando a valsa, porque o sonho você já é.",
  "Troquei de operadora, agora meu plano é VOCÊ.",
];

let main = document.querySelector(".box");
let cont = 0;
let cont2 = 0;
let b_first = document.querySelector(".btn");
let div = document.createElement("li");
div.id = "ant";
let main2 = document.querySelector(".box-img");
let img = document.createElement("img");
img.id = "cantada-img";



function Template() {
cont++

if(cont >= cantadas.length){
  cont = 0
}
let li_ant = document.querySelector("#ant");
if(li_ant){
  li_ant.remove();
}


div = document.createElement("li");
div.id = "ant";
div.innerText = cantadas[cont]
main.appendChild(div);

}
function TemplateImg(){
cont2++;
 if(cont2 >= cantadas_imagem.length){
  cont2 = 0;
 }


 let img_ant = document.querySelector("#cantada-img");
 if(img_ant){
  img_ant.remove();
 }


 img = document.createElement("img");
 img.src = cantadas_imagem[cont2];
 img.id = "cantada-img";
 main2.appendChild(img);

}


function voltar(){
  window.location.replace("../index.html")
}