const locations = {
    title: (data) => document.getElementById('title').innerHTML = data,
    me: (data) => document.getElementById('me').innerHTML = data,
    map: (data) => document.getElementById('map').innerHTML = data,
    map_border: (data) => document.getElementById('map_border').innerHTML = data,
    competencies: (data) => document.getElementById('competencies').innerHTML = data,
    contact_header: (data) => document.getElementById('contact_header').innerHTML = data,
    socials: (data) => document.getElementById('socials').innerHTML = data,

};

for (let file in locations) {
    fetch(`ascii/${file}.html`)
        .then(response => response.text())
        .then(data => {
            locations[file](data);
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
}
