// Dữ liệu từ API
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
    team1: 2.25,
    draw: 3.0,
    team2: 2.75,
  },
};

// tạo cẩu thủ cho mỗi đội với cầu thủ đầu tieen là thủ môn
const [gk, ...fieldPlayers] = game.players["Bayern Munich"];
const players1 = {
  gk: game.players["Bayern Munich"][0],
  fieldPlayers: game.players["Bayern Munich"].slice(1),
};
const players2 = {
  gk: game.players["Real Madrid"][0],
  fieldPlayers: game.players["Real Madrid"].slice(1),
};
// tạo mảng chứa toàn bộ cầu thủ
const allPlayers = [...players1.fieldPlayers, ...players2.fieldPlayers];

// thêm cầu thử vừa được thay vào danh sách
const players1Final = {
  ...players1,
  fieldPlayers: [...players1.fieldPlayers, "Thiago", "Coutinho", "Perisic"],
};

// lấy dữ liệu thông số từ json
const { team1, draw, team2 } = game.odds;

// hiển thị danh sách cầu thủ ghi bàn
const printGoals = (...goalScorers) => {
  console.log("Goals scored by:", ...goalScorers);
};

// hển thị ra đội chiến thắng
const winner =
  team1 < team2 && team1 < draw
    ? "team1"
    : team2 < team1 && team2 < draw
    ? "team2"
    : "draw";

// In ra kết quả
console.log("Players 1:", players1);
console.log("Players 2:", players2);
console.log("All Players:", allPlayers);
console.log("Players 1 (Final):", players1Final);
console.log("Odds:", { team1, draw, team2 });
printGoals("Lewandowski", "Muller", "Benzema");
console.log("Winner:", winner);
