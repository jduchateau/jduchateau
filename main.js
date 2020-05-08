const gifUrls = ["sun.gif", "cable-car.gif", "landscape-camp.webp", "starred-night-moon.webp"];


document.addEventListener("DOMContentLoaded", function () {
    gifRandomNodes = document.getElementsByClassName("gif random");

    let randIndex = Math.floor(Math.random() * gifUrls.length);

    for (const gifRandomNode of gifRandomNodes) {
        gifRandomNode.style.backgroundImage = "url(gifs/" + gifUrls[randIndex] + ")";

        randIndex++;
        randIndex = randIndex % gifUrls.length;
    }
});