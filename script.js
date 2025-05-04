async function fetchStockPrice() {
    const apiKey = 'YOUR_API_KEY';
    const symbol = 'AAPL';  // Example stock symbol
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('stock-price').innerText = `AAPL: $${data['Global Quote']['05. price']}`;
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

fetchStockPrice();
