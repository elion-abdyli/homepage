// Data for the table
const dashboardData = [
    {
        category: "Research",
        links: [
            { text: "Google", url: "https://www.google.com" },
            { text: "DuckDuckGo", url: "https://duckduckgo.com" },
            { text: "Google Scholar", url: "https://scholar.google.com" },
            { text: "JSTOR", url: "https://www.jstor.org" },
            { text: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/" },
            { text: "Semantic Scholar", url: "https://www.semanticscholar.org/" },
            { text: "Connected Papers", url: "https://www.connectedpapers.com/" },
            { text: "ResearchRabbit", url: "https://www.researchrabbit.ai/" },
            { text: "Scite.ai", url: "https://scite.ai/" },
            { text: "IEEE Xplore", url: "https://ieeexplore.ieee.org/" },
            { text: "ACM Digital Library", url: "https://dl.acm.org/" },
            { text: "arXiv", url: "https://arxiv.org/" },
            { text: "DBLP", url: "https://dblp.org/" },
            { text: "Web of Science", url: "https://www.webofscience.com/" },
            { text: "Scopus", url: "https://www.scopus.com/" }
        ]
    },
    {
        category: "Articles",
        links: [
            { text: "The New York Times", url: "https://www.nytimes.com/" },
            { text: "The Guardian", url: "https://www.theguardian.com/" },
            { text: "The Economist", url: "https://www.economist.com/" },
            { text: "The Atlantic", url: "https://www.theatlantic.com/" },
            { text: "The New Yorker", url: "https://www.newyorker.com/" },
            { text: "NPR", url: "https://www.npr.org/" },
            { text: "BBC News", url: "https://www.bbc.com/news" },
            { text: "Foreign Affairs", url: "https://www.foreignaffairs.com/" },
            { text: "Scientific American", url: "https://www.scientificamerican.com/" },
            { text: "Nature", url: "https://www.nature.com/" },
            { text: "Aeon", url: "https://aeon.co/" },
            { text: "Nautilus", url: "https://nautil.us/" }
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
            { text: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
            { text: "OWASP", url: "https://owasp.org/" }
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
            { text: "CodeChef", url: "https://www.codechef.com" },
            { text: "TryHackMe", url: "https://tryhackme.com/" },
            { text: "HackTheBox", url: "https://www.hackthebox.com/" }
        ]
    },
    {
        category: "Office Suites",
        links: [
            { text: "Microsoft 365", url: "https://www.microsoft.com/microsoft-365" },
            { text: "Google Workspace", url: "https://workspace.google.com/" },
            { text: "LibreOffice", url: "https://www.libreoffice.org/" },
            { text: "Google Docs", url: "https://docs.google.com/" },
            { text: "Google Sheets", url: "https://sheets.google.com/" },
            { text: "Google Slides", url: "https://slides.google.com/" },
            { text: "Microsoft Word", url: "https://www.microsoft.com/en-us/microsoft-365/word" },
            { text: "Microsoft Excel", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
            { text: "Microsoft PowerPoint", url: "https://www.microsoft.com/en-us/microsoft-365/powerpoint" }
        ]
    },
    {
        category: "Finance",
        links: [
            { text: "TradingView", url: "https://www.tradingview.com/" },
            { text: "MartinShkreli.com", url: "https://martinshkreli.com/" },
            { text: "US Treasury", url: "https://home.treasury.gov/" },
            { text: "Dogecoin", url: "https://dogecoin.com/" },
            { text: "Tesla IR", url: "https://ir.tesla.com/" },
            { text: "Costco IR", url: "https://investor.costco.com/" },
            { text: "Berkshire Hathaway", url: "https://www.berkshirehathaway.com/" },
            { text: "Bridgewater", url: "https://www.bridgewater.com/" },
            { text: "Bloomberg", url: "https://www.bloomberg.com/" },
            { text: "Yahoo Finance", url: "https://finance.yahoo.com/" },
            { text: "Wall Street Journal", url: "https://www.wsj.com/" },
            { text: "CoinMarketCap", url: "https://coinmarketcap.com/" }
        ]
    },
    {
        category: "Utilities",
        links: [
            { text: "Bitwarden", url: "https://bitwarden.com/" },
            { text: "Speedtest by Ookla", url: "https://www.speedtest.net/" },
            { text: "Online-Convert.com", url: "https://www.online-convert.com/" },
            { text: "Photopea", url: "https://www.photopea.com/" },
            { text: "JSON Formatter", url: "https://jsonformatter.org/" },
            { text: "Regex101", url: "https://regex101.com/" },
            { text: "CodePen", url: "https://codepen.io/" },
            { text: "Replit", url: "https://replit.com/" },
            { text: "WeTransfer", url: "https://wetransfer.com/" },
            { text: "Google Translate", url: "https://translate.google.com/" },
            { text: "Unit Converter", url: "https://www.unitconverters.net/" },
            { text: "VirusTotal", url: "https://www.virustotal.com/" }
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
