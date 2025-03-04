// TradingView Widget for XAUUSD Live Chart with Moving Averages
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
});
