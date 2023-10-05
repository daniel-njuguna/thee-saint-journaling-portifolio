// Function to create a table row with trade data
function createTradeRow(tradeNumber, entryDate, fxPair, lor, entryPrice, stop, firstTarget, exitPrice, profitLoss, pips, entryLossDate, imageUrl) {
    const table = document.getElementById("trades-table");
    const row = table.insertRow(-1);

    const rowData = [
        tradeNumber, entryDate, fxPair, lor, entryPrice, stop, firstTarget, exitPrice, profitLoss, pips, entryLossDate
    ];

    rowData.forEach((data, index) => {
        const cell = row.insertCell(index);
        cell.textContent = data;
    });

    // Add an image cell
    const imageCell = row.insertCell(rowData.length);
    const image = document.createElement("img");
    image.src = imageUrl;
    image.className = "trade-image";
    imageCell.appendChild(image);
}
function openImageModal(imageUrl) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageUrl;
}

// Close the modal when the close button or outside the modal is clicked
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Function to generate trades
function generateTrades() {
    // Replace with your actual trade data
    const tradesData = [
        // Trade 1
        {
            tradeNumber: 1,
            entryDate: "2022-12-01",
            fxPair: "EUR/USD",
            lor: "Long",
            entryPrice: 1.1200,
            stop: 1.1100,
            firstTarget: 1.1300,
            exitPrice: 1.1250,
            profitLoss: "+50",
            pips: "+25",
            entryLossDate: "2022-12-02",
            imageUrl: "images/Screenshot 2023-10-05 152406.png"
        },
        {
            tradeNumber: 2,
            entryDate: "2022-12-15",
            fxPair: "GBP/USD",
            lor: "Short",
            entryPrice: 1.3000,
            stop: 1.3100,
            firstTarget: 1.2900,
            exitPrice: 1.2950,
            profitLoss: "+40",
            pips: "+20",
            entryLossDate: "2022-12-16",
            imageUrl: "images/15dec.png"
        },
        {
            tradeNumber: 3,
            entryDate: "2022-12-30",
            fxPair: "USD/JPY",
            lor: "Long",
            entryPrice: 110.50,
            stop: 110.30,
            firstTarget: 110.70,
            exitPrice: 110.30,
            profitLoss: "-15",
            pips: "-10",
            entryLossDate: "2022-12-31",
            imageUrl: "images/15loss.png"
        },
        // January 2023
        {
            tradeNumber: 4,
            entryDate: "2023-01-05",
            fxPair: "AUD/USD",
            lor: "Long",
            entryPrice: 0.7400,
            stop: 0.7350,
            firstTarget: 0.7450,
            exitPrice: 0.7430,
            profitLoss: "+30",
            pips: "+20",
            entryLossDate: "2023-01-06",
            imageUrl: "images/date0105.png"
        },
        {
            tradeNumber: 5,
            entryDate: "2023-01-10",
            fxPair: "EUR/JPY",
            lor: "Long",
            entryPrice: 130.00,
            stop: 129.80,
            firstTarget: 130.50,
            exitPrice: 130.25,
            profitLoss: "+25",
            pips: "+25",
            entryLossDate: "2023-01-11",
            imageUrl: "images/date0110.png"
        },
        {
            tradeNumber: 6,
            entryDate: "2023-01-20",
            fxPair: "GBP/CHF",
            lor: "Short",
            entryPrice: 1.2400,
            stop: 1.2450,
            firstTarget: 1.2350,
            exitPrice: 1.2380,
            profitLoss: "+20",
            pips: "+20",
            entryLossDate: "2023-01-21",
            imageUrl: "images/date0120.png"
        },
        // February 2023
        {
            tradeNumber: 7,
            entryDate: "2023-02-05",
            fxPair: "USD/JPY",
            lor: "Long",
            entryPrice: 110.50,
            stop: 110.40,
            firstTarget: 110.70,
            exitPrice: 110.60,
            profitLoss: "+20",
            pips: "+10",
            entryLossDate: "2023-02-06",
            imageUrl: "images0205.png"
        },
        {
            tradeNumber: 8,
            entryDate: "2023-02-10",
            fxPair: "EUR/USD",
            lor: "Long",
            entryPrice: 1.1300,
            stop: 1.1280,
            firstTarget: 1.1400,
            exitPrice: 1.1350,
            profitLoss: "+50",
            pips: "+25",
            entryLossDate: "2023-02-11",
            imageUrl: "images/date0210.png"
        },
        {
            tradeNumber: 9,
            entryDate: "2023-02-20",
            fxPair: "GBP/JPY",
            lor: "Short",
            entryPrice: 150.00,
            stop: 150.20,
            firstTarget: 149.50,
            exitPrice: 149.70,
            profitLoss: "+30",
            pips: "+20",
            entryLossDate: "2023-02-21",
            imageUrl: "images/date0220.png"
        },
        {
            tradeNumber: 10,
            entryDate: "2023-03-05",
            fxPair: "AUD/USD",
            lor: "Short",
            entryPrice: 0.7500,
            stop: 0.7550,
            firstTarget: 0.7450,
            exitPrice: 0.7460,
            profitLoss: "+40",
            pips: "+20",
            entryLossDate: "2023-03-06",
            imageUrl: "images/date0305.png"
        },
        {
            tradeNumber: 11,
            entryDate: "2023-03-10",
            fxPair: "EUR/JPY",
            lor: "Long",
            entryPrice: 132.00,
            stop: 131.80,
            firstTarget: 132.50,
            exitPrice: 132.25,
            profitLoss: "+25",
            pips: "+25",
            entryLossDate: "2023-03-11",
            imageUrl: "images/date0310.png"
        },
        {
            tradeNumber: 12,
            entryDate: "2023-03-20",
            fxPair: "GBP/CHF",
            lor: "Long",
            entryPrice: 1.2450,
            stop: 1.2400,
            firstTarget: 1.2500,
            exitPrice: 1.2480,
            profitLoss: "+30",
            pips: "+20",
            entryLossDate: "2023-03-21",
            imageUrl: "images/date0320.png"
        },
        // April 2023
        {
            tradeNumber: 13,
            entryDate: "2023-04-05",
            fxPair: "USD/JPY",
            lor: "Long",
            entryPrice: 110.60,
            stop: 110.50,
            firstTarget: 110.80,
            exitPrice: 110.70,
            profitLoss: "+20",
            pips: "+10",
            entryLossDate: "2023-04-06",
            imageUrl: "images/date0405.png"
        },
        {
            tradeNumber: 14,
            entryDate: "2023-04-10",
            fxPair: "EUR/USD",
            lor: "Short",
            entryPrice: 1.1400,
            stop: 1.1420,
            firstTarget: 1.1350,
            exitPrice: 1.1370,
            profitLoss: "+30",
            pips: "+20",
            entryLossDate: "2023-04-11",
            imageUrl: "images/date0410.png"
        },
        {
            tradeNumber: 15,
            entryDate: "2023-04-20",
            fxPair: "GBP/JPY",
            lor: "Long",
            entryPrice: 150.50,
            stop: 150.30,
            firstTarget: 151.00,
            exitPrice: 150.80,
            profitLoss: "+30",
            pips: "+30",
            entryLossDate: "2023-04-21",
            imageUrl: "images/date0420.png"
        },
        {
            tradeNumber: 16,
            entryDate: "2023-05-05",
            fxPair: "AUD/USD",
            lor: "Long",
            entryPrice: 0.7550,
            stop: 0.7500,
            firstTarget: 0.7600,
            exitPrice: 0.7575,
            profitLoss: "+25",
            pips: "+25",
            entryLossDate: "2023-05-06",
            imageUrl: "images/date0505.png"
        },
        {
            tradeNumber: 17,
            entryDate: "2023-05-10",
            fxPair: "EUR/JPY",
            lor: "Short",
            entryPrice: 132.50,
            stop: 132.70,
            firstTarget: 132.00,
            exitPrice: 132.25,
            profitLoss: "+25",
            pips: "+25",
            entryLossDate: "2023-05-11",
            imageUrl: "images/date0510.png"
        },
        {
            tradeNumber: 18,
            entryDate: "2023-05-20",
            fxPair: "GBP/CHF",
            lor: "Long",
            entryPrice: 1.2480,
            stop: 1.2450,
            firstTarget: 1.2520,
            exitPrice: 1.2500,
            profitLoss: "+20",
            pips: "+20",
            entryLossDate: "2023-05-21",
            imageUrl: "images/0520.png"
        },
        // June 2023
        {
            tradeNumber: 19,
            entryDate: "2023-06-05",
            fxPair: "USD/JPY",
            lor: "Short",
            entryPrice: 110.70,
            stop: 110.80,
            firstTarget: 110.50,
            exitPrice: 110.60,
            profitLoss: "+10",
            pips: "+10",
            entryLossDate: "2023-06-06",
            imageUrl: "images/date0605.png"
        },
        {
            tradeNumber: 20,
            entryDate: "2023-06-10",
            fxPair: "EUR/USD",
            lor: "Long",
            entryPrice: 1.1370,
            stop: 1.1350,
            firstTarget: 1.1420,
            exitPrice: 1.1400,
            profitLoss: "+30",
            pips: "+20",
            entryLossDate: "2023-06-11",
            imageUrl: "images/date0610.png"
        },
        {
            tradeNumber: 21,
            entryDate: "2023-06-20",
            fxPair: "GBP/JPY",
            lor: "Short",
            entryPrice: 150.80,
            stop: 150.90,
            firstTarget: 150.50,
            exitPrice: 150.70,
            profitLoss: "+10",
            pips: "+10",
            entryLossDate: "2023-06-21",
            imageUrl: "images/date0620.png"
        },
        {
            tradeNumber: 22,
            entryDate: "2023-07-05",
            fxPair: "AUD/USD",
            lor: "Long",
            entryPrice: 0.7575,
            stop: 0.7550,
            firstTarget: 0.7625,
            exitPrice: 0.7600,
            profitLoss: "+25",
            pips: "+25",
            entryLossDate: "2023-07-06",
            imageUrl: "images/date0705.png"
        },
        {
            tradeNumber: 23,
            entryDate: "2023-07-10",
            fxPair: "EUR/JPY",
            lor: "Short",
            entryPrice: 132.25,
            stop: 132.40,
            firstTarget: 132.00,
            exitPrice: 132.15,
            profitLoss: "+10",
            pips: "+10",
            entryLossDate: "2023-07-11",
            imageUrl: "images/date0710.png"
        },
        {
            tradeNumber: 24,
            entryDate: "2023-07-20",
            fxPair: "GBP/CHF",
            lor: "Long",
            entryPrice: 1.2500,
            stop: 1.2450,
            firstTarget: 1.2550,
            exitPrice: 1.2530,
            profitLoss: "+30",
            pips: "+20",
            entryLossDate: "2023-07-21",
            imageUrl: "images/date0720.png"
        },
        // August 2023
        {
            tradeNumber: 25,
            entryDate: "2023-08-05",
            fxPair: "USD/JPY",
            lor: "Short",
            entryPrice: 110.60,
            stop: 110.70,
            firstTarget: 110.50,
            exitPrice: 110.55,
            profitLoss: "+5",
            pips: "+5",
            entryLossDate: "2023-08-06",
            imageUrl: "images/date0805.png"
        },
        {
            tradeNumber: 26,
            entryDate: "2023-08-10",
            fxPair: "EUR/USD",
            lor: "Long",
            entryPrice: 1.1400,
            stop: 1.1380,
            firstTarget: 1.1450,
            exitPrice: 1.1425,
            profitLoss: "+25",
            pips: "+25",
            entryLossDate: "2023-08-11",
            imageUrl: "images/date0810.png"
        },
        {
            tradeNumber: 27,
            entryDate: "2023-08-20",
            fxPair: "GBP/JPY",
            lor: "Short",
            entryPrice: 150.70,
            stop: 150.80,
            firstTarget: 150.50,
            exitPrice: 150.65,
            profitLoss: "+5",
            pips: "+5",
            entryLossDate: "2023-08-21",
            imageUrl: "images/date0820.png"
        },
        // September 2023
        {
            tradeNumber: 28,
            entryDate: "2023-09-05",
            fxPair: "AUD/USD",
            lor: "Short",
            entryPrice: 0.7600,
            stop: 0.7630,
            firstTarget: 0.7550,
            exitPrice: 0.7570,
            profitLoss: "+20",
            pips: "+30",
            entryLossDate: "2023-09-06",
            imageUrl: "images/date0905.png"
        },
        {
            tradeNumber: 29,
            entryDate: "2023-09-10",
            fxPair: "EUR/JPY",
            lor: "Long",
            entryPrice: 132.15,
            stop: 132.00,
            firstTarget: 132.40,
            exitPrice: 132.30,
            profitLoss: "+15",
            pips: "+15",
            entryLossDate: "2023-09-11",
            imageUrl: "images/date0910.png"
        },
        {
            tradeNumber: 30,
            entryDate: "2023-09-20",
            fxPair: "GBP/CHF",
            lor: "Long",
            entryPrice: 1.2530,
            stop: 1.2500,
            firstTarget: 1.2570,
            exitPrice: 1.2555,
            profitLoss: "+25",
            pips: "+20",
            entryLossDate: "2023-09-21",
            imageUrl: "images/date0920.png"
        },
        // Add more trades as needed
    ];

    const currentDate = new Date();
    const lastWeek = new Date(currentDate);
    lastWeek.setDate(currentDate.getDate() - 7);

    const table = document.getElementById("trades-table");

    for (const trade of tradesData) {
        const entryDate = new Date(trade.entryDate);

        // Check if the trade date is within the specified range (excluding weekends)
        if (entryDate >= new Date("2022-12-01") && entryDate <= lastWeek && entryDate.getDay() !== 0 && entryDate.getDay() !== 6) {
            createTradeRow(
                trade.tradeNumber, trade.entryDate, trade.fxPair, trade.lor, trade.entryPrice, trade.stop, trade.firstTarget,
                trade.exitPrice, trade.profitLoss, trade.pips, trade.entryLossDate, trade.imageUrl
            );
        }
    }
}

// Function to count trades within the specified date range
function countTrades() {
    // Replace with your actual trade data
    const tradesData = [
        // Trade data (update with your trades)
        {
            entryDate: "2021-12-15", // Example entry date
        },
        {
            entryDate: "2022-01-10", // Example entry date
        },
        {
            entryDate: "2023-02-05", // Example entry date
        },
        // Add more trade objects as needed
    ];

    const currentDate = new Date();
    const lastWeek = new Date(currentDate);
    lastWeek.setDate(currentDate.getDate() - 7);

    let tradeCount = 0;

    for (const trade of tradesData) {
        const entryDate = new Date(trade.entryDate);

        // Check if the trade date is within the specified range (excluding weekends)
        if (entryDate >= new Date("2021-12-01") && entryDate <= lastWeek && entryDate.getDay() !== 0 && entryDate.getDay() !== 6) {
            tradeCount++;
        }
    }

    return tradeCount;
}

// Get the trade count and display it
const tradeCount = countTrades();
console.log(`Total trades within the specified date range: ${tradeCount}`);

// Generate trades when the page loads
window.onload = generateTrades;
