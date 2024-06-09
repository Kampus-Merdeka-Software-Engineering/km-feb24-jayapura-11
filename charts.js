document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('chartDropdown')
    const chartImages = document.querySelectorAll('.chart-images')
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')
    let currentIndex = 0
  
    // Menangani perubahan dropdown
    dropdown.addEventListener('change', function () {
      currentIndex = dropdown.selectedIndex
      showChart(currentIndex)
    })
  
    // Tombol next
    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % chartImages.length
      dropdown.selectedIndex = currentIndex
      showChart(currentIndex)
    })
  
    // Tombol previous
    prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + chartImages.length) % chartImages.length
      dropdown.selectedIndex = currentIndex
      showChart(currentIndex)
    })
  
    // Fungsi untuk menampilkan chart sesuai dengan index
    function showChart(index) {
      chartImages.forEach(function (chart, i) {
        if (i === index) {
          chart.classList.add('active')
        } else {
          chart.classList.remove('active')
        }
      })
    }
  })
  
  document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput')
  
    fileInput.addEventListener('change', function (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
  
      reader.onload = function (event) {
        const content = event.target.result
        processData(content)
      }
  
      reader.readAsText(file)
    })
  
    function processData(content) {
      // Memproses data CSV
      const rows = content.split('\n')
      const data = rows.map((row) => row.split(','))
  
      // Menampilkan data di konsol
      console.log(data)
    }
  })
  
  document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header')
    const hamburgerMenu = document.querySelector('.hamburger-menu')
    const navMenu = document.querySelector('#nav-menu')
  
    let lastScrollTop = 0
    const delta = 5
    const navbarHeight = header.offsetHeight
  
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
  })
  
  // Fungsi umum untuk membuat chartBCC
  function createMixedChart(elementId, regions, tut_abData, pricesData, tut_abLabel, pricesLabel) {
    var ctx = document.getElementById(elementId).getContext('2d');
  
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: regions,
            datasets: [{
                label: tut_abLabel,
                data: tut_abData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'left-y-axis'
            }, {
                label: pricesLabel,
                data: pricesData,
                type: 'line',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                yAxisID: 'right-y-axis'
            }
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
                'left-y-axis': {},
                'right-y-axis': {
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
  }
  
  // Membuat chartBCC
  fetchDataAndCreateChart('data/BCC1_R1_5.json', 'BCC1A', 'Total Unit Terjual <2010', 'Sale Prices <2010', 'Total Unit Terjual <2010', 'Sale Prices <2010');
  fetchDataAndCreateChart('data/BCC1_R1_5.json', 'BCC1B', 'Total Unit Terjual >2010', 'Sale Prices >2010', 'Total Unit Terjual >2010', 'Sale Prices >2010');
  fetchDataAndCreateChart('data/BCC2_R1_5.json', 'BCC2A', 'Total Unit Terjual <2010', 'Sale Prices <2010', 'Total Unit Terjual <2010', 'Sale Prices <2010');
  fetchDataAndCreateChart('data/BCC2_R1_5.json', 'BCC2B', 'Total Unit Terjual >2010', 'Sale Prices >2010', 'Total Unit Terjual >2010', 'Sale Prices >2010');
  fetchDataAndCreateChart('data/BCC4_R1_5.json', 'BCC4A', 'Total Unit Terjual <2010', 'Sale Prices <2010', 'Total Unit Terjual <2010', 'Sale Prices <2010');
  fetchDataAndCreateChart('data/BCC4_R1_5.json', 'BCC4B', 'Total Unit Terjual >2010', 'Sale Prices >2010', 'Total Unit Terjual >2010', 'Sale Prices >2010');
  fetchDataAndCreateChart('data/BCC21_R1_5.json', 'BCC21A', 'Total Unit Terjual <2010', 'Sale Prices <2010', 'Total Unit Terjual <2010', 'Sale Prices <2010');
  fetchDataAndCreateChart('data/BCC21_R1_5.json', 'BCC21B', 'Total Unit Terjual >2010', 'Sale Prices >2010', 'Total Unit Terjual >2010', 'Sale Prices >2010');
  fetchDataAndCreateChart('data/BCC22_R1_5.json', 'BCC22A', 'Total Unit Terjual <2010', 'Sale Prices <2010', 'Total Unit Terjual <2010', 'Sale Prices <2010');
  fetchDataAndCreateChart('data/BCC22_R1_5.json', 'BCC22B', 'Total Unit Terjual >2010', 'Sale Prices >2010', 'Total Unit Terjual >2010', 'Sale Prices >2010');
                 
  fetch('data/ASP_TUT.json')
            .then(response => response.json())
            .then(data => {
                // Extract regions and prices
                const regions = data.map(item => item.Region);
                const tut = data.map(item => Number(item['Total Unit Terjual'].replace(/,/g, '')));
                const asp = data.map(item => Number(item['Average Sale Price'].replace(/,/g, '')));
  
                // Get the context of the canvas element we want to select
                var ctx = document.getElementById('asptut').getContext('2d');
  
                // Create new chart
                var mixedChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: regions, // Add labels for x-axis
                        datasets: [{
                            label: 'Total Unit Terjual',
                            data: tut,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            yAxisID: 'left-y-axis' // Assign to left y-axis
                        }, {
                            label: 'Average Sale Price',
                            data: asp,
                            type: 'line',
                            backgroundColor: 'rgba(153, 102, 255, 0.2)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1,
                            yAxisID: 'right-y-axis' // Assign to right y-axis
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            },
                            'left-y-axis': {},
                            'right-y-axis': {
                                position: 'right',
                                grid: {
                                    drawOnChartArea: false
                                }}}}});});
  
  // Fungsi untuk mengambil data dan membuat chartPROP
  function fetchDataAndCreateChart(url, elementId, tutKey, pricesKey, tutLabel, pricesLabel) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const regions = data.map(item => item.Region);
            const tut = data.map(item => Number(item[tutKey]));
            const prices = data.map(item => Number(String(item[pricesKey]).replace(/,/g, '')));
  
            createMixedChart(elementId, regions, tut, prices, tutLabel, pricesLabel);
        });
  }
  
  // Fungsi umum untuk membuat chartPROP
  function createLineChart(elementId, regions, blockData, lotData, tanahData, bangunanData) {
    var ctx = document.getElementById(elementId).getContext('2d');
  
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: regions,
            datasets: [
                {
                    label: 'Block',
                    data: blockData,
                    type: 'line',
                    yAxisID: 'right-y-axis',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Lot',
                    data: lotData,
                    type: 'line',
                    yAxisID: 'right-y-axis',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Luas Tanah',
                    data: tanahData,
                    yAxisID: 'left-y-axis',
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Luas Bangunan',
                    data: bangunanData,
                    yAxisID: 'left-y-axis',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                'left-y-axis': {
                    type: 'linear',
                    position: 'left'
                },
                'right-y-axis': {
                    type: 'linear',
                    position: 'right'
                }
            }
        }
    });
  }
  
  // Fungsi untuk mengambil data dan membuat chartPROP
  function fetchDataAndCreateLineChart(url, elementId, blockKey, lotKey, tanahKey, bangunanKey) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const regions = data.map(item => item.Region);
            const block = data.map(item => item[blockKey]);
            const lot = data.map(item => item[lotKey]);
            const tanah = data.map(item => item[tanahKey]);
            const bangunan = data.map(item => item[bangunanKey]);
  
            createLineChart(elementId, regions, block, lot, tanah, bangunan);
        });}
  
  
  // Membuat chart untuk dataPROP
  fetchDataAndCreateLineChart('data/BCC1_R1_5.json', 'Prop1A', 'Block <2010', 'Lot <2010', 'Luas Tanah <2010', 'Luas Bangunan <2010');
  fetchDataAndCreateLineChart('data/BCC1_R1_5.json', 'Prop1B', 'Block >2010', 'Lot >2010', 'Luas Tanah >2010', 'Luas Bangunan >2010');
  fetchDataAndCreateLineChart('data/BCC2_R1_5.json', 'Prop2A', 'Block <2010', 'Lot <2010', 'Luas Tanah <2010', 'Luas Bangunan <2010');
  fetchDataAndCreateLineChart('data/BCC2_R1_5.json', 'Prop2B', 'Block >2010', 'Lot >2010', 'Luas Tanah >2010', 'Luas Bangunan >2010');
  fetchDataAndCreateLineChart('data/BCC4_R1_5.json', 'Prop4A', 'Block <2010', 'Lot <2010', 'Luas Tanah <2010', 'Luas Bangunan <2010');
  fetchDataAndCreateLineChart('data/BCC4_R1_5.json', 'Prop4B', 'Block >2010', 'Lot >2010', 'Luas Tanah >2010', 'Luas Bangunan >2010');
  fetchDataAndCreateLineChart('data/BCC21_R1_5.json', 'Prop21A', 'Block <2010', 'Lot <2010', 'Luas Tanah <2010', 'Luas Bangunan <2010');
  fetchDataAndCreateLineChart('data/BCC21_R1_5.json', 'Prop21B', 'Block >2010', 'Lot >2010', 'Luas Tanah >2010', 'Luas Bangunan >2010');
  fetchDataAndCreateLineChart('data/BCC22_R1_5.json', 'Prop22A', 'Block <2010', 'Lot <2010', 'Luas Tanah <2010', 'Luas Bangunan <2010');
  fetchDataAndCreateLineChart('data/BCC22_R1_5.json', 'Prop22B', 'Block >2010', 'Lot >2010', 'Luas Tanah >2010', 'Luas Bangunan >2010');
  
  fetch('data/YB_GABUNG.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
  
        // Extract data
        const yb = data.map(item => item.Year_Build);
        const tut_yb = data.map(item => Number(item['Total Unit Penjualan']));
        const sp_yb = data.map(item => Number(item['Sale Prices']));
        const block_yb = data.map(item => Number(item['Block']));
        const lot_yb = data.map(item => Number(item['Lot']));
        const tanah_yb = data.map(item => Number(item['Luas Tanah']));
        const bangunan_yb = data.map(item => Number(item['Luas Bangunan']));
  
        // Get the context of the canvas elements
        var ctx_asptut_yb = document.getElementById('asptut_yb').getContext('2d');
        var ctx_prop_yb = document.getElementById('prop_yb').getContext('2d');
  
        // Define colors for each Year_Build label
        const backgroundColorsTotalUnits = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'];
        const borderColorsTotalUnits = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'];
        const backgroundColorsSalePrices = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'];
        const borderColorsSalePrices = ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'];

        // Create new chart
        var mixedChart1 = new Chart(ctx_asptut_yb, {
            type: 'doughnut',
            data: {
                labels: yb,
                datasets: [{
                    label: 'Total Unit Penjualan',
                    data: tut_yb,
                    backgroundColor: backgroundColorsTotalUnits,
                    borderColor: borderColorsTotalUnits,
                    borderWidth: 1,
                }, {
                    label: 'Sales Prices',
                    data: sp_yb,
                    backgroundColor: backgroundColorsSalePrices,
                    borderColor: borderColorsSalePrices,
                    borderWidth: 1,
                }]
            },
            options: {
            }
        });
  
        var mixedChart2 = new Chart(ctx_prop_yb, {
            type: 'bar',
            data: {
                labels: yb,
                datasets: [{
                    label: 'Block',
                    data: block_yb,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }, {
                    label: 'Lot',
                    data: lot_yb,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }, {
                    label: 'Luas Tanah',
                    data: tanah_yb,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }, {
                    label: 'Luas Bangunan',
                    data: bangunan_yb,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
            }
        });
    });
  
  
  fetch('data/Eza4.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Extract regions and prices
        const bcc = data.map(item => item.BCC);
        const tut_ezaa = data.map(item => Number(item['Total Unit Terjual <2010']));
        const tut_ezab = data.map(item => Number(item['Total Unit Terjual >2010']));
        const sp_ezaa = data.map(item => Number(item['Sale Prices <2010']));
        const sp_ezab = data.map(item => Number(item['Sale Prices >2010']));
  
        // Get the context of the canvas element we want to select
        var ctx1 = document.getElementById('asptut_eza4').getContext('2d');
  
        // Create new chart
        var mixedChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: bcc, // Add labels for x-axis
                datasets: [{
                    label: 'Total Unit Terjual <2010',
                    data: tut_ezaa,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    yAxisID: 'left-y-axis' // Assign to left y-axis
                }, {
                    label: 'Total Unit Terjual >2010',
                    data: tut_ezab,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    yAxisID: 'left-y-axis' // Assign to left y-axis
                }, {
                    label: 'Sales Price <2010',
                    data: sp_ezaa,
                    type: 'line',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    yAxisID: 'right-y-axis' // Assign to right y-axis
                }, {
                    label: 'Sales Price >2010',
                    data: sp_ezab,
                    type: 'line',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    yAxisID: 'right-y-axis' // Assign to right y-axis
                }]
            }, 
            options: {
                scales: {
                    yAxes: [{
                        id: 'left-y-axis',
                        type: 'linear',
                        position: 'left',
                    }, {
                        id: 'right-y-axis',
                        type: 'linear',
                        position: 'right',
                        grid: {
                            drawOnChartArea: false
                        }
                    }]
                }
            }
        });
    })
  
  fetch('data/Eza4.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Extract regions and prices
        const bcc = data.map(item => item.BCC);
        const block_ezaa = data.map(item => Number(item['Block <2010']));
        const lot_ezaa = data.map(item => Number(item['Lot <2010']));
        const tanah_ezaa = data.map(item => Number(item['Luas Tanah <2010']));
        const bangunan_ezaa = data.map(item => Number(item['Luas Bangunan <2010']));
  
        // Get the context of the canvas element we want to select
        var ctx1 = document.getElementById('prop_eza4a').getContext('2d');
  
        // Create new chart
        var mixedChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: bcc, // Add labels for x-axis
                datasets: [{
                        label: 'Block <2010',
                        data: block_ezaa,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    }, {
                        label: 'Lot <2010',
                        data: lot_ezaa,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    }, {
                        label: 'Luas Tanah <2010',
                        data: tanah_ezaa,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    }, {
                        label: 'Luas Bangunan <2010',
                        data: bangunan_ezaa,
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1
                    }]
                }, 
                options: {
                    scales: {
                        yAxes: [{
                            id: 'left-y-axis',
                            type: 'linear',
                            position: 'left',
                        }, {
                            id: 'right-y-axis',
                            type: 'linear',
                            position: 'right',
                            grid: {
                                drawOnChartArea: false
                            }
                        }]
                    }
                }
            });
        })
  
        fetch('data/Eza4.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Extract regions and prices
            const bcc = data.map(item => item.BCC);
            const block_ezab = data.map(item => Number(item['Block >2010']));
            const lot_ezab = data.map(item => Number(item['Lot >2010']));
            const tanah_ezab = data.map(item => Number(item['Luas Tanah >2010']));
            const bangunan_ezab = data.map(item => Number(item['Luas Bangunan >2010']));
    
            // Get the context of the canvas element we want to select
            var ctx1 = document.getElementById('prop_eza4b').getContext('2d');
    
            // Create new chart
            var mixedChart = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: bcc, // Add labels for x-axis
                    datasets: [{
                        label: 'Block >2010',
                        data: block_ezab,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    }, {
                        label: 'Lot >2010',
                        data: lot_ezab,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    }, {
                        label: 'Luas Tanah >2010',
                        data: tanah_ezab,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    }, {
                        label: 'Luas Bangunan >2010',
                        data: bangunan_ezab,
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1}]
                    }, 
                    options: {
                        scales: {
                            yAxes: [{
                                id: 'left-y-axis',
                                type: 'linear',
                                position: 'left',
                            }, {
                                id: 'right-y-axis',
                                type: 'linear',
                                position: 'right',
                                grid: {
                                    drawOnChartArea: false
                                }
                            }]
                        }
                    }
                });
            })
