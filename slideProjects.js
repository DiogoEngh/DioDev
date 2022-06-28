const project1 = document.getElementById("project1")
const project2 = document.getElementById("project2")
const project3 = document.getElementById("project3")
const project4 = document.getElementById("project4")

const listProjects = [project1,project2,project3,project4]

let index = 0

const mudaSlide = () => {
	if(index < listProjects.length - 1){
		listProjects[index].style.width = "0rem"
		listProjects[index+1].style.width = "20rem"
		index++
	}else{
		listProjects[index].style.width = "0rem"
		index = 0
		listProjects[index].style.width = "20rem"
	}
	return console.log(index)	
}

setInterval(mudaSlide, 5000)
