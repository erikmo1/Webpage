/*
    Detta skript hanterar en bildspel-animation och modalfunktioner på en webbsida.
    
    1. Bildspel: Skriptet växlar automatiskt mellan en uppsättning bilder var fjärde sekund. 
       Bilderna som används lagras i en array, och bildens källadress uppdateras i bildspelselementet.

    2. Modal-funktionalitet: När användaren klickar på åtgärdsknappen öppnas en modal som visar ett slumpmässigt överraskningsmeddelande från en fördefinierad lista. 
       Modalens synlighet hanteras genom att lägga till eller ta bort en klass.

    3. Gem-animation: När användaren klickar på en gem (sten) läggs en klass till för att trigga en animation, som tas bort efter en viss tid för att återställa tillståndet.

    Funktionen är utformad för att ge en interaktiv och visuell upplevelse på sidan.
*/

// Array med bildfilnamn
const images = ['images/bild19.jpg', 'images/bild18.jpg', 'images/bild20.jpg'];

// Välj bildelementet
const slideshowImage = document.getElementById('slideshow');

// Räknare för att hålla reda på det aktuella bildindexet
let currentImageIndex = 0;

// Funktion för att byta bild var 4:e sekund
function changeImage() {
    // Öka det aktuella bildindexet
    currentImageIndex++;

    // Om indexet överskrider antalet bilder, återställ det till 0
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    // Byt bildkällan till nästa bild
    slideshowImage.src = images[currentImageIndex];
}

// Ställ in ett intervall för att byta bild var 4:e sekund (4000 millisekunder)
setInterval(changeImage, 4000);

// Modal-funktionalitet för åtgärdsknappen på page1.html
const actionButton = document.querySelector('.action-button');
const modal = document.getElementById('customModal');
const closeButton = document.querySelector('.close-button');
const modalMessage = document.getElementById('modalMessage');

if (actionButton) {
    // Lägg till klick-händelse för åtgärdsknappen
    actionButton.addEventListener('click', function() {
        // Array med överraskningsmeddelanden
        const surprises = [
            "🎉 You've unlocked a secret!",
            "🎈 Here's a balloon!",
            "✨ You've found a star!",
            "🔥 It's getting hot!",
            "🌈 You're on a rainbow!",
            "🌟 Shine bright!"
        ];

        // Välj ett slumpmässigt överraskningsmeddelande
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];

        // Sätt meddelandet i modalen
        modalMessage.textContent = randomSurprise;

        // Visa modalen
        modal.classList.add('show'); // Add a class to show modal
    });

    // Stäng modalen när stäng-knappen klickas
    closeButton.addEventListener('click', function() {
        modal.classList.remove('show'); // Remove class to hide modal
    });

    // Stäng modalen när man klickar utanför den
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show'); // Remove class to hide modal
        }
    });
}

// Lägg till klick-händelse för gem
document.querySelectorAll('.gem').forEach(gem => {
    gem.addEventListener('click', () => {
        gem.classList.add('clicked'); // Lägg till klass för animation
        setTimeout(() => {
            gem.classList.remove('clicked'); // Ta bort klass efter animationslängden
        }, 900); // Justera för att matcha längden på animationen
    });
});
