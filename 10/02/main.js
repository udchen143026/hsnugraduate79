var pic_count = 130;
var prefix = "img";
var str = "";

window.onload = function () {
    "use strict";
    var i, j, k;
    for (i = 1; i <= pic_count; i += 5) {
        str += "<div class=\"row\">";
        for (j = 0; j < 5 && i + j <= pic_count; j += 1) {
            k = i + j;
            str += "<div class=\"column\"><img src=\"" + prefix;
            if (k < 10)
                str += "0";
            str += k.toString() + ".jpg\" style=\"width:100%\" onclick=\"openModal();currentSlide(" + k.toString() + ");\" class=\"hover-shadow cursor photo\"></div>";
        }
        str += "</div>";
    }
    str += "<div id=\"myModal\" class=\"modal\"><span class=\"close cursor\" onclick=\"closeModal()\">&times;</span><div class=\"modal-content\">";
    for (i = 1; i <= pic_count; i += 1) {
        str += "<div class=\"mySlides\"><div class=\"numbertext\">";
        if (i < 10)
            str += "0";
        str += i.toString() + " / " + pic_count.toString() + "</div><img src=\"" + prefix;
        if (i < 10)
            str += "0";
        str += i.toString() + ".jpg\" style=\"width:100%\"></div>";
    }
    str += "<a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a><a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>";
    document.getElementById("lightbox").innerHTML = str;
    showSlides(slideIndex);
};

function openModal() {
    "use strict";
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    "use strict";
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;

function showSlides(n) {
    "use strict";
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1; }
    if (n < 1) {slideIndex = slides.length; }
    for (i = 0; i < slides.length; i += 1) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    "use strict";
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    "use strict";
    showSlides(slideIndex = n);
}