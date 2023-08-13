import paper from "../assets/paper.svg";
import rock from "../assets/rock.svg";
import scissors from "../assets/scissors.svg";

function battleScreen() {
	let playerIconSrc;
	const battleContainer = document.querySelector(".battle-container");

	const battleMarkup = () => {
		battleContainer.innerHTML = `
		<div class="game-round">
			<div>
				<p class="game-round__title">You picked</p>
				<div class="player-icon-highlight" >
					<div class="game-container__item-border player-icon" id="player-icon">
						<div class="icon"><img id="player-icon-src"></div>
					</div>
				</div>
			</div>
			<div class="inactive game-round__result-container">
				<p class="game-round__result-name" id="game-result"></p>
				<button id="new-round-btn" class="game-round__btn">Play again</button>
			</div>
			<div>
				<p class="game-round__title">The house picked</p>
				<div class="computer-icon-highlight">
					<div class="computer-icon-bg computer-icon" id="computer-icon">
						<div class="icon"><img id="computer-icon-src"></div>
					</div>
				</div>
			</div>
		</div>
    
        `;
	};

	const setIconSrc = iconSrc => {
		playerIconSrc = document.getElementById("player-icon-src");
		playerIconSrc.src = iconSrc;
	};
	const setPlayerBorderColor = target => {
		const playerIconBorder = document.querySelector(".player-icon");

		if (target.includes("paper")) {
			playerIconBorder.classList.add("paper-border-color");
		}
		if (target.includes("rock")) {
			playerIconBorder.classList.add("rock-border-color");
		}
		if (target.includes("scissors")) {
			playerIconBorder.classList.add("scissors-border-color");
		}
	};

	const setComputerRandomIcon = () => {
		return new Promise((resolve, reject) => {
			setTimeout(function () {
				const number = Math.floor(Math.random() * 3) + 1;
				const computerIconSrc = document.getElementById("computer-icon-src");
				const computerIconBorder = document.getElementById("computer-icon");
				if (number === 1) {
					computerIconSrc.src = paper;
					computerIconBorder.classList.add("paper-border-color");
				}
				if (number === 2) {
					computerIconSrc.src = rock;
					computerIconBorder.classList.add("rock-border-color");
				}
				if (number === 3) {
					computerIconSrc.src = scissors;
					computerIconBorder.classList.add("scissors-border-color");
				}
				computerIconBorder.classList.add("game-container__item-border");
				computerIconBorder.classList.remove("computer-icon-bg");
				resolve();
			}, 1000);
		});
	};
	const showWinResult = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const resultContainer = document.querySelector(
					".game-round__result-container"
				);
				const gameContainer = document.querySelector(".game-round");
				resultContainer.style.display = "block";
				gameContainer.style.justifyContent = "space-between";
				resolve();
			}, 1000);
		});
	};

	const toggleGameContainer = () => {
		const gameContainer = document.querySelector(".game-container");
		gameContainer.classList.toggle("inactive");
	};
	const winnerHighlight = winner => {
		winner.classList.add("win-bg");
	};

	const startGame = target => {
		toggleGameContainer();
		battleMarkup();
		setIconSrc(target);
		setPlayerBorderColor(target);
		newRound();
		battleContainer.classList.remove("inactive");
	};

	const newRound = () => {
		const newRoundBtn = document.getElementById("new-round-btn");
		newRoundBtn.addEventListener("click", function () {
			toggleGameContainer();
			battleContainer.classList.add("inactive");
		});
	};

	return {
		showWinResult,
		winnerHighlight,
		startGame,
		setComputerRandomIcon,
	};
}

export const battle = battleScreen();
