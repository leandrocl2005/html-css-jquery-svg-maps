const data = {
  zonaDaMata: {
    id: "zona-da-mata",
    classToAdd: 'importantYellow',
    name: "Zona da Mata",
    risk: "Onda Amarela",
    defaultColor: '#ffd166',
    hoverColor: '#ffe1a6',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  trianguloMineiro: {
    id: "triangulo-mineiro",
    classToAdd: 'importantGreen',
    name: "Triângulo Mineiro",
    risk: "Onda Verde",
    defaultColor: '#06d6a0',
    hoverColor: '#35ffbf',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  jequitinhonha: {
    id: "jequitinhonha",
    classToAdd: 'importantRed',
    name: "Jequitinhonha",
    risk: "Onda Vermelha",
    defaultColor: '#ef476f',
    hoverColor: '#ff6489',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  norte: {
    id: "norte",
    classToAdd: 'importantYellow',
    name: "Norte de Minas",
    risk: "Onda Amarela",
    defaultColor: '#ffd166',
    hoverColor: '#ffe1a6',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  centralMineira: {
    id: "central-mineira",
    classToAdd: 'importantRed',
    name: "Central Mineira",
    risk: "Onda Vermelha",
    defaultColor: '#ef476f',
    hoverColor: '#ff6489',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  sul: {
    id: "sul",
    classToAdd: 'importantGreen',
    name: 'Sul de Minas',
    risk: "Onda Verde",
    defaultColor: '#06d6a0',
    hoverColor: '#35ffbf',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  regiaoMetropolitanaDeBH: {
    id: "regiao-metropolitana-de-bh",
    classToAdd: 'importantRed',
    name: "Metropolitana de BH",
    risk: "Onda Vermelha",
    defaultColor: '#ef476f',
    hoverColor: '#ff6489',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  noroesteDeMinas: {
    id: "noroeste-de-minas",
    classToAdd: 'importantYellow',
    name: "Noroeste de Minas",
    risk: "Onda Amarela",
    defaultColor: '#ffd166',
    hoverColor: '#ffe1a6',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  valeDoRioDoce: {
    id: "vale-do-rio-doce",
    classToAdd: 'importantRed',
    name: "Vale do Rio Doce",
    risk: "Onda Vermelha",
    defaultColor: '#ef476f',
    hoverColor: '#ff6489',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  valeDoMucuri: {
    id: "vale-do-mucuri",
    classToAdd: 'importantYellow',
    name: "Vale do Mucuri",
    risk: "Onda Amarela",
    defaultColor: '#ffd166',
    hoverColor: '#ffe1a6',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  camposDasVertentes: {
    id: "campos-das-vertentes",
    classToAdd: 'importantYellow',
    name: "Campos das Vertentes",
    risk: "Onda Amarela",
    defaultColor: '#ffd166',
    hoverColor: '#ffe1a6',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  oesteDeMinas: {
    id: "oeste-de-minas",
    classToAdd: 'importantYellow',
    name: "Oeste de Minas",
    risk: "Onda Amarela",
    defaultColor: '#ffd166',
    hoverColor: '#ffe1a6',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
}

function changeInfo(key) {
  document.getElementById('zone-name').innerHTML = data[key].name;
  document.getElementById('zone-risk').innerHTML = data[key].risk;
  document.getElementById('zone-risk').style.borderBottom = "2px solid "
    + data[key].defaultColor;
  document.getElementById('zone-cases').innerHTML = data[key].cases;
  document.getElementById('zone-deaths').innerHTML = data[key].deaths;
}

function changeStyle(key) {

}


const svg = document.getElementById("mg-map");

svg.addEventListener("load", function () {

  const svgDoc = svg.contentDocument

  Object.keys(data).forEach(key => {
    const zone = svgDoc.getElementById(data[key].id);

    zone.style.fill = data[key].defaultColor;
    zone.style.cursor = 'pointer';

    zone.addEventListener('mouseenter', function () {
      zone.style.fill = data[key].hoverColor;
    }, false);

    zone.addEventListener('mouseleave', function () {
      zone.style.fill = data[key].defaultColor;
    }, false)

    zone.addEventListener("click", function () {
      changeInfo(key);
    }, false);
  })

}, false);
