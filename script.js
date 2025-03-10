const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color')
var body = document.querySelector('#gradient');

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}

_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`
} 

color1.addEventListener("load", color1.setAttribute("value", "#FF0000"));
color2.addEventListener("load", color2.setAttribute("value", "#FFFF00"));
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

