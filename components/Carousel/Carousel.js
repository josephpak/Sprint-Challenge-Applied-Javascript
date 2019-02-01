class Carousel {
    constructor(carousel){

        this.carousel = carousel;

        this.leftButton = document.querySelector(".left-button");
        this.rightButton = document.querySelector(".right-button");
        
        this.images = document.querySelectorAll(".carousel img");

        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = "block";

        this.leftButton.addEventListener("click", () => this.leftClick())
        this.rightButton.addEventListener("click", () => this.rightClick())
    }

    leftClick(){
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.images.length - 1;
        }
        console.log(this.currentIndex);
        const images = document.querySelectorAll(".carousel img");
        images.forEach(image => image.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
    }

    rightClick(){
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        console.log(this.currentIndex);
        const images = document.querySelectorAll(".carousel img");
        images.forEach(image => image.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
    }

}

let carousel = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons -- x
    2. You will need to grab a reference to all of the images -- x
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/