class Storage {
  constructor() {
    this.key = "snakeGameScores";
    this.data = JSON.parse(localStorage.getItem(this.key)) || {};
  }

  // Save the player’s score
  savePlayerScore(playerName, score) {
    if (!playerName) return;

    if (!this.data[playerName] || score > this.data[playerName]) {
      this.data[playerName] = score;
      this._commit();
    }
  }

  // Return the highest scoring player ever recorded
  getHighestScoringPlayer() {
    let bestPlayer = "None";
    let bestScore = 0;

    for (const [player, score] of Object.entries(this.data)) {
      if (score > bestScore) {
        bestScore = score;
        bestPlayer = player;
      }
    }

    return { bestPlayer, bestScore };
  }

  _commit() {
    localStorage.setItem(this.key, JSON.stringify(this.data));
  }
}

export const storage = new Storage();
