const data = {
  zonaDaMata: {
    id: "#zona-da-mata--inject-1",
    classToAdd: 'importantYellow',
    name: "Zona da Mata",
    riskClassification: "Onda Amarela",
    defaultColor: '#ffd166',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  trianguloMineiro: {
    id: "#triangulo-mineiro--inject-1",
    classToAdd: 'importantGreen',
    name: "Triângulo Mineiro",
    riskClassification: "Onda Verde",
    defaultColor: '#06d6a0',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  jequitinhonha: {
    id: "#jequitinhonha--inject-1",
    classToAdd: 'importantRed',
    name: "Jequitinhonha",
    riskClassification: "Onda Vermelha",
    defaultColor: '#ef476f',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  norte: {
    id: "#norte--inject-1",
    classToAdd: 'importantYellow',
    name: "Norte de Minas",
    riskClassification: "Onda Amarela",
    defaultColor: '#ffd166',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  centralMineira: {
    id: "#central-mineira--inject-1",
    classToAdd: 'importantRed',
    name: "Central Mineira",
    riskClassification: "Onda Vermelha",
    defaultColor: '#ef476f',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  sul: {
    id: "#sul--inject-1",
    classToAdd: 'importantGreen',
    name: 'Sul de Minas',
    riskClassification: "Onda Verde",
    defaultColor: '#06d6a0',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  regiaoMetropolitanaDeBH: {
    id: "#regiao-metropolitana-de-bh--inject-1",
    classToAdd: 'importantRed',
    name: "Metropolitana de BH",
    riskClassification: "Onda Vermelha",
    defaultColor: '#ef476f',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  noroesteDeMinas: {
    id: "#noroeste-de-minas--inject-1",
    classToAdd: 'importantYellow',
    name: "Noroeste de Minas",
    riskClassification: "Onda Amarela",
    defaultColor: '#ffd166',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  valeDoRioDoce: {
    id: "#vale-do-rio-doce--inject-1",
    classToAdd: 'importantRed',
    name: "Vale do Rio Doce",
    riskClassification: "Onda Vermelha",
    defaultColor: '#ef476f',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  valeDoMucuri: {
    id: "#vale-do-mucuri--inject-1",
    classToAdd: 'importantYellow',
    name: "Vale do Mucuri",
    riskClassification: "Onda Amarela",
    defaultColor: '#ffd166',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  camposDasVertentes: {
    id: "#campos-das-vertentes--inject-1",
    classToAdd: 'importantYellow',
    name: "Campos das Vertentes",
    riskClassification: "Onda Amarela",
    defaultColor: '#ffd166',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
  oesteDeMinas: {
    id: "#oeste-de-minas--inject-1",
    classToAdd: 'importantYellow',
    name: "Oeste de Minas",
    riskClassification: "Onda Amarela",
    defaultColor: '#ffd166',
    cases: 1500 + Math.floor(20000 * Math.random()),
    deaths: 15 + Math.floor(200 * Math.random())
  },
}

function main() {
  Object.keys(data).forEach(key => {

    const dataZone = data[key];
    const zone = $(dataZone.id);
    console.log("here");

    zone.addClass(dataZone.classToAdd);
    console.log("now here");

    zone.on('click', function () {
      $('#zone-name').text(dataZone.name);
      $('#zone-risk')
        .text(dataZone.riskClassification)
        .css('borderBottom', `2px solid ${dataZone.defaultColor}`);
      $('#zone-deaths').text(dataZone.deaths);
      $('#zone-cases').text(dataZone.cases);
    })
  })
}


if (document.readyState == 'complete')
  main();

$(window).bind("load", main);



