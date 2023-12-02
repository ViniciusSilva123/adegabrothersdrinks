const combowhisky = document.querySelector("#listaWhisky");

fetch("whisky.json").then((response) => {
  response.json().then((dados) => {

    /*dados.listaWhisky.sort((a, b) => {
      return a.tipo.localeCompare(b.tipo);
    });*/


    dados.listaWhisky.map((produto) => {
      combowhisky.innerHTML += `
      <div class="tipo">
      <p>${produto.tipo}</p>
      </div>
      <li>
      <a>
      <div>
      <img width="50" src="${produto.imggarrafa}" />
      <p>${produto.quantgarrafa}</p>
      <span class="item-name">${produto.garrafa}.</span>
      </div>
      
      <div>
      <img width="50" src="${produto.imgenergetico}" />
      <p>${produto.quantenergetico}</p>
      <span class="item-name">${produto.energetico}.</span>
      </div>
      
      <div>
      <img width="50"
      src="${produto.imggelo}" />
      <p>${produto.quantgelo}</p>
      <span class="item-name">${produto.gelo}.</span>
      </div>
      </a>
      
      <p>R$${produto.preco}</p>
      </li>
  `;
    });
  });
});


const combogin = document.querySelector("#listaGin");

fetch("gin.json").then((response) => {
  response.json().then((dados) => {

    /*dados.listaGin.sort((a, b) => {
      return a.tipo.localeCompare(b.tipo);
    });*/


    dados.listaGin.map((produto) => {
      combogin.innerHTML += `
      <div class="tipo">
      <p>${produto.tipo}</p>
      </div>
      <li>
      <a>
      <div>
      <img width="50" src="${produto.imggarrafa}" />
      <p>${produto.quantgarrafa}</p>
      <span class="item-name">${produto.garrafa}.</span>
      </div>
      
      <div>
      <img width="50" src="${produto.imgenergetico}" />
      <p>${produto.quantenergetico}</p>
      <span class="item-name">${produto.energetico}.</span>
      </div>
      
      <div>
      <img width="50"
      src="${produto.imggelo}" />
      <p>${produto.quantgelo}</p>
      <span class="item-name">${produto.gelo}.</span>
      </div>
      </a>
      
      <p>R$${produto.preco}</p>
      </li>
  `;
    });
  });
});


const combovodka = document.querySelector("#listaVodka");

fetch("vodka.json").then((response) => {
  response.json().then((dados) => {

    /*dados.listaVodka.sort((a, b) => {
      return a.tipo.localeCompare(b.tipo);
    });*/


    dados.listaVodka.map((produto) => {
      combovodka.innerHTML += `
      <div class="tipo">
      <p>${produto.tipo}</p>
      </div>
      <li>
      <a>
      <div>
      <img width="50" src="${produto.imggarrafa}" />
      <p>${produto.quantgarrafa}</p>
      <span class="item-name">${produto.garrafa}.</span>
      </div>
      
      <div>
      <img width="50" src="${produto.imgenergetico}" />
      <p>${produto.quantenergetico}</p>
      <span class="item-name">${produto.energetico}.</span>
      </div>
      
      <div>
      <img width="50"
      src="${produto.imggelo}" />
      <p>${produto.quantgelo}</p>
      <span class="item-name">${produto.gelo}.</span>
      </div>
      </a>
      
      <p>R$${produto.preco}</p>
      </li>
  `;
    });
  });
});


function hideAllLists() {
  const allCombos = document.querySelectorAll(".listaCombos");
  allCombos.forEach((combo) => {
    combo.style.display = "none";
  });
}

function toggleList(button, listaCombos) {
  const computedStyle = window.getComputedStyle(listaCombos);
  if (computedStyle.display === "block") {
    listaCombos.style.display = "none";
  } else {
    hideAllLists();
    listaCombos.style.display = "block";
  }
}

document.querySelector(".whisky").addEventListener("click", function () {
  const listaCombos = document.getElementById("listaWhisky");
  toggleList(this, listaCombos);
});

document.querySelector(".gin").addEventListener("click", function () {
  const listaCombos = document.getElementById("listaGin");
  toggleList(this, listaCombos);
});

document.querySelector(".vodka").addEventListener("click", function () {
  const listaCombos = document.getElementById("listaVodka");
  toggleList(this, listaCombos);
});
