let bar = document.getElementById("bar");
let close = document.getElementById("close");
let nav = document.getElementById("navbar");
let navlinks = document.querySelectorAll(".alink");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

navlinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ----------------------------

// let size = document.getElementById("size");
let sizeElements = document.querySelectorAll(".Psize");

sizeElements.forEach((size) => {
    size.addEventListener("click", function () {
        sizeElements.forEach((s) => s.classList.remove("active"));

        this.classList.add("active");
    });
});

// ----------------------------

let MainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");

if (smallImg.length > 0 && smallImg[0]) {
    smallImg[0].onclick = function () {
        if (MainImg) MainImg.src = smallImg[0].src;
    };
}

if (smallImg.length > 1 && smallImg[1]) {
    smallImg[1].onclick = function () {
        if (MainImg) MainImg.src = smallImg[1].src;
    };
}

if (smallImg.length > 2 && smallImg[2]) {
    smallImg[2].onclick = function () {
        if (MainImg) MainImg.src = smallImg[2].src;
    };
}

// =============================

// Script for Products data

// let products = null;
// fetch("js/products.json")
//     .then((response) => response.json())
//     .then((data) => {
//         products = data;
//         console.log(products);
//         addDataToHTML();
//     });

// add data products to html
// let listProduct = document.querySelector 