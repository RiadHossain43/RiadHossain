let projectsContainer = document.createElement("div")
projectsContainer.classList.add("row","justify-content-center")
import {data} from "./DataModel.js"
projectsContainer.innerHTML = 
	data.map((project,index)=>
		`
		<div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${index+1}">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="${project.imsSrc}" alt="" />
            </div>
        </div>

`
    ).join("")

document.querySelector('#portfolio .container').append(projectsContainer)

