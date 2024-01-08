const game = {
  teams: ["Bayern Munich", "Real Madrid"],
  players: {
    "Bayern Munich": [
      "Neuer",
      "Kimmich",
      "Boateng",
      "Alaba",
      "Davies",
      "Goretzka",
      "Muller",
      "Coman",
      "Sane",
      "Lewandowski",
    ],
    "Real Madrid": [
      "Courtois",
      "Carvajal",
      "Varane",
      "Militao",
      "Marcelo",
      "Casemiro",
      "Modric",
      "Kroos",
      "Vinicius",
      "Benzema",
    ],
  },
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
  scored: ["Lewandowski", "Muller", "Benzema"],
};

// hiển thị tên cầu thủ và bán thắng thứ mấy trong trận
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// in ra tỉ lệ kết quả của trận đấu
