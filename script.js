const button_menu = document.getElementById("button_menu")
const menu_lateral = document.getElementById("menu_lateral")
const headerInicio = document.getElementById("header_inicio")
const mainInicio = document.getElementById("main_inicio")
const footerInicio = document.getElementById("footer_inicio")
var menu_active = false
const line_1 = document.getElementById("line_1")
const line_2 = document.getElementById("line_2")
const line_3 = document.getElementById("line_3")

var menuSide = () => {
    switch(menu_active){
      case false:
        menu_active = true
        menu_lateral.style.width = "100%"
        line_1.style.top = "1.15rem"
        line_1.style.transform = "rotate(45deg)"
        line_3.style.bottom = "1.15rem"
        line_3.style.transform = "rotate(-45deg)"
        line_2.style.backgroundColor = "transparent"
        break
      default:
        menu_active = false
        menu_lateral.style.width = "0%"
        line_1.style.top = "0.4rem"
        line_1.style.transform = "rotate(0deg)"
        line_3.style.bottom = "0.4rem"
        line_3.style.transform = "rotate(0deg)"
        line_2.style.backgroundColor = "white"
        break
    }
}

button_menu.addEventListener("click",menuSide)
