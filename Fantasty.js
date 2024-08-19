
let button = document.querySelector('#btn');
let sideBar = document.querySelector('.sidebar');

btn.onclick = function() {
    sideBar.classList.toggle('active');
}

let dropdownBtn = document.querySelector('.dropdown-arrow');
let leagueDropdown = document.querySelector('#league-dropdown');

dropdownBtn.addEventListener('click', (event) => {
    event.preventDefault();
    leagueDropdown.classList.toggle('active');
    dropdownBtn.classList.toggle('rotate');
})
/*let accordionButton = document.querySelector('.pr-accordion');
let accordionPanel = document.querySelector('.panel');

btn.onclick = function() {
    accordionPanel.classList.toggle('active');
}*/



//below are the functions to activate and deactivate the modals on my members page
const verseText = document.querySelector('#verse-of-day')
const verseReference = document.querySelector('#verse-reference')
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=daily', options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let verse = data.verse.details.text;
    verseText.innerHTML = `Verse of the day: ${verse}`
    let reference = data.verse.details.reference
    verseReference.innerHTML = reference
  })
  .catch(err => console.error(err));

