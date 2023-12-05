let blinkCheckAsciiLoaded = function(callback) {
  let checkInterval = setInterval(() => {
    if (window.fetchAsciiDone) {
      clearInterval(checkInterval);  // Stop checking once fetch_ascii is done
      callback();
    }
    console.log(window.fetchAsciiDone)
  }, 100);  // fetch_ascii checking interval
};

blinkCheckAsciiLoaded(function() {
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
});
