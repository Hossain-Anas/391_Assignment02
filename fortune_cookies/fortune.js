// Array of fortune messages 
const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "A journey of a thousand miles begins with a single step.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "The mind is everything. What you think you become.",
    "Peace comes from within. Do not seek it without.",
    "Every expert was once a beginner.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only impossible journey is the one you never begin.",
    "Believe you can and you're halfway there."
];

// Color combinations for the fortune box
const colorCombinations = [
    {
        background: "hsl(120, 100%, 90%)",
        border: "hsl(270, 100%, 50%)",
        text: "hsl(0, 0%, 20%)",
        fontFamily: "'Arial', sans-serif",
        fontSize: "1.3rem"
    },
    {
        background: "hsl(60, 100%, 90%)",
        border: "hsl(30, 100%, 50%)",
        text: "hsl(240, 100%, 30%)",
        fontFamily: "'Verdana', sans-serif",
        fontSize: "1.4rem"
    },
    {
        background: "hsl(200, 100%, 90%)",
        border: "hsl(120, 40%, 50%)",
        text: "hsl(330, 100%, 60%)",
        fontFamily: "'Tahoma', sans-serif",
        fontSize: "1.2rem"
    },
    {
        background: "hsl(0, 100%, 90%)",
        border: "hsl(180, 100%, 50%)",
        text: "hsl(0, 100%, 25%)",
        fontFamily: "'Courier New', monospace",
        fontSize: "1.35rem"
    }
];

// DOM elements
const fortuneText = document.getElementById('fortuneText');
const fortuneBox = document.getElementById('fortuneBox');

// Function to get a random fortune
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// Function to change colors based on button clicked
function changeColors(buttonNumber) {
    const combination = colorCombinations[buttonNumber - 1];
    
    fortuneBox.style.background = combination.background;
    fortuneBox.style.borderColor = combination.border;
    fortuneText.style.color = combination.text;
    fortuneText.style.fontFamily = combination.fontFamily;
    fortuneText.style.fontSize = combination.fontSize;
}

// Initialize the page
function initPage() {
    // Display a random fortune on page load
    fortuneText.textContent = getRandomFortune();
    
    // Set initial color combination (first one)
    changeColors(1);
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', initPage); 
