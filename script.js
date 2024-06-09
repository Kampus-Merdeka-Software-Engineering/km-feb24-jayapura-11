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

