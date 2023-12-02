let divcategorias = document.querySelector(".listacategoria");

function preencherInput(categoria) {
  // Lógica para preencher o input com a categoria selecionada
  console.log('Categoria selecionada:', categoria);
}

fetch("categorias.json").then((response) => {
  response.json().then((dados) => {
    // Converte todos os nomes para letras maiúsculas
    dados.categorias.forEach((produto) => {
      produto.categoria = produto.categoria.toUpperCase();
    });

    dados.categorias.forEach((produto) => {
      divcategorias.innerHTML += `
      <button class="sumir" onclick="preencherInputAndHideDiv('${produto.categoria}', this)">${produto.categoria}</button>
      `;
    });
  });
});

document.querySelector('.categorias').addEventListener('click', function() {
  const dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
  } else {
      dropdownContent.style.display = 'block';
  }
});

function preencherInputAndHideDiv(categoria, button) {
  // Executar a ação desejada (preencher o input com a categoria)
  preencherInput(categoria);

  // Ocultar a div com a classe "categorias"
  const divCategorias = button.closest('.listacategoria');
  if (divCategorias) {
    divCategorias.style.display = 'none';
  }
}








function preencherInput(categoria) {
  // Obtém a referência para o input
  var input = document.getElementById("inputBusca");

  // Define o valor do input como 'CERVEJA'
  input.value = categoria;

  // Chama automaticamente a função filtrar após preencher o input
  filtrar();
}

// Restante do seu código...


function filtrar() {
  var input,
    filter,
    ul,
    li,
    a,
    i,
    span,
    txtValue,
    count = 0;

  //PEGAR OS ELEMENTOS HTML
  input = document.getElementById("inputBusca");
  ul = document.getElementById("listaProdutos");

  //FILTRO
  filter = input.value.toUpperCase();

  //PEGAR TODAS AS LI's DA LISTA
  li = ul.getElementsByTagName("li");

  //PERCORRER TODOS OS LI'S
  for (i = 0; i < li.length; i++) {
    //PEGAR A TAG A DO ELEMENTO PERCORRIDO
    a = li[i].getElementsByTagName("a")[0];
    //PEGAR O TEXTO DENTRO DO NOSSA TAG A
    txtValue = a.textContent || a.innerText;
    //VERIFICAR SE O QUE O USUARIO DIGITOU BATE COM O TEXTO DA TAG A
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //VALOR BATEU
      li[i].style.display = "";
      //INCREMENTAR O CONTADOR
      count++;
      //PEGAR A TAG SPAN DO ITEM
      span = li[i].querySelector(".item-name");
      //SE EXISTIR
      if (span) {
        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
          return "<strong>" + match + "</strong>";
        });
      }
    } else {
      //NÃO MOSTRA O ITEM DA LISTA
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

let divBuscar = document.querySelector("#listaProdutos");

fetch("dados.json").then((response) => {
  response.json().then((dados) => {
    // Converte todos os nomes para letras minúsculas
    dados.listaProdutos.forEach((produto) => {
      produto.nome = produto.nome.toUpperCase();
    });

    // Ordena o array
    dados.listaProdutos.sort((a, b) => {
      return a.nome.localeCompare(b.nome);
    });

    // Renderiza a lista
    dados.listaProdutos.map((produto) => {
      divBuscar.innerHTML += `
      <li>
      <a class="barra">
      <img width="50"
      src="${produto.img}" />
      <span class="item-name">${produto.nome}.</span>
      </a>
      <p>R$${produto.preco}</p>
      <p class="disponivel">${produto.disponivel}</p>
      </li>
      `;
    });
  });
});