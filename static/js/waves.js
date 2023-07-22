
document.addEventListener('DOMContentLoaded', (event) => {

    let mapElement = document.getElementById("map");
    let mapText = mapElement.innerText;
    let sea = "_.~\"~._";
    let seaLength = sea.length;
    let counter = 0;
  
    setInterval(() => {
      let newMapText = "";
      for (let i = 0; i < mapText.length; i++) {
        if (mapText[i] === " ") {
          let char = sea[(i + counter) % seaLength];
          newMapText += `<span class="sea">${char}</span>`;
        } else {
          newMapText += mapText[i];
        }
      }
      newMapText = newMapText.replace('UK', '<span class="country">UK</span>');
        newMapText = newMapText.replace('Malta', '<span class="country">Malta</span>');
  
      mapElement.innerHTML = newMapText;
      counter++;
    }, 400);
  
  });