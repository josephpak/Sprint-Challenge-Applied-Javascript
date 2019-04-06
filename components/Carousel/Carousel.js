class Carousel {
    constructor(carousel){

        this.carousel = carousel;

        this.leftButton = document.querySelector(".left-button");
        this.rightButton = document.querySelector(".right-button");
        
        this.images = document.querySelectorAll(".carousel img");

        this.currentIndex = 0;
        this.nextIndex;
        this.images[this.currentIndex].style.display = "block";

        this.leftButton.addEventListener("click", () => this.leftClick())
        this.rightButton.addEventListener("click", () => this.rightClick())
    }

    leftClick(){
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
            if (this.currentIndex === this.images.length - 1) {
                this.nextIndex = 0;
            } else {
                this.nextIndex = this.currentIndex + 1;
            }
            
        } else {
            this.currentIndex = 0;
            this.nextIndex = 1;
        }        
        console.log(`currentIndex: ${this.currentIndex}`, `nextIndex: ${this.nextIndex}`);
        const images = document.querySelectorAll(".carousel img");
        images.forEach(image => image.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
        TweenMax.to(this.images[this.currentIndex], 1, {left: 0})
    }

    rightClick(){
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.nextIndex = this.currentIndex - 1;
        } else {
            this.currentIndex = this.images.length - 1;
            this.nextIndex = this.images.length;
        }
        console.log(`currentIndex: ${this.currentIndex}`, `nextIndex: ${this.nextIndex}`);
        const images = document.querySelectorAll(".carousel img");
        images.forEach(image => image.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
    }

}

let carousel = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons -- x
    2. You will need to grab a reference to all of the images -- x
    3. Create a current index -- x
    4. Those buttons are gonna need some click handlers. -- x
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/