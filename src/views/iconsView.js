import paper from "../assets/paper.svg";
import rock from "../assets/rock.svg";
import scissors from "../assets/scissors.svg";
import triangle from "../assets/triangle.svg";

export default function iconsView() {
	const triangleImg = document.getElementById("triangleImg");
	const paperImg = document.getElementById("paperImg");
	const rockImg = document.getElementById("rockImg");
	const scissorsImg = document.getElementById("scissorsImg");
	triangleImg.src = triangle;
	paperImg.src = paper;
	rockImg.src = rock;
	scissorsImg.src = scissors;
}
