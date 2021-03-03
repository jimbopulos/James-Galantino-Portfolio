// Project URLs
var project1URL = 'https://jimbopulos.github.io/rec-app/';
var project2URL = 'https://four-top.herokuapp.com/';
var plannerURL = 'https://jimbopulos.github.io/day-planner/';
var burgerURL = 'https://eat-burgerlist-app.herokuapp.com/';
// var passwordgenURL = 'https://jimbopulos.github.io/random-password-generator/';

// Click functions for portfolio images
var project = document.getElementById('project1');

project.addEventListener('click', function() {
    window.open(project1URL);
});

var project2 = document.getElementById('project2');

project2.addEventListener('click', function() {
    window.open(project2URL);
});

var dayPlanner = document.getElementById('day-planner')

dayPlanner.addEventListener('click', function() {
    window.open(plannerURL);
});

var burger = document.getElementById('eat-da-burger')

burger.addEventListener('click', function() {
    window.open(burgerURL);
});

// var passwordGen = document.getElementById('password-gen')

// passwordGen.addEventListener('click', function() {
//     window.open(passwordgenURL);
// });