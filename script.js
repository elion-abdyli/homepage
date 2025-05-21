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
    // Still calculate milliseconds for accurate updates but don't display them
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Add ISO formatted date with day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getDay()];
    const isoDate = now.toISOString().split('T')[0]; // Gets YYYY-MM-DD format
    document.getElementById('date').textContent = `${dayOfWeek} ${isoDate}`;
    
    // Update the highlighted day in the days of week sidebar
    updateDaysOfWeek();
}

function updateDaysOfWeek() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const daysContainer = document.getElementById('days-of-week');
    
    // Calculate the Monday of the current week
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(currentDate);
    monday.setDate(currentDate.getDate() + mondayOffset);
    
    // Only create the list items if they don't already exist
    if (daysContainer.children.length === 0) {
        days.forEach((day, index) => {
            // Create a date for this day
            const dayDate = new Date(monday);
            dayDate.setDate(monday.getDate() + index);
            
            const dayElement = document.createElement('li');
            
            // Create separate spans for day name and date
            const dayNameElement = document.createElement('span');
            dayNameElement.textContent = day;
            dayNameElement.className = 'day-name';
            
            const dayDateElement = document.createElement('span');
            dayDateElement.textContent = dayDate.getDate(); // Just show the day of month
            dayDateElement.className = 'day-date';
            
            // Add both to the li element
            dayElement.appendChild(dayNameElement);
            dayElement.appendChild(dayDateElement);
            
            // Mark current day (adjusting for our Monday-Sunday array)
            const adjustedCurrentDay = currentDay === 0 ? 6 : currentDay - 1;
            if (index === adjustedCurrentDay) {
                dayElement.classList.add('current-day');
            }
            
            daysContainer.appendChild(dayElement);
        });
    } else {
        // If the list items already exist, just update the current-day class and date
        const adjustedCurrentDay = currentDay === 0 ? 6 : currentDay - 1;
        
        // Recalculate the Monday of this week for date updates
        const newMonday = new Date(currentDate);
        newMonday.setDate(currentDate.getDate() + mondayOffset);
        
        Array.from(daysContainer.children).forEach((dayElement, index) => {
            // Update the date displayed
            const dayDate = new Date(newMonday);
            dayDate.setDate(newMonday.getDate() + index);
            
            // Update the date span
            const dateSpan = dayElement.querySelector('.day-date');
            if (dateSpan) {
                dateSpan.textContent = dayDate.getDate();
            }
            
            // Update current day highlighting
            if (index === adjustedCurrentDay) {
                dayElement.classList.add('current-day');
            } else {
                dayElement.classList.remove('current-day');
            }
        });
    }
}

// Build the table when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    buildTable();
    updateClock(); // Initial call to display clock immediately
    updateDaysOfWeek(); // Initialize the days of week sidebar
    setInterval(updateClock, 1); // Update clock every second
});
