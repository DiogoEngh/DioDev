const dropMenu = document.getElementById("dropMenu")
const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")
const line3 = document.getElementById("line3")
const divMenu = document.getElementById("divMenu")
const footerPrincipal = document.getElementById("footerPrincipal")
const mainPrincipal = document.getElementById("mainPrincipal")
const blur = document.getElementById("blur")
var menuActive = false



const dropMenuFunction = () => {
	if(menuActive === false){
		line1.style.top = "1rem"
		line3.style.top = "1rem"
		line1.style.transform = "rotate(45deg)"
		line3.style.transform = "rotate(-45deg)"
		line2.style.backgroundColor = "transparent"
		divMenu.style.display = "flex"
		footerPrincipal.style.filter = "blur(5px)"
		mainPrincipal.style.filter = "blur(5px)"
		blur.style.backgroundColor = "var(--glassBlack)"
		menuActive = true
	}else{
		line1.style.top = ".3rem"
		line3.style.top = "1.6rem"
		line1.style.transform = "rotate(0deg)"
		line3.style.transform = "rotate(0deg)"
		line2.style.backgroundColor = "white"
		divMenu.style.display = "none"
		footerPrincipal.style.filter = "blur(0px)"
		mainPrincipal.style.filter = "blur(0px)"
		blur.style.backgroundColor = "transparent"
		menuActive = false
	}
}

dropMenu.addEventListener("click", dropMenuFunction)
