import "./style.scss";
import { iconsView } from "./viwes/iconsView";
import { rules } from "./viwes/rulesView";
import { battle } from "./viwes/battleScreenView";

iconsView();
rules.displayRules();
let value = 0;
const gameLogic = async () => {
	const score = document.getElementById("score");
	const player = document.getElementById("player-icon-src").src;
	const computer = document.getElementById("computer-icon-src").src;
	const roundResult = document.getElementById("game-result");
	console.log(document.getElementById("computer-icon-src").src); 
	const playerIcon = document.querySelector(".player-icon-highlight");
	const computerIcon = document.querySelector(".computer-icon-highlight");
	if (
		(player.includes("paper") && computer.includes("paper")) ||
		(player.includes("rock") && computer.includes("rock")) ||
		(player.includes("scissors") && computer.includes("scissors"))
	) {
		value;

		roundResult.textContent = "draw";
	}

	if (
		(player.includes("paper") && computer.includes("rock")) ||
		(player.includes("rock") && computer.includes("scissors")) ||
		(player.includes("scissors") && computer.includes("paper"))
	) {
		roundResult.textContent = "you win";
		value++;
		battle.winnerHighlight(playerIcon);
	}

	if (
		(player.includes("paper") && computer.includes("scissors")) ||
		(player.includes("rock") && computer.includes("paper")) ||
		(player.includes("scissors") && computer.includes("rock"))
	) {
		roundResult.textContent = "you lose";
		value--;
		battle.winnerHighlight(computerIcon);
	}
	await battle.showWinResult();
	score.textContent = value;
	console.log(value);
};

const game = () => {
	const iconsArr = [
		...document.querySelectorAll(".game-container__item-border"),
	];
	iconsArr.forEach(icon => {
		icon.addEventListener("click", async function (e) {
			const target = e.target.closest(".game-container__item-border")
				.children[0].children[0].src;
			battle.startGame(target);
			await battle.setComputerRandomIcon();
			gameLogic();
		});
	});
};

game();
