document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById("chartDropdown");
    const chartImages = document.querySelectorAll(".chart-images");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    // Menangani perubahan dropdown
    dropdown.addEventListener("change", function() {
        currentIndex = dropdown.selectedIndex;
        showChart(currentIndex);
    });

    // Tombol next
    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % chartImages.length;
        dropdown.selectedIndex = currentIndex;
        showChart(currentIndex);
    });

    // Tombol previous
    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + chartImages.length) % chartImages.length;
        dropdown.selectedIndex = currentIndex;
        showChart(currentIndex);
    });

    // Fungsi untuk menampilkan chart sesuai dengan index
    function showChart(index) {
        chartImages.forEach(function(chart, i) {
            if (i === index) {
                chart.classList.add("active");
            } else {
                chart.classList.remove("active");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");

    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const content = event.target.result;
            processData(content);
        };

        reader.readAsText(file);
    });

    function processData(content) {
        // Memproses data CSV
        const rows = content.split('\n');
        const data = rows.map(row => row.split(','));

        // Menampilkan data di konsol
        console.log(data);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('#nav-menu');

    let lastScrollTop = 0;
    const delta = 5;
    const navbarHeight = header.offsetHeight;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset;

        if (Math.abs(lastScrollTop - scrollTop) <= delta)
            return;

        if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
            // Scroll Down
            header.style.top = `-${navbarHeight}px`;
            hamburgerMenu.style.display = 'flex';
            navMenu.classList.remove('active');
        } else {
            // Scroll Up
            if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
                header.style.top = '0';
            }
            hamburgerMenu.style.display = 'none';
        }

        lastScrollTop = scrollTop;
    }, false);
});

