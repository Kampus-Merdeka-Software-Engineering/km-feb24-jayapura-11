document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('chartDropdown');
  const chartImages = document.querySelectorAll('.chart-images');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const header = document.getElementById('header');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('#nav-menu');

  let currentIndex = 0;
  let lastScrollTop = 0;
  const delta = 5;
  const navbarHeight = header.offsetHeight;

  // Chart navigation functions
  function showChart(index) {
    chartImages.forEach((chart, i) => {
      chart.classList.toggle('active', i === index);
    });
  }

  function updateChartIndex(change) {
    currentIndex = (currentIndex + change + chartImages.length) % chartImages.length;
    dropdown.selectedIndex = currentIndex;
    showChart(currentIndex);
  }

  dropdown.addEventListener('change', () => {
    currentIndex = dropdown.selectedIndex;
    showChart(currentIndex);
  });

  nextBtn.addEventListener('click', () => updateChartIndex(1));
  prevBtn.addEventListener('click', () => updateChartIndex(-1));

  // Header scroll and menu toggle
  window.addEventListener(
    'scroll',
    function () {
      let scrollTop = window.pageYOffset;

      if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

      if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        // Scroll Down
        header.style.top = `-${navbarHeight}px`;
        hamburgerMenu.style.display = 'flex';
        navMenu.classList.remove('active');
        // Reduce the width of the navigation menu
        navMenu.style.width = 'calc(80% - 90px)'; // Adjust the width reduction according to your preference
      } else {
        // Scroll Up
        if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
          header.style.top = '0';
        }
        hamburgerMenu.style.display = 'none';
        // Restore the width of the navigation menu
        navMenu.style.width = '60%';
      }

      lastScrollTop = scrollTop;
    },
    false
  );

  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const navbarHeight = header.offsetHeight;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // Scroll down
          if (scrollTop > navbarHeight) {
              header.classList.add('scrolled');
          }
      } else {
          // Scroll up
          if (scrollTop <= navbarHeight) {
              header.classList.remove('scrolled');
          }
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const navbarHeight = header.offsetHeight;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // Scroll down
          if (scrollTop > navbarHeight) {
              header.classList.add('scrolled');
          }
      } else {
          // Scroll up
          if (scrollTop <= navbarHeight) {
              header.classList.remove('scrolled');
          }
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('chartDropdown')
  const chartImages = document.querySelectorAll('.chart-images')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')
  const header = document.getElementById('header')
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const navMenu = document.querySelector('#nav-menu')

  let currentIndex = 0
  let lastScrollTop = 0
  const delta = 5
  const navbarHeight = header.offsetHeight

  // Chart navigation functions
  function showChart(index) {
    chartImages.forEach((chart, i) => {
      chart.classList.toggle('active', i === index)
    })
  }

  function updateChartIndex(change) {
    currentIndex =
      (currentIndex + change + chartImages.length) % chartImages.length
    dropdown.selectedIndex = currentIndex
    showChart(currentIndex)
  }

  dropdown.addEventListener('change', () => {
    currentIndex = dropdown.selectedIndex
    showChart(currentIndex)
  })

  nextBtn.addEventListener('click', () => updateChartIndex(1))
  prevBtn.addEventListener('click', () => updateChartIndex(-1))

  // Header scroll and menu toggle
  window.addEventListener(
    'scroll',
    function () {
      let scrollTop = window.pageYOffset

      if (Math.abs(lastScrollTop - scrollTop) <= delta) return

      if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        // Scroll Down
        header.style.top = `-${navbarHeight}px`
        hamburgerMenu.style.display = 'flex'
        navMenu.classList.remove('active')
      } else {
        // Scroll Up
        if (
          scrollTop + window.innerHeight <
          document.documentElement.scrollHeight
        ) {
          header.style.top = '0'
        }
        hamburgerMenu.style.display = 'none'
      }

      lastScrollTop = scrollTop
    },
    false
  )

  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })

  // Data table initialization
  $(document).ready(function () {
    $('#table-properties').DataTable({
      ajax: {
        url: 'data.json',
        dataSrc: '',
      },
      pageLength: 10,
      columns: [
        {
          data: null,
          title: 'No.',
          render: (data, type, row, meta) =>
            meta.row + meta.settings._iDisplayStart + 1,
        },
        { data: 'BOROUGH' },
        { data: 'BUILDING CLASS CATEGORY' },
        { data: 'BLOCK' },
        { data: 'LOT' },
        { data: 'RESIDENTIAL UNITS' },
        { data: 'COMMERCIAL UNITS' },
        { data: 'TOTAL UNITS' },
        { data: 'LUAS TANAH (KAKI)' },
        { data: 'UKURAN LUAS SELURUH BANGUNAN' },
        { data: 'YEAR BUILT' },
        { data: 'SALE PRICE' },
      ],
    })
  })
})


//scorecard
let chartConfig = {
  layout: '2x3',
  graphset: [
    {
      type: 'scorecard',
      options: {
        value: {
          text: '11.016',
        },
        title: {
          text: 'Total Unit Terjual',
        },
        bars: [
          {
            text: '01 One Family Dwellings',
            value: '4728',
          },
          {
            text: '02 Two Family Dwellings',
            value: '3922',
          },
          {
            text: '04 Tax Class 1 Condos',
            value: '514',
          },
          {
            text: '22 Store Buildings',
            value: '418',
          },
          {
            text: '21 Office Buildings',
            value: '82',
          },
        ],
        icon: {
          backgroundScale: 0.95,
          backgroundColor: '#8FBC8F',
        },
        'max-value': 1000,
        'bar-width': '10px',
      },
      plotarea: {
        margin: '10px',
      },
    },

    {
      type: 'scorecard',
      options: {
        value: {
          text: '521.087',
        },
        bars: [
          {
            text: '01 One Family Dwellings',
            value: '1049256',
          },
          {
            text: '02 Two Family Dwellings',
            value: '1217144',
          },
          {
            text: '04 Tax Class 1 Condos',
            value: '762094',
          },
          {
            text: '22 Store Buildings',
            value: '1612662',
          },
          {
            text: '21 Office Buildings',
            value: '4001395',
          },
        ],
        icon: {
          backgroundColor: '#E9967A',
          backgroundScale: 0.75,
          borderColor: '#ff7200',
        },
        title: {
          text: 'Sale Prices',
        },
      },
      plotarea: {
        margin: '10px',
      },
    },
    {
      type: 'scorecard',
      options: {
        value: {
          text: '4349.28',
        },
        title: {
          text: 'Luas Bangunan',
        },
        bars: [
          {
            text: '01 One Family Dwellings',
            value: '1527399221',
          },
          {
            text: '02 Two Family Dwellings',
            value: '2113860938',
          },
          {
            text: '04 Tax Class 1 Condos',
            value: '3160',
          },
          {
            text: '22 Store Buildings',
            value: '3017984506',
          },
          {
            text: '21 Office Buildings',
            value: '4738510111',
          },
        ],
        icon: {
          backgroundScale: 0.95,
          backgroundColor: '#DDA0DD',
        },
        'max-value': 1000,
        'bar-width': '10px',
      },
      plotarea: {
        margin: '10px',
      },
    },

    {
      type: 'scorecard',
      options: {
        value: {
          text: '4.808.003.263',
        },
        title: {
          text: 'Luas Tanah',
        },
        bars: [
          {
            text: '01 One Family Dwellings',
            value: '3373536023',
          },
          {
            text: '02 Two Family Dwellings',
            value: '4369943431',
          },
          {
            text: '04 Tax Class 1 Condos',
            value: '7422',
          },
          {
            text: '22 Store Buildings',
            value: '8255361',
          },
          {
            text: '21 Office Buildings',
            value: '8979343',
          },
        ],
        icon: {
          backgroundScale: 0.95,
        },
        'max-value': 1000,
        'bar-width': '10px',
      },
      plotarea: {
        margin: '10px',
      },
    },
    {
      type: 'scorecard',
      options: {
        value: {
          text: '6.694.484.029',
        },
        title: {
          text: 'Block',
        },
        bars: [
          {
            text: '01 One Family Dwellings',
            value: '3498540166',
          },
          {
            text: '02 Two Family Dwellings',
            value: '7984570057',
          },
          {
            text: '04 Tax Class 1 Condos',
            value: '6080050337',
          },
          {
            text: '22 Store Buildings',
            value: '2507396570',
          },
          {
            text: '21 Office Buildings',
            value: '283034094',
          },
        ],
        icon: {
          backgroundScale: 0.95,
          backgroundColor: '#D2B48C',
        },
        'max-value': 1000,
        'bar-width': '10px',
      },
      plotarea: {
        margin: '10px',
      },
    },
    {
      type: 'scorecard',
      options: {
        value: {
          text: '1.844.700.389',
        },
        title: {
          text: 'Lot',
        },
        bars: [
          {
            text: '01 One Family Dwellings',
            value: '8633561625',
          },
          {
            text: '02 Two Family Dwellings',
            value: '8180847458',
          },
          {
            text: '04 Tax Class 1 Condos',
            value: '1221179563',
          },
          {
            text: '22 Store Buildings',
            value: '4913157902',
          },
          {
            text: '21 Office Buildings',
            value: '283027147',
          },
        ],
        icon: {
          backgroundScale: 0.95,
          backgroundColor: '#dcdcdc',
        },
        'max-value': 1000,
        'bar-width': '10px',
      },
      plotarea: {
        margin: '10px',
      },
    },
  ],
};

zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%',
  modules: 'scorecard',
});
