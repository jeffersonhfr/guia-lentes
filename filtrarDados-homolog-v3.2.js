let type = '';
let best = [];
let best2 = [];
let zoom = '';
let seriesL = '';
let compatibility = '';
let month = '';
let resultSearch;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const step1 = document.querySelector('.step1');
const step2 = document.querySelector('.step2');
const step3 = document.querySelector('.step3');
const step3A = document.querySelector('.step3-A');
const step3B = document.querySelector('.step3-B');
const step4 = document.querySelector('.step4');
const step5 = document.querySelector('.step5');
const step6 = document.querySelector('.step6');

// ÍNICIO SCRIPTS DOS STEPS
//Step1

function nextStep2() {
  pushUserChoice(1, 'Iniciou o Quiz');
  step1.classList.add('hide');
  step2.classList.remove('hide');
  scrollToTop();
}
//Step2
const btNext2 = document.querySelector('.bt-next-2');
const radioButtonStyle01 = document.getElementsByName('opcaoEstilo')[0];
const radioButtonStyle02 = document.getElementsByName('opcaoEstilo')[1];
const validaClick = () => {
  const btnNext2 = document.querySelector('.bt-next-2');
  btnNext2.removeAttribute('disabled');
};
radioButtonStyle01.addEventListener('click', validaClick);
radioButtonStyle02.addEventListener('click', validaClick);
const previousStep1 = () => {
  step1.classList.remove('hide');
  step2.classList.add('hide');
  scrollToTop();
};

function nextStep3() {
  const choice = document.querySelector('#tipoLente').checked ? 'Tipo de Lente' : 'Estilo de Foto';
  pushUserChoice(2, choice);

  if (document.querySelector('#tipoLente').checked) {
    step2.classList.add('hide');
    step3A.classList.remove('hide');
  }
  if (document.querySelector('#estiloFoto').checked) {
    step2.classList.add('hide');
    step3B.classList.remove('hide');
  }
  scrollToTop();
}

//Step3
const previousStep2 = () => {
  step2.classList.remove('hide');
  step3A.classList.add('hide');
  step3B.classList.add('hide');
  step4.classList.add('hide');
  typeLenses.forEach(function (typeLens) {
    typeLens.checked = false;
    bt03A.setAttribute('disabled', 'disabled');
    bt03B.setAttribute('disabled', 'disabled');
    bt4.setAttribute('disabled', 'disabled');
    document.querySelector('#tipoLente').checked = false;
    document.querySelector('#estiloFoto').checked = false;
    document.querySelector('.DSLR').checked = false;
    document.querySelector('.Mirrorless').checked = false;
    const btnNext2 = document.querySelector('.bt-next-2');
    inputZoom[0].checked = false;
    inputZoom[1].checked = false;
    inputZoom[2].checked = false;
    inputSerieL[0].checked = false;
    inputSerieL[1].checked = false;
    typeZoomSelect = false;
    typeSerieLSelect = false;
    btnNext2.setAttribute('disabled', 'disabled');
  });
  type = '';
  styleLenses.forEach(function (styleLens) {
    styleLens.checked = false;
    bt03A.setAttribute('disabled', 'disabled');
    bt03B.setAttribute('disabled', 'disabled');
    bt4.setAttribute('disabled', 'disabled');
    document.querySelector('#tipoLente').checked = false;
    document.querySelector('#estiloFoto').checked = false;
    document.querySelector('.DSLR').checked = false;
    document.querySelector('.Mirrorless').checked = false;
    const btnNext2 = document.querySelector('.bt-next-2');
    inputZoom[0].checked = false;
    inputZoom[1].checked = false;
    inputZoom[2].checked = false;
    inputSerieL[0].checked = false;
    inputSerieL[1].checked = false;
    typeZoomSelect = false;
    typeSerieLSelect = false;
    btnNext2.setAttribute('disabled', 'disabled');
  });
  best = [];
  scrollToTop();
};

const bt03A = document.querySelector('.bt3a');
const validaClick03a = () => {
  bt03A.removeAttribute('disabled');
};

const tipo01 = document.querySelectorAll('.custom-radio-opt')[0];
const tipo02 = document.querySelectorAll('.custom-radio-opt')[1];
const tipo03 = document.querySelectorAll('.custom-radio-opt')[2];
const tipo04 = document.querySelectorAll('.custom-radio-opt')[3];
const tipo05 = document.querySelectorAll('.custom-radio-opt')[4];

tipo01.addEventListener('click', validaClick03a);
tipo02.addEventListener('click', validaClick03a);
tipo03.addEventListener('click', validaClick03a);
tipo04.addEventListener('click', validaClick03a);
tipo05.addEventListener('click', validaClick03a);

const bt03B = document.querySelector('.bt3b');
const validaClick03b = () => {
  bt03B.removeAttribute('disabled');
};

const tipoFotografia01 = document.querySelector('#Esporte');
const tipoFotografia02 = document.querySelector('#Retrato');
const tipoFotografia03 = document.querySelector('#Paisagem');
const tipoFotografia04 = document.querySelector('#Viagem');
const tipoFotografia05 = document.querySelector('#Evento');
const tipoFotografia06 = document.querySelector('#Arquitetura');
const tipoFotografia07 = document.querySelector('#Macro');
const tipoFotografia08 = document.querySelector('.VidaSelvagem');
const tipoFotografia09 = document.querySelector('.BaixaLuz');
const tipoFotografia10 = document.querySelector('#Vlog');
const tipoFotografia11 = document.querySelector('.RealidadeVirtual');

tipoFotografia01.addEventListener('click', validaClick03b);
tipoFotografia02.addEventListener('click', validaClick03b);
tipoFotografia03.addEventListener('click', validaClick03b);
tipoFotografia04.addEventListener('click', validaClick03b);
tipoFotografia05.addEventListener('click', validaClick03b);
tipoFotografia06.addEventListener('click', validaClick03b);
tipoFotografia07.addEventListener('click', validaClick03b);
tipoFotografia08.addEventListener('click', validaClick03b);
tipoFotografia09.addEventListener('click', validaClick03b);
tipoFotografia10.addEventListener('click', validaClick03b);
tipoFotografia11.addEventListener('click', validaClick03b);

function nextStep4() {
    if (document.querySelector('#tipoLente').checked) {
      pushUserChoice(3, type);
    } else {
      pushUserChoice(3, best.join(','));
    }
    
    step3A.classList.add('hide');
    step3B.classList.add('hide');
    step4.classList.remove('hide');
    scrollToTop();
  }

//Step3-A
const typeLenses = document.getElementsByName('type');
const typeFunction = (event) => {
  const clickedElement = event.target;
  const value = clickedElement.value;
  type = value;
};
typeLenses.forEach((typeLens) => {
  typeLens.addEventListener('click', typeFunction);
});

//Step3-B

const styleLenses = document.querySelectorAll('.bestSteps');
const styleLenses1 = document.querySelectorAll('.bestSearch');

document.addEventListener('click', function (event) {
  if (event.target.type === 'checkbox' && event.target.name === 'best') {
    if (event.target.checked) {
      best.push(event.target.value);
    } else {
      const index = best.indexOf(event.target.value);
      if (index !== -1) {
        best.splice(index, 1);
      }
    }
  }
});

//Step4
function checkSelectedInput() {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      compatibility = inputs[i].value;
      break;
    }
  }
}
window.onload = checkSelectedInput;
let inputs = document.getElementsByName('tipoDaCamera');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', function () {
    checkSelectedInput();
  });
}

const bt4 = document.querySelector('.bt4');
const dslr = document.querySelector('.DSLR');
const mirrorless = document.querySelector('.Mirrorless');

let typeZoomSelect = false;
let typeSerieLSelect = false;

const inputZoom = document.querySelectorAll('#zoom');
inputZoom.forEach((input) => {
  input.addEventListener('click', function () {
    inputZoom.forEach((item) => {
      if (item.checked) {
        zoom = item.value;
        typeZoomSelect = true;
      }
    });
  });
});

const inputSerieL = document.querySelectorAll('#seriesL');
inputSerieL.forEach((input) => {
  input.addEventListener('click', function () {
    inputSerieL.forEach((item) => {
      if (item.checked) {
        seriesL = item.value;
        typeSerieLSelect = true;
      }
    });
  });
});

const validaClick04 = () => {
  let typeCameraSelect = false;
  inputs.forEach((item) => {
    if (item.checked == true) {
      typeCameraSelect = true;
    }
  });

  if (typeCameraSelect == true && typeZoomSelect == true && typeSerieLSelect == true) {
    bt4.removeAttribute('disabled');
  }
};

dslr.addEventListener('click', validaClick04);
mirrorless.addEventListener('click', validaClick04);
inputZoom[0].addEventListener('click', validaClick04);
inputZoom[1].addEventListener('click', validaClick04);
inputZoom[2].addEventListener('click', validaClick04);
inputSerieL[0].addEventListener('click', validaClick04);
inputSerieL[1].addEventListener('click', validaClick04);
// FINAL SCRIPTS DOS STEPS

// ÍNICIO VALIDAÇÃO FORMULÁRIO
const checkboxes = document.querySelectorAll('.bestSearch');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const checkedCheckboxes = document.querySelectorAll('.bestSearch:checked');
    if (checkedCheckboxes.length > 3) {
      checkbox.checked = false;
    }
  });
});

const checkboxe1 = document.querySelectorAll('.bestSteps');

checkboxe1.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const checkedCheckboxes = document.querySelectorAll('.bestSteps:checked');
    if (checkedCheckboxes.length > 3) {
      checkbox.checked = false;
    }
  });
});

let selectZoomFilter = document.querySelector('.zoom2');
function handleChangeZoom() {
  inputZoom.forEach((item) => {
    item.checked = false;
  });
  zoom = '';
  zoom = selectZoomFilter.value;
}
selectZoomFilter.addEventListener('click', handleChangeZoom);

let selectSerieLFilter = document.querySelector('.serieL2');
function handleChangeSerieL() {
  inputSerieL.forEach((item) => {
    item.checked = false;
  });
  seriesL = '';
  seriesL = selectSerieLFilter.value;
}
selectSerieLFilter.addEventListener('click', handleChangeSerieL);

let btnSubmitFormSearch = document.querySelector('.searchButton');
btnSubmitFormSearch.addEventListener('click', handleChangeSerieL);
btnSubmitFormSearch.addEventListener('click', handleChangeZoom);

let inputTypeLenses;
let inputCompatibility;
let inputStyle;

// Filtros nos Steps
const selectLens = () => {
  let home = document.querySelector('.home');
  event.preventDefault();
  step4.classList.add('hide');
  home.classList.add('hide');

  filtrarDados();
  scrollToTop();

  inputTypeLenses = type;
  inputCompatibility = compatibility;
  inputStyle = best;
};

const filtrarDados = () => {
    const nameFilter = document.getElementById('nameFilter').value.toLowerCase();
  
    // Analytics: Track search filters
    const filters = {
      name: nameFilter,
      compatibility: compatibility,
      month: month,
      type: type,
      zoom: zoom,
      seriesL: seriesL
    };
  
    Object.entries(filters).forEach(([filterType, value]) => {
      if (value) {
        pushSearchFilter(filterType, value);
      }
    });
  
    let filteredData = lens.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(nameFilter);
      const monthFilter = !month || item.month.includes(month);
      const compatibilityFilter =
        !compatibility || item.compatibility.includes(compatibility);
      const zoomFilter = !zoom || item.zoom === zoom;
      const seriesLFilter = !seriesL || item.seriesL === seriesL;
      const typeFilter = !type || item.type.includes(type);
      const bestFilters = best;
      const bestFilter =
        bestFilters.length === 0 ||
        bestFilters.some((bestValue) => item.best.includes(bestValue));
  
      return (
        nameMatch &&
        monthFilter &&
        compatibilityFilter &&
        typeFilter &&
        zoomFilter &&
        seriesLFilter &&
        bestFilter
      );
    });
  
    document.getElementById('resultado').innerHTML = '';
    let resultadoBox = document.querySelector('.resultadoBox');
    let resultadoDiv = document.getElementById('resultado');
    let resultadoEmpty = document.getElementById('resultadoEmpty');
  
    filteredData.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const title = document.createElement('h2');
      title.textContent = item.name;
      title.className = 'product-name';
      card.appendChild(title);
  
      const type = document.createElement('span');
      type.textContent = `${item.type}`.replace(/,/g, '  |  ');
      type.className = 'product-type';
      card.appendChild(type);
  
      if (item.productImage) {
        const cardProduct = document.createElement('div');
        cardProduct.className = 'cardProduct';
        card.appendChild(cardProduct);
  
        const productImage = document.createElement('img');
        productImage.src = item.productImage;
        productImage.className = 'product-image';
        cardProduct.appendChild(productImage);
      }
  
      if (item.samples.length > 0) {
        const bodySelector = document.querySelector('body');
        const sampleDiv = document.createElement('div');
        sampleDiv.className = 'sample-div';
        const sampleBox = document.createElement('div');
        sampleBox.className = 'sample-box';
        item.samples.forEach(function (imageSrc) {
          const sample = document.createElement('img');
          sample.src = imageSrc;
          sample.className = 'sample-image';
          sample.addEventListener('click', function () {
            bodySelector.classList.toggle('divOverflowY');
            openLightbox(imageSrc);
          });
          sampleDiv.appendChild(sample);
        });
        sampleBox.appendChild(sampleDiv);
        card.appendChild(sampleBox);
      }
  
      const month = document.createElement('p');
      month.innerHTML = `Montagem: <span class="typeMonth">${item.month}</span>`;
      month.className = 'product-month';
      card.appendChild(month);
  
      if (item.compatibility.length > 1) {
        const compatibility = document.createElement('p');
        compatibility.className = 'product-compatibility';
        compatibility.innerHTML = `Compatibilidade: `;
        for (let i = 0; i < item.compatibility.length; i++) {
          let compatibilityItem = document.createElement('span');
          compatibilityItem.classList.add('compatibilityModel');
          compatibilityItem.textContent = item.compatibility[i];
          compatibility.appendChild(compatibilityItem);
          card.appendChild(compatibility);
        }
      } else {
        const compatibility = document.createElement('p');
        compatibility.innerHTML = `Compatibilidade: <span class="compatibilityModel">${item.compatibility}</span>`;
        compatibility.className = 'product-compatibility';
        card.appendChild(compatibility);
      }
  
      const zoom = document.createElement('p');
      zoom.innerHTML = `Possui zoom: <span class="hasZoom">${item.zoom}</span>`;
      zoom.className = 'product-zoom';
      card.appendChild(zoom);
  
      const serieL = document.createElement('p');
      serieL.innerHTML = `Lente Série L: <span class="serieL-type">${item.seriesL}</span>`;
      serieL.className = 'product-serieL';
      card.appendChild(serieL);
  
      if (item.best.length > 1) {
        const best = document.createElement('p');
        best.className = 'product-best';
        best.innerHTML = `Indicada para: `;
        card.appendChild(best);
        for (let i = 0; i < item.best.length; i++) {
          let bestItem = document.createElement('span');
          bestItem.classList.add('bestFor');
          bestItem.textContent = item.best[i];
          best.appendChild(bestItem);
          card.appendChild(best);
        }
      } else {
        const best = document.createElement('p');
        best.innerHTML = `Indicada para: <span class="bestFor">${item.best}</span>`;
        best.className = 'product-best';
        card.appendChild(best);
      }
  
      if (item.compatibility.length > 1) {
        const disclaimer = document.createElement('p');
        disclaimer.className = 'product-disclaimer';
        disclaimer.innerHTML = `*Esta lente é compatível com todas as câmeras do sistema DSLR. Sistema R SOMENTE com uso do adaptador RF e sistema M SOMENTE com uso do adaptador M.`;
        card.appendChild(disclaimer);
      } else {
        const disclaimer = document.createElement('p');
        disclaimer.className = 'product-disclaimer';
        disclaimer.innerHTML = `*Esta lente é compatível SOMENTE com câmeras do sistema R. NÃO sendo compatível com sistema DSLR e nem sistema M.`;
        card.appendChild(disclaimer);
      }
  
      const ctaBox = document.createElement('div');
      ctaBox.className = 'ctaBox';
      card.appendChild(ctaBox);
  
      const cta = document.createElement('a');
      cta.className = 'cta';
      cta.innerHTML = `Comprar`;
      cta.href = `${item.link}`;
      cta.target = '_blank';
      
      // Analytics: Track product clicks 
      cta.addEventListener('click', () => {
        pushProductClick(item);
      });
      
      ctaBox.appendChild(cta);
  
      resultadoDiv.appendChild(card);
      
      // Analytics: Track product view
      pushProductView(item);
    });
  
    // Rest of your tag handling code...
    const resultTag = document.querySelector('.resultTag');
  
    const nameProduct = document.querySelector('#nameFilter').value;
    if (nameProduct.length >= 1) {
        document.querySelectorAll('.tagproductName').forEach((item) => {
          item.remove();
        });
        const tagproductName = document.createElement('div');
        tagproductName.className = 'resultTagItem tagproductName';
        tagproductName.innerHTML = nameProduct;
        resultTag.appendChild(tagproductName);
    
        const tagproductNameClose = document.createElement('span');
        tagproductNameClose.className = 'btn-close-tag btn-close-tag-name';
        tagproductNameClose.innerHTML = 'X';
        tagproductName.appendChild(tagproductNameClose);
    
        const btCloseNameProduct = document.querySelector('.btn-close-tag-name');
        btCloseNameProduct.addEventListener('click', function () {
          document.querySelectorAll('.tagproductName').forEach((item) => {
            item.remove();
          });
          document.getElementById('nameFilter').value = '';
          filtrarDadosFilter();
        });
      } else {
        document.querySelectorAll('.tagproductName').forEach((item) => {
          item.remove();
        });
      }
  
      if (month) {
        document.querySelectorAll('.tagMonth').forEach((item) => {
          item.remove();
        });
        const tagMonth = document.createElement('div');
        tagMonth.className = 'resultTagItem tagMonth';
        tagMonth.innerHTML = month;
        resultTag.appendChild(tagMonth);
    
        const tagMonthClose = document.createElement('span');
        tagMonthClose.className = 'btn-close-tag btn-close-tag-month';
        tagMonthClose.innerHTML = 'X';
        tagMonth.appendChild(tagMonthClose);
    
        const btCloseMonth = document.querySelector('.btn-close-tag-month');
        btCloseMonth.addEventListener('click', function () {
          document.querySelectorAll('.tagMonth').forEach((item) => {
            item.remove();
          });
          month = '';
          filtrarDadosFilter();
          document.querySelector('#month > option:nth-child(1)').selected = true;
        });
      } else {
        document.querySelectorAll('.tagMonth').forEach((item) => {
          item.remove();
        });
      }
  
      if (compatibility) {
        document.querySelectorAll('.tagCompatibility').forEach((item) => {
          item.remove();
        });
        const tagCompatibility = document.createElement('div');
        tagCompatibility.className = 'resultTagItem tagCompatibility';
        tagCompatibility.innerHTML = compatibility;
        resultTag.appendChild(tagCompatibility);
    
        const tagCompatibilityClose = document.createElement('span');
        tagCompatibilityClose.className =
          'btn-close-tag btn-close-tag-compatibility';
        tagCompatibilityClose.innerHTML = 'X';
        tagCompatibility.appendChild(tagCompatibilityClose);
    
        const btCloseCompatibility = document.querySelector(
          '.btn-close-tag-compatibility',
        );
        btCloseCompatibility.addEventListener('click', function () {
          document.querySelectorAll('.tagCompatibility').forEach((item) => {
            item.remove();
          });
          compatibility = '';
          filtrarDadosFilter();
          document.querySelector(
            '#compatibility > option:nth-child(1)',
          ).selected = true;
        });
      } else {
        document.querySelectorAll('.tagCompatibility').forEach((item) => {
          item.remove();
        });
      }
  
      if (type) {
        document.querySelectorAll('.tagType').forEach((item) => {
          item.remove();
        });
        const tagType = document.createElement('div');
        tagType.className = 'resultTagItem tagType';
        tagType.innerHTML = type;
        resultTag.appendChild(tagType);
    
        const tagTypeClose = document.createElement('span');
        tagTypeClose.className = 'btn-close-tag btn-close-tag-Type';
        tagTypeClose.innerHTML = 'X';
        tagType.appendChild(tagTypeClose);
    
        const btCloseType = document.querySelector('.btn-close-tag-Type');
        btCloseType.addEventListener('click', function () {
          document.querySelectorAll('.tagType').forEach((item) => {
            item.remove();
          });
          type = '';
          filtrarDadosFilter();
          document.querySelector('#type > option:nth-child(1)').selected = true;
        });
      } else {
        document.querySelectorAll('.tagType').forEach((item) => {
          item.remove();
        });
      }
  
      if (best) {
        document.querySelectorAll('.tagBest').forEach((item) => {
          item.remove();
        });
    
        best.forEach((item) => {
          const tagBest = document.createElement('div');
          tagBest.className = `resultTagItem tagBest`;
          tagBest.innerHTML = item;
          resultTag.appendChild(tagBest);
    
          const tagBestClose = document.createElement('span');
          tagBestClose.className = `btn-close-tag btn-close-tag-best`;
          tagBestClose.innerHTML = 'X';
          tagBest.appendChild(tagBestClose);
    
          let btCloseBest = document.querySelectorAll('.btn-close-tag-best');
          btCloseBest.forEach((btClose) => {
            if (!btClose.hasEventListener) {
              btClose.addEventListener('click', function (event) {
                btClose.parentElement.remove();
    
                const index = best.indexOf(
                  event.target.parentElement.innerText.slice(0, -1),
                );
                if (index !== -1) {
                  best.splice(index, 1);
                }
                filtrarDadosFilter();
              });
              btClose.hasEventListener = true;
            }
          });
        });
      } else {
        document.querySelectorAll('.tagBest').forEach((item) => {
          item.remove();
        });
      }
  
      if (zoom) {
        document.querySelectorAll('.tagZoom').forEach((item) => {
          item.remove();
        });
        const tagZoom = document.createElement('div');
        tagZoom.className = 'resultTagItem tagZoom';
        if (zoom == 'Sim') {
          tagZoom.innerHTML = 'Lente Zoom';
        }
        if (zoom == 'Não') {
          tagZoom.innerHTML = 'Lente Fixa';
        }
        resultTag.appendChild(tagZoom);
    
        const tagZoomClose = document.createElement('span');
        tagZoomClose.className = 'btn-close-tag btn-close-tag-zoom';
        tagZoomClose.innerHTML = 'X';
        tagZoom.appendChild(tagZoomClose);
    
        const btCloseZoom = document.querySelector('.btn-close-tag-zoom');
        btCloseZoom.addEventListener('click', function () {
          document.querySelectorAll('.tagZoom').forEach((item) => {
            item.remove();
          });
          zoom = '';
          filtrarDadosFilter();
          document.querySelector('#zoom > option:nth-child(1)').selected = true;
        });
      } else {
        document.querySelectorAll('.tagZoom').forEach((item) => {
          item.remove();
        });
      }
  
      if (seriesL) {
        document.querySelectorAll('.tagSerieL').forEach((item) => {
          item.remove();
        });
        const tagSerieL = document.createElement('div');
        tagSerieL.className = 'resultTagItem tagSerieL';
        if (seriesL == 'Sim') {
          tagSerieL.innerHTML = 'Lentes Série L';
        }
        if (seriesL == 'Não') {
          tagSerieL.innerHTML = 'Lentes não Série L';
        }
        resultTag.appendChild(tagSerieL);
    
        const tagSerieLClose = document.createElement('span');
        tagSerieLClose.className = 'btn-close-tag btn-close-tag-seriel';
        tagSerieLClose.innerHTML = 'X';
        tagSerieL.appendChild(tagSerieLClose);
    
        const btCloseSerieL = document.querySelector('.btn-close-tag-seriel');
        btCloseSerieL.addEventListener('click', function () {
          document.querySelectorAll('.tagSerieL').forEach((item) => {
            item.remove();
          });
          seriesL = '';
          filtrarDadosFilter();
          document.querySelector('#seriesL > option:nth-child(1)').selected = true;
        });
      } else {
        document.querySelectorAll('.tagSerieL').forEach((item) => {
          item.remove();
        });
      }
  
    if (filteredData.length == 0) {
      resultadoDiv.classList.add('hide');
      resultadoBox.classList.remove('hide');
      resultadoEmpty.classList.remove('hide');
    } else {
      resultadoDiv.classList.remove('hide');
      resultadoBox.classList.remove('hide');
      resultadoEmpty.classList.add('hide');
    }
  
    resultSearch = filteredData.length;
    const resultNumber = document.querySelector('.resultNumber');
    const resultText = document.querySelector('.resultText');
  
    if (filteredData.length < 2) {
      resultNumber.innerHTML = resultSearch;
      resultText.innerText = "Lente Encontrada";
    } else {
      resultNumber.innerHTML = resultSearch;
      resultText.innerText = "Lentes Encontradas";
    }
  };
// Fim Filtros nos Steps

// Filtro na pág de resultados
const selectLensFilter = () => {
  styleLenses.forEach(function (styleLens) {
    if (styleLens.checked) {
      const index = best.indexOf(styleLens.value);
      if (index !== -1) {
        best.splice(index, 1);
      }
    }
    styleLens.checked = false;
  });

  event.preventDefault();
  month = document.querySelector('#month').value;
  compatibility = document.querySelector('#compatibility').value;
  type = document.querySelector('#type').value;

  const inputZoom1 = document.querySelectorAll('#zoom');
  inputZoom1.forEach((input) => {
    input.addEventListener('click', function () {
      inputZoom1.forEach((item) => {
        if (item.checked) {
          zoom = item.value;
        }
      });
    });
  });

  const inputSerieL1 = document.querySelectorAll('#seriesL');
  inputSerieL1.forEach((input) => {
    input.addEventListener('click', function () {
      inputSerieL1.forEach((item) => {
        if (item.checked) {
          seriesL = item.value;
        }
      });
    });
  });

  filtrarDadosFilter();
  scrollToTop();

  styleLenses.forEach(function (styleLens) {
    if (styleLens.checked) {
      const index = best.indexOf(styleLens.value);
      if (index !== -1) {
        best.splice(index, 1);
      }
    }
    styleLens.checked = false;
  });
};

const filtrarDadosFilter = () => {
  document.querySelector('.formBox form').scrollTop = 0;
  const nameFilter = document.getElementById('nameFilter').value.toLowerCase();

  let filteredData = lens.filter((item) => {
    const monthFilter = !month || item.month.includes(month);
    const compatibilityFilter = !compatibility || item.compatibility.includes(compatibility);
    const zoomFilter = !zoom || item.zoom === zoom;
    const seriesLFilter = !seriesL || item.seriesL === seriesL;

    // Filtro para o tipo de lente
    const typeFilter = !type || item.type.includes(type);

    const bestFilters = best;

    const bestFilter = bestFilters.length === 0 || bestFilters.some((bestValue) => item.best.includes(bestValue));

    const nameMatch = item.name.toLowerCase().includes(nameFilter);

    return nameMatch && monthFilter && compatibilityFilter && typeFilter && zoomFilter && seriesLFilter && bestFilter;
  });

  document.getElementById('resultado').innerHTML = '';
  let resultadoBox = document.querySelector('.resultadoBox');
  let resultadoDiv = document.getElementById('resultado');
  let resultadoEmpty = document.getElementById('resultadoEmpty');

  filteredData.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h2');
    title.textContent = item.name;
    title.className = 'product-name';
    card.appendChild(title);

    const type = document.createElement('span');
    type.textContent = `${item.type}`.replace(/,/g, '  |  ');
    type.className = 'product-type';
    card.appendChild(type);

    if (item.productImage) {
      const cardProduct = document.createElement('div');
      cardProduct.className = 'cardProduct';
      card.appendChild(cardProduct);

      const productImage = document.createElement('img');
      productImage.src = item.productImage;
      productImage.className = 'product-image';
      cardProduct.appendChild(productImage);
    }

    function openLightbox(imageSrc) {
      const lightboxModal = document.getElementById('lightbox-modal');
      const lightboxImage = document.getElementById('lightbox-image');
      lightboxImage.src = imageSrc;
      lightboxModal.style.display = 'block';
    }

    if (item.samples.length > 0) {
      const bodySelector = document.querySelector('body');
      const sampleDiv = document.createElement('div');
      sampleDiv.className = 'sample-div';
      const sampleBox = document.createElement('div');
      sampleBox.className = 'sample-box';
      item.samples.forEach(function (imageSrc) {
        const sample = document.createElement('img');
        sample.src = imageSrc;
        sample.className = 'sample-image';
        // Adicione o evento de clique para abrir o lightbox com a imagem clicada
        sample.addEventListener('click', function () {
          bodySelector.classList.toggle('divOverflowY');
          openLightbox(imageSrc);
        });
        sampleDiv.appendChild(sample);
      });
      sampleBox.appendChild(sampleDiv);
      card.appendChild(sampleBox);
    }

    const month = document.createElement('p');
    month.innerHTML = `Montagem: <span class="typeMonth">${item.month}</span>`;
    month.className = 'product-month';
    card.appendChild(month);

    if (item.compatibility.length > 1) {
      const compatibility = document.createElement('p');
      compatibility.className = 'product-compatibility';

      const twoCompatibility = document.createElement('span');
      compatibility.innerHTML = `Compatibilidade: `;

      for (let i = 0; i < item.compatibility.length; i++) {
        let compatibilityItem = document.createElement('span');
        compatibilityItem.classList.add('compatibilityModel');
        compatibilityItem.textContent = item.compatibility[i];

        compatibility.appendChild(compatibilityItem);
        card.appendChild(compatibility);
      }
    } else {
      const compatibility = document.createElement('p');
      compatibility.innerHTML = `Compatibilidade: <span class="compatibilityModel">${item.compatibility}</span>`;
      compatibility.className = 'product-compatibility';
      card.appendChild(compatibility);
    }

    const zoom = document.createElement('p');
    zoom.innerHTML = `Possui zoom: <span class="hasZoom">${item.zoom}</span>`;
    zoom.className = 'product-zoom';
    card.appendChild(zoom);

    const serieL = document.createElement('p');
    serieL.innerHTML = `Lente Série L: <span class="serieL-type">${item.seriesL}</span>`;
    serieL.className = 'product-serieL';
    card.appendChild(serieL);

    if (item.best.length > 1) {
      const best = document.createElement('p');
      best.className = 'product-best';
      const bestfor = document.createElement('span');
      best.innerHTML = `Indicada para: `;
      card.appendChild(best);
      for (let i = 0; i < item.best.length; i++) {
        let bestItem = document.createElement('span');
        bestItem.classList.add('bestFor');
        bestItem.textContent = item.best[i];
        best.appendChild(bestItem);
        card.appendChild(best);
      }
    } else {
      const best = document.createElement('p');
      best.innerHTML = `Indicada para: <span class="bestFor">${item.best}</span>`;
      best.className = 'product-best';
      card.appendChild(best);
    }

    if (item.compatibility.length > 1) {
      const disclaimer = document.createElement('p');
      disclaimer.className = 'product-disclaimer';
      disclaimer.innerHTML = `*Esta lente é compatível com todas as câmeras do sistema DSLR. Sistema R SOMENTE com uso do adaptador RF e sistema M SOMENTE com uso do adaptador M.`;
      card.appendChild(disclaimer);
    } else {
      const disclaimer = document.createElement('p');
      disclaimer.className = 'product-disclaimer';
      disclaimer.innerHTML = `*Esta lente é compatível SOMENTE com câmeras do sistema R. NÃO sendo compatível com sistema DSLR e nem sistema M.`;
      card.appendChild(disclaimer);
    }

    const ctaBox = document.createElement('div');
    ctaBox.className = 'ctaBox';
    card.appendChild(ctaBox);

    const cta = document.createElement('a');
    cta.className = 'cta';
    cta.innerHTML = `Comprar`;
    cta.href = `${item.link}`;
    cta.target = '_blank';
    ctaBox.appendChild(cta);

    resultadoDiv.appendChild(card);
  });

  const resultTag = document.querySelector('.resultTag');

  const nameProduct = document.querySelector('#nameFilter').value;
  if (nameProduct.length >= 1) {
    document.querySelectorAll('.tagproductName').forEach((item) => {
      item.remove();
    });
    const tagproductName = document.createElement('div');
    tagproductName.className = 'resultTagItem tagproductName';
    tagproductName.innerHTML = nameProduct;
    resultTag.appendChild(tagproductName);

    const tagproductNameClose = document.createElement('span');
    tagproductNameClose.className = 'btn-close-tag btn-close-tag-name';
    tagproductNameClose.innerHTML = 'X';
    tagproductName.appendChild(tagproductNameClose);

    const btCloseNameProduct = document.querySelector('.btn-close-tag-name');
    btCloseNameProduct.addEventListener('click', function () {
      document.querySelectorAll('.tagproductName').forEach((item) => {
        item.remove();
      });
      document.getElementById('nameFilter').value = '';
      filtrarDadosFilter();
    });
  } else {
    document.querySelectorAll('.tagproductName').forEach((item) => {
      item.remove();
    });
  }

  if (month) {
    document.querySelectorAll('.tagMonth').forEach((item) => {
      item.remove();
    });
    const tagMonth = document.createElement('div');
    tagMonth.className = 'resultTagItem tagMonth';
    tagMonth.innerHTML = month;
    resultTag.appendChild(tagMonth);

    const tagMonthClose = document.createElement('span');
    tagMonthClose.className = 'btn-close-tag btn-close-tag-month';
    tagMonthClose.innerHTML = 'X';
    tagMonth.appendChild(tagMonthClose);

    const btCloseMonth = document.querySelector('.btn-close-tag-month');
    btCloseMonth.addEventListener('click', function () {
      document.querySelectorAll('.tagMonth').forEach((item) => {
        item.remove();
      });
      month = '';
      filtrarDadosFilter();
      document.querySelector('#month > option:nth-child(1)').selected = true;
    });
  } else {
    document.querySelectorAll('.tagMonth').forEach((item) => {
      item.remove();
    });
  }

  if (compatibility) {
    document.querySelectorAll('.tagCompatibility').forEach((item) => {
      item.remove();
    });
    const tagCompatibility = document.createElement('div');
    tagCompatibility.className = 'resultTagItem tagCompatibility';
    tagCompatibility.innerHTML = compatibility;
    resultTag.appendChild(tagCompatibility);

    const tagCompatibilityClose = document.createElement('span');
    tagCompatibilityClose.className = 'btn-close-tag btn-close-tag-compatibility';
    tagCompatibilityClose.innerHTML = 'X';
    tagCompatibility.appendChild(tagCompatibilityClose);

    const btCloseCompatibility = document.querySelector('.btn-close-tag-compatibility');
    btCloseCompatibility.addEventListener('click', function () {
      document.querySelectorAll('.tagCompatibility').forEach((item) => {
        item.remove();
      });
      compatibility = '';
      filtrarDadosFilter();
      document.querySelector('#compatibility > option:nth-child(1)').selected = true;
    });
  } else {
    document.querySelectorAll('.tagCompatibility').forEach((item) => {
      item.remove();
    });
  }

  if (type) {
    document.querySelectorAll('.tagType').forEach((item) => {
      item.remove();
    });
    const tagType = document.createElement('div');
    tagType.className = 'resultTagItem tagType';
    tagType.innerHTML = type;
    resultTag.appendChild(tagType);

    const tagTypeClose = document.createElement('span');
    tagTypeClose.className = 'btn-close-tag btn-close-tag-Type';
    tagTypeClose.innerHTML = 'X';
    tagType.appendChild(tagTypeClose);

    const btCloseType = document.querySelector('.btn-close-tag-Type');
    btCloseType.addEventListener('click', function () {
      document.querySelectorAll('.tagType').forEach((item) => {
        item.remove();
      });
      type = '';
      filtrarDadosFilter();
      document.querySelector('#type > option:nth-child(1)').selected = true;
    });
  } else {
    document.querySelectorAll('.tagType').forEach((item) => {
      item.remove();
    });
  }

  if (best) {
    document.querySelectorAll('.tagBest').forEach((item) => {
      item.remove();
    });

    best.forEach((item) => {
      const tagBest = document.createElement('div');
      tagBest.className = `resultTagItem tagBest`;
      tagBest.innerHTML = item;
      resultTag.appendChild(tagBest);

      const tagBestClose = document.createElement('span');
      tagBestClose.className = `btn-close-tag btn-close-tag-best`;
      tagBestClose.innerHTML = 'X';
      tagBest.appendChild(tagBestClose);

      let btCloseBest = document.querySelectorAll('.btn-close-tag-best');
      btCloseBest.forEach((btClose) => {
        if (!btClose.hasEventListener) {
          btClose.addEventListener('click', function (event) {
            btClose.parentElement.remove();

            const index = best.indexOf(event.target.parentElement.innerText.slice(0, -1));
            if (index !== -1) {
              best.splice(index, 1);
            }
            styleLenses1.forEach(function (styleLens) {
              styleLens.checked = false;
            });

            filtrarDadosFilter();
          });
          btClose.hasEventListener = true;
        }
      });
    });
  } else {
    document.querySelectorAll('.tagBest').forEach((item) => {
      item.remove();
    });
  }

  if (zoom) {
    document.querySelectorAll('.tagZoom').forEach((item) => {
      item.remove();
    });
    const tagZoom = document.createElement('div');
    tagZoom.className = 'resultTagItem tagZoom';
    if (zoom == 'Sim') {
      tagZoom.innerHTML = 'Lente Zoom';
    }
    if (zoom == 'Não') {
      tagZoom.innerHTML = 'Lente Fixa';
    }
    resultTag.appendChild(tagZoom);

    const tagZoomClose = document.createElement('span');
    tagZoomClose.className = 'btn-close-tag btn-close-tag-zoom';
    tagZoomClose.innerHTML = 'X';
    tagZoom.appendChild(tagZoomClose);

    const btCloseZoom = document.querySelector('.btn-close-tag-zoom');
    btCloseZoom.addEventListener('click', function () {
      document.querySelectorAll('.tagZoom').forEach((item) => {
        item.remove();
      });
      zoom = '';
      filtrarDadosFilter();
      document.querySelector('#zoom > option:nth-child(1)').selected = true;
    });
  } else {
    document.querySelectorAll('.tagZoom').forEach((item) => {
      item.remove();
    });
  }

  if (seriesL) {
    document.querySelectorAll('.tagSerieL').forEach((item) => {
      item.remove();
    });
    const tagSerieL = document.createElement('div');
    tagSerieL.className = 'resultTagItem tagSerieL';
    if (seriesL == 'Sim') {
      tagSerieL.innerHTML = 'Lentes Série L';
    }
    if (seriesL == 'Não') {
      tagSerieL.innerHTML = 'Lentes não Série L';
    }
    resultTag.appendChild(tagSerieL);

    const tagSerieLClose = document.createElement('span');
    tagSerieLClose.className = 'btn-close-tag btn-close-tag-seriel';
    tagSerieLClose.innerHTML = 'X';
    tagSerieL.appendChild(tagSerieLClose);

    const btCloseSerieL = document.querySelector('.btn-close-tag-seriel');
    btCloseSerieL.addEventListener('click', function () {
      document.querySelectorAll('.tagSerieL').forEach((item) => {
        item.remove();
      });
      seriesL = '';
      filtrarDadosFilter();
      document.querySelector('#seriesL > option:nth-child(1)').selected = true;
    });
  } else {
    document.querySelectorAll('.tagSerieL').forEach((item) => {
      item.remove();
    });
  }

  if (filteredData.length == 0) {
    resultadoDiv.classList.add('hide');
    resultadoBox.classList.remove('hide');
    resultadoEmpty.classList.remove('hide');
  } else {
    resultadoDiv.classList.remove('hide');
    resultadoBox.classList.remove('hide');
    resultadoEmpty.classList.add('hide');
  }

  resultSearch = filteredData.length;
  const resultNumber = document.querySelector('.resultNumber');
  const resultText = document.querySelector('.resultText');

  if (filteredData.length < 2) {
    resultNumber.innerHTML = resultSearch;
    resultText.innerText = 'Lente Encontrada';
  } else {
    resultNumber.innerHTML = resultSearch;
    resultText.innerText = 'Lentes Encontradas';
  }

  // console.log(filteredData);

  if (!document.querySelector('.tagproductName') && !document.querySelector('.tagMonth') && !document.querySelector('.tagCompatibility') && !document.querySelector('.tagType') && !document.querySelector('.tagBest') && !document.querySelector('.tagZoom') && !document.querySelector('.tagSerieL') && !document.querySelector('.tagEmpty')) {
    const tagEmpty = document.createElement('div');
    tagEmpty.className = 'resultTagItem tagEmpty';
    tagEmpty.innerHTML = `Nenhum filtro aplicado &nbsp`;
    resultTag.appendChild(tagEmpty);
  } else {
    if (document.querySelector('.tagproductName') || document.querySelector('.tagMonth') || document.querySelector('.tagCompatibility') || document.querySelector('.tagType') || document.querySelector('.tagBest') || document.querySelector('.tagZoom') || (document.querySelector('.tagSerieL') && document.querySelector('.tagEmpty'))) {
      document.querySelectorAll('.tagEmpty').forEach((item) => {
        item.remove();
      });
    }
  }
};
// Fim Filtro na pág de resultados

const previousStart = () => {
  if (document.querySelector('.tagEmpty')) {
    document.querySelector('.tagEmpty').remove();
  }

  const filtro = document.querySelector('#filtro');
  filtro.classList.add('hide');

  const home = document.querySelector('.home');
  home.classList.remove('hide');
  step1.classList.remove('hide');
  step2.classList.add('hide');
  step3A.classList.add('hide');
  step3B.classList.add('hide');
  step4.classList.add('hide');
  typeLenses.forEach(function (typeLens) {
    typeLens.checked = false;
    bt03A.setAttribute('disabled', 'disabled');
    bt03B.setAttribute('disabled', 'disabled');
    bt4.setAttribute('disabled', 'disabled');
    document.querySelector('#tipoLente').checked = false;
    document.querySelector('#estiloFoto').checked = false;
    document.querySelector('.DSLR').checked = false;
    document.querySelector('.Mirrorless').checked = false;
    const btnNext2 = document.querySelector('.bt-next-2');
    inputZoom[0].checked = false;
    inputZoom[1].checked = false;
    inputZoom[2].checked = false;
    inputSerieL[0].checked = false;
    inputSerieL[1].checked = false;
    typeZoomSelect = false;
    typeSerieLSelect = false;
    btnNext2.setAttribute('disabled', 'disabled');
  });
  type = '';
  styleLenses.forEach(function (styleLens) {
    styleLens.checked = false;
    bt03A.setAttribute('disabled', 'disabled');
    bt03B.setAttribute('disabled', 'disabled');
    bt4.setAttribute('disabled', 'disabled');
    document.querySelector('#tipoLente').checked = false;
    document.querySelector('#estiloFoto').checked = false;
    document.querySelector('.DSLR').checked = false;
    document.querySelector('.Mirrorless').checked = false;
    const btnNext2 = document.querySelector('.bt-next-2');
    inputZoom[0].checked = false;
    inputZoom[1].checked = false;
    inputZoom[2].checked = false;
    inputSerieL[0].checked = false;
    inputSerieL[1].checked = false;
    typeZoomSelect = false;
    typeSerieLSelect = false;
    btnNext2.setAttribute('disabled', 'disabled');
  });
  best = [];
  scrollToTop();
};
