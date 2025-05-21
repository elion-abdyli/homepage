// Data for the table
const dashboardData = [
    {
        category: "Research",
        links: [
            { text: "Google", url: "https://www.google.com" },
            { text: "DuckDuckGo", url: "https://duckduckgo.com" }
        ]
    },
    {
        category: "Articles",
        links: [
            { text: "Medium", url: "https://medium.com/" },
            { text: "Dev.to", url: "https://dev.to/" },
            { text: "HackerNoon", url: "https://hackernoon.com/" },
            { text: "Smashing Magazine", url: "https://www.smashingmagazine.com/" }
        ]
    },
    {
        category: "Cloud",
        links: [
            { text: "Google Drive", url: "https://www.google.com/drive/" },
            { text: "OneDrive", url: "https://onedrive.live.com/" },
            { text: "AWS", url: "https://aws.amazon.com/" },
            { text: "Google Cloud", url: "https://cloud.google.com/" },
            { text: "Supabase", url: "https://supabase.io/" },
            { text: "Linode", url: "https://www.linode.com/" },
            { text: "Docker Hub", url: "https://hub.docker.com/" }
        ]
    },
    {
        category: "Mail",
        links: [
            { text: "Gmail", url: "https://mail.google.com" },
            { text: "Outlook", url: "https://outlook.live.com" },
            { text: "ProtonMail", url: "https://protonmail.com/" },
            { text: "Temp Mail", url: "https://temp-mail.org/" }
        ]
    },
    {
        category: "Jobs",
        links: [
            { text: "LinkedIn", url: "https://www.linkedin.com" },
            { text: "Levels.fyi", url: "https://www.levels.fyi/" },
            { text: "Upwork", url: "https://www.upwork.com/" },
            { text: "Indeed", url: "https://www.indeed.com/" },
            { text: "Glassdoor", url: "https://www.glassdoor.com/" }
        ]
    },
    {
        category: "Refs",
        links: [
            { text: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web" },
            { text: "Python Docs", url: "https://docs.python.org/3/" },
            { text: "C++ Reference", url: "https://en.cppreference.com/w/" },
            { text: "Pandas Docs", url: "https://pandas.pydata.org/pandas-docs/stable/" },
            { text: "PyTorch Docs", url: "https://pytorch.org/docs/stable/" },
            { text: "Matplotlib Docs", url: "https://matplotlib.org/stable/contents.html" },
            { text: "SQLite Docs", url: "https://www.sqlite.org/docs.html" },
            { text: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" }
        ]
    },
    {
        category: "Coding",
        links: [
            { text: "Hackerrank", url: "https://www.hackerrank.com" },
            { text: "Codeforces", url: "https://www.codeforces.com" },
            { text: "Leetcode", url: "https://leetcode.com/" },
            { text: "Kaggle", url: "https://www.kaggle.com" },
            { text: "TopCoder", url: "https://www.topcoder.com" },
            { text: "HackerEarth", url: "https://www.hackerearth.com" },
            { text: "CodeChef", url: "https://www.codechef.com" }
        ]
    },
    {
        category: "Personal",
        links: [
            { text: "YouTube", url: "https://www.youtube.com" },
            { text: "Reddit", url: "https://www.reddit.com" },
            { text: "Facebook", url: "https://www.facebook.com" },
            { text: "Twitter", url: "https://www.twitter.com" },
            { text: "Instagram", url: "https://www.instagram.com" },
            { text: "Netflix", url: "https://www.netflix.com" },
            { text: "Spotify", url: "https://www.spotify.com" },
            { text: "Amazon", url: "https://www.amazon.com" },
            { text: "Your Hobby Site", url: "#" },
            { text: "Your Online Banking", url: "#" }
        ]
    },
    {
        category: "Utilities",
        links: [
            { text: "Bitwarden", url: "https://bitwarden.com/" },
            { text: "1Password", url: "https://1password.com/" },
            { text: "LastPass", url: "https://www.lastpass.com/" },
            { text: "Bitly", url: "https://bitly.com/" },
            { text: "TinyURL", url: "https://tinyurl.com/" },
            { text: "Online-Convert.com", url: "https://www.online-convert.com/" },
            { text: "Zamzar", url: "https://www.zamzar.com/" }
        ]
    }
];

function buildTable() {
    const table = document.querySelector('table'); // Assumes one table on the page
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

// Build the table when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', buildTable);
