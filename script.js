// Project URLs
var project1URL = 'https://jimbopulos.github.io/rec-app/';
var plannerURL = 'https://jimbopulos.github.io/day-planner/';
var passwordgenURL = 'https://jimbopulos.github.io/random-password-generator/';

// Click functions for portfolio images
var project = document.getElementById('project1');

project.addEventListener('click', function() {
    window.open(project1URL);
})

var dayPlanner = document.getElementById('day-planner')

dayPlanner.addEventListener('click', function() {
    window.open(plannerURL);
})

var passwordgenURL = document.getElementById('password-gen')

passwordgenURL.addEventListener('click', function() {
    window.open(passwordgenURL);
})