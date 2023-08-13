import rulesImg from "../assets/rulesImg.svg";
import iconClose from "../assets/iconClose.svg";

function rulesFn() {
	const displayReulesMarkup = () => {
		const rulesImage = document.getElementById("rules-image");
		rulesImage.innerHTML = `
                <div class="rules-container__rules-flex">
                    <p class="rules-container__rules-title">Rules</p>
                    <button id="close-btn" 
                    class="rules-container__close-btn">
                        <img id="close-btn-img" alt="close button">
                    </button>
                </div>
                <div class="img"><img id="rules" class="rules-container__rules-img" alt=""></div>
                `;
	};
	const setImgSrc = () => {
		const rulesTab = document.getElementById("rules");
		rulesTab.src = rulesImg;
		const closeBtnImg = document.getElementById("close-btn-img");
		closeBtnImg.src = iconClose;
	};
	
	const toggleZIndex = () => {
		const gameContainer = document.querySelector(".game-container");
		gameContainer.classList.toggle("zIndex-active");
	};
	const toggleOverlay = () => {
		const rulesBackground = document.getElementById("rules-background");
		rulesBackground.classList.toggle("background-active");
	};
	const closeRulesFunc = () => {
		const rulesImage = document.getElementById("rules-image");
		rulesImage.innerHTML = "";
		toggleOverlay();
		toggleZIndex();
	};
	const closeRulesWindow = () => {
		const closeBtnImg = document.getElementById("close-btn-img");
		closeBtnImg.addEventListener("click", closeRulesFunc);
	};
	const displayRules = () => {
		const openRulesBtn = document.getElementById("rules-btn");
		openRulesBtn.addEventListener("click", ()=> {
			toggleZIndex();
			displayReulesMarkup();
			setImgSrc();
			toggleOverlay();
			closeRulesWindow();
		});
	};
	return {
		displayRules,
	};
}

const rules = rulesFn();
export default rules
