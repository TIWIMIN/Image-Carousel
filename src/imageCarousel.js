export class ImageCarousel {
    #imageContainer = document.querySelector("div.image-container"); 
    #previousImage = document.querySelector("button.previous-image"); 
    #nextImage = document.querySelector("button.next-image"); 
    #navContainer = document.querySelector("div.nav-container"); 
    #imageMap = new Map(); 
    #numImages = 0; 
    #currImagePos = 0; 

    constructor(...images) {
        for (const image of images) {
            const tempImage = document.createElement("img"); 
            tempImage.classList.add("image"); 
            tempImage.src = image; 
            this.#imageMap.set(this.#numImages, tempImage); 
            this.#numImages += 1; 
        }
        this.displayImage(); 
        this.#configImageButtons(); 
        this.#configNavCircles();
        console.log(this.#imageMap); 
    }

    #configImageButtons() {
        this.#nextImage.addEventListener("click", (e) => {
            e.stopPropagation(); 
            this.moveImageForward(); 
            this.displayImage(); 
        });

        this.#previousImage.addEventListener("click", (e) => {
            e.stopPropagation(); 
            this.moveImageBackward(); 
            this.displayImage(); 
        })
    }

    #configNavCircles() {
        for (const key of this.#imageMap.keys()) {
            const tempCircle = document.createElement("button"); 
            tempCircle.classList.add("nav-circle"); 
            tempCircle.addEventListener("click", (e) => {
                e.stopPropagation(); 
                this.#currImagePos = key; 
                this.displayImage()
            }) 
            this.#navContainer.appendChild(tempCircle); 
        }
    }

    displayImage() {
        this.#imageContainer.textContent = ""; 
        this.#imageContainer.appendChild(this.#imageMap.get(this.#currImagePos)); 
    }

    moveImageForward() {
        if (this.#currImagePos == (this.#numImages - 1)) {
            this.#currImagePos = 0;
            return;  
        }
        this.#currImagePos += 1; 
    }

    moveImageBackward() {
        if (this.#currImagePos == 0) {
            this.#currImagePos = (this.#numImages - 1); 
            return; 
        }
        this.#currImagePos -= 1; 
    }
}