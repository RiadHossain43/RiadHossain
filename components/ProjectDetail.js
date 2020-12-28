let projectsContainer = document.createElement("div")
import {data} from "./DataModel.js"
projectsContainer.innerHTML = 
	data.map((project,index)=>
		`
		<div class="portfolio-modal modal fade" id="portfolioModal${index+1}" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">
                                    	${project.title}
                                    </h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="${project.imsSrc}" alt="" />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-5">${project.details}</p>
                                    <a href="${project.link}"class="btn btn-primary">Live view</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


`
	).join("")
let copyright = document.querySelector("footer")
document.querySelector('body').insertBefore(projectsContainer,copyright)

