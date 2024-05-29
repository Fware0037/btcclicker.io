

// Check if bitcoin count is available in local storage
let bitcoinCount = parseFloat(localStorage.getItem("bitcoinCount")) || 0;

// Update bitcoin counter display
updateBitcoinCounter();

// Bitcoin button click handler
document.getElementById("bitcoinButton").addEventListener("click", function() {
    bitcoinCount += 0.0005000;
    updateBitcoinCounter();
});

// Function to update bitcoin counter display
function updateBitcoinCounter() {
    document.getElementById("bitcoinCounter").innerText = bitcoinCount.toFixed(3) + " BTC";
    // Save bitcoin count to local storage
    localStorage.setItem("bitcoinCount", bitcoinCount);
}

// Apply promo code button click handler
document.getElementById("applyPromoButton").addEventListener("click", function() {
    applyPromoCode();
});

// Function to apply promo code
function applyPromoCode() {
    const promoInputValue = document.getElementById("promoInput").value.toUpperCase();
    const promoCodes = JSON.parse(localStorage.getItem("promoCodes")) || [];
    if (!promoUsed && promoCodes.includes(promoInputValue)) {
        switch (promoInputValue) {
            case "FREEBTC":
                bitcoinCount += 0.5;
                break;
            case "bin":
                bitcoinCount -= Math.ceil(bitcoinCount * 6.75);
                break;
            case "H8678-12HJDF-7777":
                bitcoinCount += 1488;
                break;
            case "spacex":
                bitcoinCount += 1488;
                break;
            default:
                break;
        }
        updateBitcoinCounter();
        promoUsed = true;
        localStorage.setItem("promoUsed", "true");
        alert("Promo code applied successfully!");
    } else {
        alert("Invalid or already used promo code!");
    }
}
