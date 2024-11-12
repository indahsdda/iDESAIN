var ctx = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [{
        label: 'Produk Rumah Tangga',
        data: [120, 90, 90, 150, 100, 330, 100, 150, 90, 0, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Produk Perawatan Pribadi',
        data: [150, 140, 180, 270, 150, 220, 80, 90, 140, 0, 0, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
    }, {
        label: 'Mainan Ramah Lingkungan',
        data: [130, 170, 140, 180, 160, 190, 150, 220, 210, 0, 0, 0],
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Kerajinan Ramah Lingkungan',
        data: [180, 150, 210, 190, 170, 160, 230, 200, 140, 0, 0, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Pakaian dan Aksesoris',
        data: [150, 180, 160, 100, 190, 210, 170, 150, 240, 0, 0, 0],
        backgroundColor: 'rgba(153, 102, 255, 0.6)'
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Jumlah Penjualan (Unit)',
                font: {
                    size: 14,
                    weight: 'bold'
                }
            }
        },
        x: {
            title: {
                display: true,
                text: 'Bulan',
                font: {
                    size: 14,
                    weight: 'bold'
                }
            }
        }
    },
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Statistik Penjualan Bulanan per Kategori',
            font: {
                size: 16,
                weight: 'bold'
            }
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    return context.dataset.label + ': ' + context.parsed.y + ' unit';
                }
            }
        }
    }
}
});
}); <
/script>