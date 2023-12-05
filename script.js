let elementoJavaScript = document.createElement("h2");

elementoJavaScript.innerText = "Eletrônicos Premium"
elementoJavaScript.id = "titulo"

let listaLinguagens = document.querySelector("body");
listaLinguagens.appendChild(elementoJavaScript);

console.log(elementoJavaScript);

let imagem = document.createElement("img");
imagem.src = "fotos./ASUSZenbook.png";
imagem.alt = "Imagem do Notbook Zenbook";
document.body.appendChild(imagem);

const postagemJavaScript = document.createElement("div");
postagemJavaScript.innerHTML =
`<h2 class="post-titulo">ASUS Zenbook 17 Fold OLED: US $4 999,25</h2>
<p class="post-texto">
ASUS Zenbook 17 Fold OLED: Inteiramente feito de uma tela flexível de 17,3 polegadas e sensível ao toque
que pode ser dobrada ao meio. O modelo também acompanha
um teclado físico com touchpad que se conecta via bluetooth.
</p>`

const postagens = document.querySelector("body");
postagens.appendChild(postagemJavaScript);
console.log(postagemJavaScript);

