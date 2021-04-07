function AdicionarFilme() {
    let campoFilme = document.querySelector("#filme");
    let imagemFilme = campoFilme.value;

    if(imagemFilme.endsWith(".jpg")) {
        ListarFilmesNaTela(imagemFilme);
    } else {
        alert("Isso não é uma imagem!");
    }
}
function ListarFilmesNaTela(imagem) {
    let listaFilmes = document.querySelector
        ("#listaFilmes");
    let elementoFilme = "<img src=" + imagem + ">";
    console.log(elementoFilme);
    listaFilmes.innerHTML += elementoFilme;

}