/** @format */

const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");

let slideIndex = 0;

let images = [
	"bg.jpeg",
	"favicon.ico",
	"image-1.png",
	"image-2.png",
	"image-3.png",
	"image-4.png",
];

function leftButton() {
	if (slideIndex <= 0) {
		slideIndex = 6;
	}
	initAll();
	console.log(slideIndex);
	slideIndex -= 1;
	document.getElementById("img").src = "img/" + images[slideIndex];

	let buttonIndex = document.getElementById(slideIndex);
	buttonIndex.style.backgroundColor = "black";
	console.log(buttonIndex);
}

function rightButton() {
	if (slideIndex >= images.length - 1) {
		slideIndex = -1;
	}

	console.log(slideIndex);
	initAll();
	slideIndex += 1;
	document.getElementById("img").src = "img/" + images[slideIndex];
	initAll();
	let buttonIndex = document.getElementById(slideIndex);
	buttonIndex.style.backgroundColor = "black";
	console.log(buttonIndex);
}

leftBtn.addEventListener("click", leftButton);
rightBtn.addEventListener("click", rightButton);

function initAll() {
	let ds = document.getElementsByClassName("dot_align");
	for (let i = 0; i < 6; i++) {
		console.log(ds[i]);
		ds[i].style.backgroundColor = "wheat";
	}
}
var dots = document.getElementsByClassName("dot_align");

for (let j = 0; j < 6; j++) {
	dots[j].addEventListener("click", function () {
		initAll();
		slideIndex = j;
		console.log(j);
		dots[j].style.backgroundColor = "black";
		document.getElementById("img").src = "img/" + images[slideIndex];
	});
}
