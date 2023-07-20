let isBlinking = false;

setInterval(() => {
    const eyesElement = document.getElementById('eyes');
    if (!isBlinking) {
        // blink
        eyesElement.innerText = "'╬╠█╬╠╠╬╬╬_╬╠╬╬╬▒╠╠╣╣_╬╬░  ^    ";

        setTimeout(() => {
            // open eyes after 0.08 seconds
            eyesElement.innerText = "'╬╠█╬╠╠╬╬╬█╬╠╬╬╬▒╠╠╣╣▓╬╬░  ^    ";
        }, 80); 
    }
}, 6000); // I will blink every 6 seconds