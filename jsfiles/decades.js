  // Progress Bar Script
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Modal Functions
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Bar Graph Configuration
const ctx = document.getElementById('discoveryBarGraph').getContext('2d');
const discoveryData = {
    labels: ['1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    datasets: [{
        label: 'Research Publications',
        data: [150, 300, 450, 600, 800, 1200, 2000, 2500],
        backgroundColor: 'rgba(74, 144, 226, 0.3)',
        borderColor: 'rgba(74, 144, 226, 1)',
        borderWidth: 2,
        borderRadius: 8,
        tension: 0.4
    }]
};

const chartConfig = {
    type: 'bar',
    data: discoveryData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 20,
                right: 25,
                bottom: 20,
                left: 25
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: {
                    size: 16
                },
                bodyFont: {
                    size: 14
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    font: {
                        size: 12
                    },
                    padding: 10
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
};

const discoveryChart = new Chart(ctx, chartConfig);

// World Map Configuration
const map = L.map('worldMap', {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    zoomControl: true,
    scrollWheelZoom: true
});

// Custom dark theme for the map
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: ' OpenStreetMap, CartoDB',
    maxZoom: 19
}).addTo(map);

// Example data for countries with more detailed statistics
const countryData = {
    'USA': { publications: 2500, institutions: 150, activeStudies: 300, breakthroughs: 45 },
    'UK': { publications: 1800, institutions: 100, activeStudies: 200, breakthroughs: 35 },
    'Germany': { publications: 1600, institutions: 90, activeStudies: 180, breakthroughs: 30 },
    'Japan': { publications: 1400, institutions: 80, activeStudies: 160, breakthroughs: 25 },
    'China': { publications: 2000, institutions: 120, activeStudies: 250, breakthroughs: 40 },
    'India': { publications: 1200, institutions: 70, activeStudies: 140, breakthroughs: 20 },
    'Australia': { publications: 1000, institutions: 60, activeStudies: 120, breakthroughs: 15 }
};

// Add markers for each country with enhanced styling
Object.entries(countryData).forEach(([country, data]) => {
    const coordinates = getCountryCoordinates(country);
    if (coordinates) {
        const marker = L.circle(coordinates, {
            color: '#4a90e2',
            fillColor: '#4a90e2',
            fillOpacity: 0.6,
            radius: 300000,
            weight: 2
        }).addTo(map);

        const popupContent = `
            <div style="color: #333; padding: 10px;">
                <h3 style="color: #4a90e2; margin-bottom: 10px;">${country}</h3>
                <div style="display: grid; gap: 5px;">
                    <p><strong>Publications:</strong> ${data.publications.toLocaleString()}</p>
                    <p><strong>Research Institutions:</strong> ${data.institutions}</p>
                    <p><strong>Active Studies:</strong> ${data.activeStudies}</p>
                    <p><strong>Major Breakthroughs:</strong> ${data.breakthroughs}</p>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
        });

        marker.on('mouseover', function(e) {
            this.openPopup();
        });
    }
});

// Helper function to get country coordinates
function getCountryCoordinates(country) {
    const coordinates = {
        'USA': [37.0902, -95.7129],
        'UK': [55.3781, -3.4360],
        'Germany': [51.1657, 10.4515],
        'Japan': [36.2048, 138.2529],
        'China': [35.8617, 104.1954],
        'India': [20.5937, 78.9629],
        'Australia': [-25.2744, 133.7751]
    };
    return coordinates[country];
}

// Update stats on window resize
window.addEventListener('resize', () => {
    discoveryChart.resize();
});

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    observer.observe(item);
});