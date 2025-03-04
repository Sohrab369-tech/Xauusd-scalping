
// TradingView Widget for XAUUSD Live Chart with Analysis
document.addEventListener("DOMContentLoaded", function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/tv.js";
    script.onload = function() {
        new TradingView.widget({
            "container_id": "tradingview_xauusd",
            "width": "100%",
            "height": "500",
            "symbol": "OANDA:XAUUSD",
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_side_toolbar": false,
            "allow_symbol_change": false,
            "studies": [
                "Moving Average@tv-basicstudies",
                "Moving Average@tv-basicstudies",
                "Moving Average@tv-basicstudies",
                "Moving Average@tv-basicstudies"
            ],
            "study_overrides": {
                "Moving Average@tv-basicstudies.length": [9, 21, 50, 200],
                "Moving Average@tv-basicstudies.color": ["#FF0000", "#00FF00", "#0000FF", "#FFA500"]
            }
        });
    };
    document.body.appendChild(script);

    // Simulated Trend Analysis and Signal Generation
    function analyzeMarket() {
        let price = Math.random() * 50 + 2000;  // Simulated XAUUSD price
        let ema9 = price - Math.random() * 10;
        let ema21 = price - Math.random() * 15;
        let ema50 = price - Math.random() * 20;
        
        let trend = "";
        let signal = "";

        if (ema9 > ema21 && ema21 > ema50) {
            trend = "Bullish";
            signal = "Buy Signal - Price above key EMAs";
        } else if (ema9 < ema21 && ema21 < ema50) {
            trend = "Bearish";
            signal = "Sell Signal - Price below key EMAs";
        } else {
            trend = "Sideways";
            signal = "No clear trend";
        }

        document.getElementById("trend").innerHTML = "Trend: " + trend;
        document.getElementById("signal").innerHTML = "Signal: " + signal;
    }

    setInterval(analyzeMarket, 5000); // Update every 5 seconds
});
