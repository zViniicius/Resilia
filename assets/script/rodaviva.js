let cfg = {
  espiritualidade: {
    area: 'Espiritualidade',
    nota: 5,
    cor: 'rgb(158, 209, 16)',
  },
  saúde: {
    area: 'Saúde',
    nota: 8,
    cor: 'rgb(80, 181, 23)',
  },
  desenvolvimento: {
    area: 'Desenvolvimento Intelectual',
    nota: 8,
    cor: 'rgb(23, 144, 103)',
  },
  equilibrio: {
    area: 'Equilíbrio emocional',
    nota: 7,
    cor: 'rgb(71, 110, 155)',
  },
  proposito: {
    area: 'Propósito',
    nota: 8,
    cor: 'rgb(159, 73, 152)',
  },
  financas: {
    area: 'Finanças',
    nota: 6,
    cor: 'rgb(204, 66, 162)',
  },
  familia: {
    area: 'Familia',
    nota: 6,
    cor: 'rgb(255, 59, 167)',
  },
  amor: {
    area: 'Amor / Relacionamento',
    nota: 8,
    cor: 'rgb(255, 88, 0)',
  },
  social: {
    area: 'Social',
    nota: 8,
    cor: 'rgb(255, 129, 0)',
  },
  lazer: {
    area: 'Lazer',
    nota: 6,
    cor: 'rgb(254, 172, 0)',
  },
  plenitude: {
    area: 'Plenitude',
    nota: 7,
    cor: 'rgb(255, 204, 0)',
  },
  contribuicao: {
    area: 'Contribuição com o mundo',
    nota: 4,
    cor: 'rgb(237, 230, 4)',
  },
}
let { espiritualidade, saúde, desenvolvimento, equilibrio, proposito, financas, familia, amor, social, lazer, plenitude, contribuicao } = cfg

var options = {
  series: [espiritualidade.nota, saúde.nota, desenvolvimento.nota, equilibrio.nota, proposito.nota, financas.nota, familia.nota, amor.nota, social.nota, lazer.nota, plenitude.nota, contribuicao.nota],
  colors: [espiritualidade.cor, saúde.cor, desenvolvimento.cor, equilibrio.cor, proposito.cor, financas.cor, familia.cor, amor.cor, social.cor, lazer.cor, plenitude.cor, contribuicao.cor],
  chart: {
    width: 400,
    type: 'polarArea',
    foreColor: '#fff',
  },
  labels: [espiritualidade.area, saúde.area, desenvolvimento.area, equilibrio.area, proposito.area, financas.area, familia.area, amor.area, social.area, lazer.area, plenitude.area, contribuicao.area],
  fill: {
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  yaxis: {
    show: 0
  },
  legend: {
    position: 'top'
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  theme: {
    monochrome: {
      enabled: false,
      shadeTo: 'light',
      shadeIntensity: 1
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
