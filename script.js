async function fetchData() {
    try {
        const response = await fetch('dashboard-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // Return an empty array as fallback if data can't be loaded
        return [];
    }
}

async function buildTable() {
    const table = document.querySelector('table');
    const dashboardData = await fetchData();
    if (!table) {
        console.error("Table element not found!");
        return;
    }
    table.innerHTML = ''; // Clear existing table content

    // Create table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    dashboardData.forEach(categoryData => {
        const th = document.createElement('th');
        const h1 = document.createElement('h1');
        h1.textContent = categoryData.category;
        th.appendChild(h1);
        headerRow.appendChild(th);
    });

    // Create table body
    const tbody = table.createTBody();
    const maxLinks = Math.max(...dashboardData.map(cat => cat.links.length));

    for (let i = 0; i < maxLinks; i++) {
        const row = tbody.insertRow();
        dashboardData.forEach(categoryData => {
            const cell = row.insertCell();
            if (categoryData.links[i]) {
                const linkData = categoryData.links[i];
                const a = document.createElement('a');
                a.href = linkData.url;
                a.textContent = linkData.text;
                cell.appendChild(a);
            }
        });
    }
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Add ISO formatted date
    const isoDate = now.toISOString().split('T')[0]; // Gets YYYY-MM-DD format
    document.getElementById('date').textContent = isoDate;
}

// Build the table when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    buildTable();
    updateClock(); // Initial call to display clock immediately
    setInterval(updateClock, 1000); // Update clock every second
});
