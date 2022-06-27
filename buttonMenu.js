const button = document.getElementById("menu")
const lineTop = document.getElementById("line1")
const lineMidlle = document.getElementById("line2")
const lineBottom = document.getElementById("line3")
const inicioAside = document.getElementById("inicioAside")
const inicioMain = document.getElementById("InicioMain")
const options = document.getElementById("options")

let interrupt = true


button.addEventListener('click',()=>{
	if(interrupt){
		lineTop.style.transform = "rotate(-45deg)"
		lineBottom.style.transform = "rotate(45deg)"
		lineTop.style.top = ".9rem"
		lineBottom.style.top = ".9rem"
		lineTop.style.width = "2rem"
		lineBottom.style.width = "2rem"
		lineMidlle.style.backgroundColor = "transparent"
		inicioAside.style.width = "20rem"
		options.style.width = "20rem"
		interrupt = false
	}else{
		lineTop.style.transform = "rotate(0deg)"
		lineBottom.style.transform = "rotate(0deg)"
		lineTop.style.top = ".1rem"
		lineBottom.style.top = "1.7rem"
		lineTop.style.width = "1.3rem"
		lineBottom.style.width = "1.3rem"
		lineMidlle.style.backgroundColor = "white"
		inicioAside.style.width = "0rem"
		options.style.width = "0rem"
		interrupt = true
	}
})
