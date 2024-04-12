// Seleciona o botão
var combos = document.getElementById('voltar');

function pag1() {

    // Redireciona para a nova página desejada
    window.location.href = '../index.html'; // Substitua 'nova_pagina.html' pelo caminho da sua nova página
}

// Adiciona um ouvinte de evento para o clique no botão
voltar.addEventListener('click', pag1);

function scrollToCategoria(categoriaId) {
    var categoria = document.getElementById(categoriaId);
    categoria.scrollIntoView({ behavior: "smooth" });
}



//Seleciona o elemento HTML com o id "categorias" e armazenar na variavel listaCategorias
let listaCategorias = document.getElementById("listaCategorias")


//Inicia uma requisição fetch para o arquivo "categorias.json"
fetch("combos.json").then((response) => {

    //Converte a resposta para json
    response.json().then((dados) => {
        //Converte todos os nomes das categorias para letras maiúsculas
        dados.categorias.forEach((produto) => {
            produto.categoria = produto.categoria.toUpperCase()
        })

        //Itera sobre cada categoria e cria botões HTML dentro do elemento com a id "categorias"
        dados.categorias.forEach((produto) => {

            // Adiciona um botão ao HTML com id "botao"
            listaCategorias.innerHTML += `
      <button id="botaoCategoria" onclick="prencherInputeOcultarDiv('${produto.categoria1}', this)">${produto.categoria}</button>
      `
        })
    })
})

document.querySelector("#categorias").addEventListener("click", function () {
    const caixacategorias = this.nextElementSibling;
    if (caixacategorias.style.display === "block") {
        caixacategorias.style.display = "none";
    } else {
        caixacategorias.style.display = "block";
    }
});


function prencherInputeOcultarDiv(categoria, button) {

    //executar a ação desejada (preencher o input com a categpria)
    preencherInput(categoria)

    //Ocultar a div com a classe "categorias"
    const divCategorias = button.closest("#listaCategorias")
    if (divCategorias) {
        divCategorias.style.display = "none"
    }
}

function preencherInput(categoria) {

    //Obtém a referêncoa para o input
    let input = document.getElementById("barraPesquisa")

    //Define o valor do input como "palavra"
    input.value = categoria

    //Chama automaticamente a função filter após preencher o input
    filtrar()
}







let divPesquisa = document.querySelector("#listaProdutos");

fetch("garrafa.json").then((response) => {
    response.json().then((dados) => {
        dados.listaGarrafa.forEach((produto) => {
            produto.nome = produto.nome.toUpperCase();
        });



        dados.listaGarrafa.map((produto, index) => {
            let iditem = index + 1; // Definindo o ID do item

            divPesquisa.innerHTML += `
                <li onclick="scrollToCategoria('produto-${iditem}')">
                    <a id="produto">
                        <img src="../imagens/${produto.img}.png" />
                        <span id="nomeProduto">${produto.nome}.</span>
                    </a>
                    <p>R$${produto.preco}</p>
                    <p id="disponivel">${produto.disponivel}</p>
                </li>
            `;
        });
    });
});


let barraP = document.querySelector("#barraPesquisa")

function filtrar() {
    var barraPequisa,
        filter,
        ul,
        li,
        a,
        i,
        span,
        txtValue,
        count = 0;

    //PEGAR OS ELEMENTOS HTML
    barraPequisa = document.getElementById("barraPesquisa");
    ul = document.getElementById("listaProdutos");

    //FILTRO
    filter = barraPequisa.value.toUpperCase();

    //PEGAR TODAS AS LI's DA LISTA
    li = ul.getElementsByTagName("li");

    //PERCORRER TODOS OS LI's
    for (i = 0; i < li.length; i++) {
        //PEGAR A TAG <a> DO ELEMENTO PERCORRIDO
        a = li[i].getElementsByTagName("a")[0];

        //PEGAR O TEXTO DENTRO DA NOSSA TAG <a>
        txtValue = a.textContent || a.innerText;

        //VERIFICAR SE O QUE O USUARIO DIGITOU BATE COM O TEXTO DA TAG <a>
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //VALOR BATEU
            li[i].style.display = "";

            //INCREMENTAR O CONTADOR
            count++;
            //PEGAR A TAG <span> DO ITEM
            span = li[i].querySelector("#nomeProduto");
            //SE EXISTIR
            if (span) {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                    return "<strong>" + match + "</strong>";
                });
            }
        } else {
            //NÃO MOSTRAR O ITEM DA LISTA
            li[i].style.display = "none";
        }
    }

    //VERIFICANDO SE TEM ITENS NA LISTA
    if (filter === "") {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
}

barraP.addEventListener('keyup', filtrar)











const combowhisky = document.getElementById("whisky")

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.listaCombos[0].listaWhisky.map((produto, index) => {
            let iditem = index + 1; // Definindo o ID do item



            combowhisky.innerHTML += `
            <li id="item">
                <div id="qual">
                    <h2 id="produto-${iditem}">${produto.tipo}</h2>
                </div>
                <div id="item1">
                    <div id="produto">
                        <img class="pequeno" src="../imagens/${produto.imgenergetico}.PNG">
                        <p>${produto.quantenergetico}</p>
                        <span>${produto.energetico}</span>
                    </div>
                    
                    <div id="produto">
                        <img src="../imagens/${produto.imggarrafa}.png">
                        <p>${produto.quantgarrafa}</p>
                        <span>${produto.garrafa}</span>
                    </div>
                    
                    <div id="produto">
                        <img class="pequeno" src="../imagens/${produto.imggelo}.PNG">
                        <p>${produto.quantgelo}</p>
                        <span>${produto.gelo}</span>
                    </div>
                </div>
                <div id="preco">
                    <h1>R$${produto.preco}</h1>
                </div>
            </li>
            `
        })
    })
})


const combogin = document.getElementById("gin")

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.listaCombos[0].listaGin.map((produto, index) => {
            let iditem = index + 18; // Definindo o ID do item

            combogin.innerHTML += `
            <li id="item">
                <div id="qual">
                    <h2 id="produto-${iditem}">${produto.tipo}</h2>
                </div>
                <div id="item1">
                    <div id="produto">
                        <img class="pequeno" src="../imagens/${produto.imgenergetico}.png">
                        <p>${produto.quantenergetico}</p>
                        <span>${produto.energetico}</span>
                    </div>
                    
                    <div id="produto">
                        <img src="../imagens/${produto.imggarrafa}.png">
                        <p>${produto.quantgarrafa}</p>
                        <span>${produto.garrafa}</span>
                    </div>
                    
                    <div id="produto">
                        <img class="pequeno" src="../imagens/${produto.imggelo}.png">
                        <p>${produto.quantgelo}</p>
                        <span>${produto.gelo}</span>
                    </div>
                </div>
                <div id="preco">
                    <h1>R$${produto.preco}</h1>
                </div>
            </li>
            `
        })
    })
})

const combovodka = document.getElementById("vodka")

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.listaCombos[0].listaVodka.map((produto, index) => {
            let iditem = index + 28; // Definindo o ID do item

            combovodka.innerHTML += `
            <li id="item">
                <div id="qual">
                    <h2 id="produto-${iditem}">${produto.tipo}</h2>
                </div>
                <div id="item1">
                    <div id="produto">
                        <img class="pequeno" src="../imagens/${produto.imgenergetico}.png">
                        <p>${produto.quantenergetico}</p>
                        <span>${produto.energetico}</span>
                    </div>
                    
                    <div id="produto">
                        <img src="../imagens/${produto.imggarrafa}.png">
                        <p>${produto.quantgarrafa}</p>
                        <span>${produto.garrafa}</span>
                    </div>
                    
                    <div id="produto">
                        <img class="pequeno" src="../imagens/${produto.imggelo}.png">
                        <p>${produto.quantgelo}</p>
                        <span>${produto.gelo}</span>
                    </div>
                </div>
                <div id="preco">
                    <h1>R$${produto.preco}</h1>
                </div>
            </li>
            `
        })
    })
})



function scrollToCategoria(categoriaId) {
    let barra = document.getElementById("barraPesquisa");
    barra.value = ""; // Limpa o conteúdo do elemento com o ID "barraPesquisa"
    barra.blur(); // Remove o foco do campo de pesquisa para ocultar o teclado virtual

    setTimeout(function () {
        let lista = document.getElementById("listaProdutos")
        lista.style.display = "none";

        var categoria = document.getElementById(categoriaId);

        const offset = window.innerHeight / 4 - categoria.clientHeight / 2;

        window.scrollTo({
            top: categoria.offsetTop - offset,
            behavior: "smooth"
        });
    }, 500); // 1000 milliseconds = 1 segundo
}






const paracima = document.getElementById("paracima")

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        paracima.style.display = "block"
    } else {
        paracima.style.display = "none"
    }
})

paracima.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


/* window.addEventListener('resize', function() {
    var larguraTela = window.innerWidth; // Obtém a largura da tela
    if (larguraTela <= 768) { // Define o limite da largura da tela em 768 pixels
        // Código a ser executado quando a largura da tela for menor ou igual a 768 pixels
        console.log('Largura da tela menor ou igual a 768 pixels.');
        // Ou qualquer outra ação que você deseje executar
    } else {
        // Código a ser executado quando a largura da tela for maior que 768 pixels
        console.log('Largura da tela maior que 768 pixels.');
        // Ou qualquer outra ação que você deseje executar
    }
});
 */


/*
    {
        "nome": "GIN GORDONS PREMIUN PINK 700ML",
        "img": "GIN GORDONS PREMIUN PINK 700ML",
        "preco": "78,00",
        "disponivel": "indisponivel"
    },

    {
        "tipo": "GORDONS PINK",
        "imggarrafa": "GIN GORDONS PREMIUN PINK 700ML",
        "quantgarrafa": "1x ",
        "garrafa": "GIN GORDONS PINK 1L",
        "imgenergetico": "ENERGÉTICO RED BULL MELANCIA 250ML",
        "quantenergetico": "6x ",
        "energetico": "ENERGÉTICO RED BULL SABOR 250ML",
        "imggelo": "GELO DE MALENCIA COKO 200ML",
        "quantgelo": "6x ",
        "gelo": "GELO DE SABOR 200ML",
        "preco": "140,00"
    },
*/