let button = document.querySelector("#btn");
let sideBar = document.querySelector(".sidebar");

btn.onclick = function () {
  sideBar.classList.toggle("active");
};

const leagueDropdownBtn = document.querySelector("#league-dropdown-arrow");
const leagueDropdown = document.querySelector("#league-dropdown");

leagueDropdownBtn.addEventListener("click", (event) => {
  event.preventDefault();
  leagueDropdown.classList.toggle("active");
  leagueDropdownBtn.classList.toggle("rotate");
});

const historyDropdownBtn = document.querySelector("#history-dropdown-arrow");
const historyDropdown = document.querySelector("#history-dropdown");

historyDropdownBtn.addEventListener("click", (event) => {
  event.preventDefault();
  historyDropdown.classList.toggle("active");
  historyDropdownBtn.classList.toggle("rotate");
});

const resourcesDropdownBtn = document.querySelector(
  "#resources-dropdown-arrow"
);
const resourcesDropdown = document.querySelector("#resources-dropdown");

resourcesDropdownBtn.addEventListener("click", (event) => {
  event.preventDefault();
  resourcesDropdown.classList.toggle("active");
  resourcesDropdownBtn.classList.toggle("rotate");
});
/*let accordionButton = document.querySelector('.pr-accordion');
let accordionPanel = document.querySelector('.panel');

btn.onclick = function() {
    accordionPanel.classList.toggle('active');
}*/
let playerData = {};
const leagueId = "1048289149926760448";
async function fetchPlayerData() {
  fetch(`https://api.sleeper.app/v1/players/nfl`, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log("fetch did not work");
    });
}
async function fetchRoster() {
  try {
    const response = await fetch(
      `https://api.sleeper.app/v1/league/${leagueId}/rosters`,
      {
        mode: "cors",
      }
    );
    const rosterData = response.json();
    console.log(rosterData);

    rosterData.forEach((roster) => {
      console.log(`Team name: ${roster.owner_id}`);
      roster.players.forEach((playerID) => {
        let player = playerData[playerID];
        if (player) {
          console.log(`Player Name: ${player.full_name}`);
        } else {
          console.log("Player not found");
        }
      });
    });
  } catch (error) {
    console.log("error with fetch request");
  }
}
async function initialize() {
  await fetchPlayerData(); // Fetch player data first
  await fetchRoster(); // Fetch roster using the league ID
}
