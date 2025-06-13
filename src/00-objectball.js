// 1️⃣ Build and return the nested game data
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
        "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
        "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
      }
    }
  };
}

// 2️⃣ Function helpers using gameObject

function numPointsScored(playerName) {
  const game = gameObject();
  for (let team of [game.home.players, game.away.players]) {
    if (team[playerName]) return team[playerName].points;
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  for (let team of [game.home.players, game.away.players]) {
    if (team[playerName]) return team[playerName].shoe;
  }
}

function teamColors(teamName) {
  const game = gameObject();
  for (let side of ["home", "away"]) {
    if (game[side].teamName === teamName) {
      return game[side].colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (let side of ["home", "away"]) {
    if (game[side].teamName === teamName) {
      return Object.values(game[side].players).map(player => player.number);
    }
  }
}

function playerStats(playerName) {
  const game = gameObject();
  for (let team of [game.home.players, game.away.players]) {
    if (team[playerName]) return team[playerName];
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let maxShoe = 0, maxPlayer = null;
  for (let team of [game.home.players, game.away.players]) {
    for (let p in team) {
      if (team[p].shoe > maxShoe) {
        maxShoe = team[p].shoe;
        maxPlayer = p;
      }
    }
  }
  return game.home.players[maxPlayer]?.rebounds || game.away.players[maxPlayer]?.rebounds;
}

// Optional bonus functions based on same structure:
// mostPointsScored(), winningTeam(), playerWithLongestName(), doesLongNameStealATon()

// Expose functions for use in other scripts if needed
window.gameObject = gameObject;
window.numPointsScored = numPointsScored;
window.shoeSize = shoeSize;
window.teamColors = teamColors;
window.teamNames = teamNames;
window.playerNumbers = playerNumbers;
window.playerStats = playerStats;
window.bigShoeRebounds = bigShoeRebounds;
