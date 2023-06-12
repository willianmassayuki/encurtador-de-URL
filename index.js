const botaoMenu = document.querySelector('#botao-menu')
const menu = document.querySelector('.menu')

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('inativo');
})

const entrada = document.querySelector("#url");
const encurta = document.querySelector('.encurta-url');
const container = document.querySelector(".respostas");
const busca_container = document.querySelector(".caixa-conteudo");
const etiqueta = document.createElement("label");

var count = 0;

encurta.addEventListener('click', () => {
    let  url = entrada.value;
    
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => response.json())
      .then((dados) => {
        let valido = dados.ok;//true ou false
        console.log(valido)
        if (valido == true){
        let url_encurtada = dados.result.full_short_link;
        const p = document.createElement("p");
        const link = document.createElement("a");
        const botao = document.createElement("button");
        const div = document.createElement("div");
        p.innerText = url;
        link.innerText = url_encurtada;
        botao.innerHTML = "Copy!";
        
        botao.setAttribute("class", `btnCopiar${count}`);
        botao.setAttribute("onclick", `copiar(${count})`);
        link.classList.add(`endereco${count}`);
        link.setAttribute("href",`${url_encurtada}`);
        link.setAttribute("target", "_blank");

        div.appendChild(p)
        div.appendChild(link)
        div.appendChild(botao)
        container.appendChild(div)        
        count = count+1;
        }else{
            
            entrada.classList.add("invalido");
            etiqueta.setAttribute('for', 'url');
            etiqueta.innerText = 'Please add a valid link';
            busca_container.appendChild(etiqueta)
        }
    })
})
    
entrada.addEventListener('click', () => {
    entrada.classList.remove('invalido')
    busca_container.removeChild(etiqueta)
}) 

function copiar(c) {
    let textoCopiado = document.querySelector(`.endereco${c}`);
    let url_encurtada = textoCopiado.href;
    let botaoEscolhido = document.querySelector(`.btnCopiar${c}`);
    console.log(url_encurtada);
    navigator.clipboard.writeText(url_encurtada);

    //Adicionando uma classe pós clique
    botaoEscolhido.classList.add('copiado');
    botaoEscolhido.innerText = 'Copied!';

}