import { routerStart } from "./router.js";

var distrito;

var municipio;

$(document).ready(() => {
  console.log("DOM está pronto e montado");

  const apiUrl = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos?idsTiposComb=1120%2C3400%2C3205%2C3405%2C3201%2C2105%2C2101&idMarca=&idTipoPosto=&idDistrito=&idsMunicipios=&qtdPorPagina=11713";

  let data;

  fetch(apiUrl)
    .then(response => response.json())
    .then(fetchedData => {
      data = JSON.stringify(fetchedData, null, 2);
      
      var openRequest = indexedDB.open("meuBancoDeDados", 1);

      openRequest.onupgradeneeded = function(e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains('meusDados')) {
          db.createObjectStore('meusDados');
        }
      };

      openRequest.onsuccess = function(e) {
        var db = e.target.result;
        var tx = db.transaction('meusDados', 'readwrite');
        var store = tx.objectStore('meusDados');
        store.put(data, 'output');
      };

      openRequest.onerror = function(e) {
        console.error('Erro:', e.target.error);
      };
    })
    .catch(error => console.error('Erro:', error));

  
 
  // Selecione todos os elementos <path> dentro do seu SVG
  var paths = document.querySelectorAll('path');

  // Adicione um ouvinte de eventos de clique a todos os elementos <path>
  paths.forEach(function(path) {
    path.addEventListener('click', handleClick);

  });
});





const h1Element = document.querySelector('.title');

const box = document.querySelector('.boxx');

const formxe = document.querySelector('#form');

// Variáveis globais para armazenar a posição inicial do viewBox
const initialViewBoxX = 615;
const initialViewBoxY = 0;
const initialViewBoxWidth = 580;
const initialViewBoxHeight = 277;

// Variável para armazenar o último elemento clicado
let lastClickedElement = null;

// Função para ser executada quando um <path> for clicado
function handleClick(event) {
  // Execute sua função aqui com base no elemento clicado
  var id = event.target.getAttribute('id');
  distrito = id;
  var counties = "Cities";
  var fuel = "Fuel Type(s)";
  var brand = "Brand";
  document.getElementById('Brand').innerHTML = brand;
  document.getElementById('Fuels').innerHTML = fuel;
  document.getElementById('cityTitle').innerHTML = id;
  document.getElementById('municipiosTitle').innerHTML = counties;
  const svg = document.getElementById("meuSVG");

  // Adicione a propriedade de animação ao estilo do elemento
  h1Element.style.animation = 'ir forwards ease-in-out 0.5s';
  formxe.style.animation = 'voltar2 forwards ease-in-out 1s';

  
  document.getElementById("boxx").style.display = 'flex';

  // Verifique se o elemento clicado é o mesmo que o último clicado
  if (lastClickedElement === event.target) {
    
    // Se for o mesmo elemento, execute a animação para alternar entre as posições
    if (svg.getAttribute("viewBox") !== `${initialViewBoxX} ${initialViewBoxY} ${initialViewBoxWidth} ${initialViewBoxHeight}`) {

      h1Element.style.removeProperty('animation');
      h1Element.style.animation = 'voltar forwards ease-in-out 1.5s';

      formxe.style.removeProperty('animation');
      formxe.style.animation = 'ir2 forwards ease-in-out 1s';
      // Se o viewBox atual não for a posição inicial, volte para a posição inicial
      animateViewBox(svg, initialViewBoxX, initialViewBoxY, initialViewBoxWidth, initialViewBoxHeight);
      
      document.getElementById("tuga").style.zIndex = "2";
      // Restaurar a cor do elemento anterior
      if (lastClickedElement) {
        lastClickedElement.style.fill = ''; // Isso remove o estilo 'fill' (cor)
      }

      setTimeout(() => {
        event.target.style.fill = ''; // Isso remove o estilo 'fill'
      }, 1); // 1000 milissegundos (1 segundo)

    } else {
      // Se o viewBox atual for a posição inicial, vá para a nova posição
      const targetX = 850;
      const targetY = 0;
      const targetWidth = 580;
      const targetHeight = 277;
      animateViewBox(svg, targetX, targetY, targetWidth, targetHeight);
     
      document.getElementById("form").style.display = "block"; // Exibir o formulário

      setTimeout(() => {
        document.getElementById("tuga").style.zIndex = "1";
      }, 1000); // 1000 milissegundos (1 segundo)

      // Definir a cor verde para o elemento atual
      event.target.style.fill = '#3a3939'; // Por exemplo, verde
    }
  } else {
    // Se for um novo elemento <path>, execute a animação para a nova posição
    const targetX = 850;
    const targetY = 0;
    const targetWidth = 580;
    const targetHeight = 277;
    animateViewBox(svg, targetX, targetY, targetWidth, targetHeight);
    document.getElementById("form").style.display = "block"; // Exibir o formulário
    
    setTimeout(() => {
      document.getElementById("tuga").style.zIndex = "1";
    }, 1000); // 1000 milissegundos (1 segundo)

    
    
    // Restaurar a cor do elemento anterior
    if (lastClickedElement) {
      lastClickedElement.style.fill = ''; // Isso remove o estilo 'fill' (cor)
    }

    // Definir a cor verde para o elemento atual
    event.target.style.fill = '#3a3939'; // Por exemplo, verde
  }

  // Atualize o último elemento clicado
  lastClickedElement = event.target;

  
}


// Função para animar o viewBox
function animateViewBox(svg, targetX, targetY, targetWidth, targetHeight) {
  const currentViewBox = svg.viewBox.baseVal;
  const startX = currentViewBox.x;
  const startY = currentViewBox.y;
  const startWidth = currentViewBox.width;
  const startHeight = currentViewBox.height;
  
  const duration = 500; // Duração da animação em milissegundos
  const fps = 180; // Quadros por segundo
  
  const frameDuration = 1000 / fps;
  const totalFrames = Math.ceil(duration / frameDuration);
  
  const deltaX = (targetX - startX) / totalFrames;
  const deltaY = (targetY - startY) / totalFrames;
  const deltaWidth = (targetWidth - startWidth) / totalFrames;
  const deltaHeight = (targetHeight - startHeight) / totalFrames;
  
  let frame = 0;
  
  function step() {
    currentViewBox.x += deltaX;
    currentViewBox.y += deltaY;
    currentViewBox.width += deltaWidth;
    currentViewBox.height += deltaHeight;
    svg.setAttribute("viewBox", `${currentViewBox.x} ${currentViewBox.y} ${currentViewBox.width} ${currentViewBox.height}`);
    
    frame++;
    
    if (frame < totalFrames) {
      requestAnimationFrame(step);
    }
  }
  
  step();

  // Selecione o elemento <h1> com a classe "title"

}


// Função para ordenar as divs com base na opção selecionada
function ordenarDivs() {
  const boxxDiv = document.getElementById('boxx');
  const selectElement = boxxDiv.querySelector('select');
  const selectedOption = selectElement.value;

  const infoDiv = document.getElementById('info');
  const divsInfo = Array.from(infoDiv.querySelectorAll('.posto-info'));

  if (selectedOption === 'Price: Low to High') {
    divsInfo.sort((a, b) => {
      const precoA = parseFloat(a.querySelector('p:last-child').textContent.replace('Preço: ', '').replace(' €', ''));
      const precoB = parseFloat(b.querySelector('p:last-child').textContent.replace('Preço: ', '').replace(' €', ''));
      return precoA - precoB;
    });
  } else if (selectedOption === 'Price: High to Low') {
    divsInfo.sort((a, b) => {
      const precoA = parseFloat(a.querySelector('p:last-child').textContent.replace('Preço: ', '').replace(' €', ''));
      const precoB = parseFloat(b.querySelector('p:last-child').textContent.replace('Preço: ', '').replace(' €', ''));
      return precoB - precoA;
    });

    // Aqui você pode adicionar outras opções de classificação, se necessário.

  }

  // Limpar div "info"
  infoDiv.innerHTML = '';

  // Adicionar as divs ordenadas de volta à div "info"
  divsInfo.forEach((div) => {
    infoDiv.appendChild(div);
  });
}

// Adicione um ouvinte de evento para chamar a função quando o valor selecionado for alterado
const selectElement = document.querySelector('select');
selectElement.addEventListener('change', ordenarDivs);

