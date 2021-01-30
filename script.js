// Project URLs
var project1URL = 'https://jimbopulos.github.io/rec-app/'

// Click functions for portfolio images
var project = document.querySelector('#project1');

project.addEventListener('click', function() {
    window.open(project1URL);
    console.log(project1URL)
})