/*global alert, console, window, document*/
(function () {
    
    "use strict";
    
    var masthead, slides, i, btns, contents, container, feedback, links, i, k;
    masthead = document.querySelector(".mh-image");
    feedback = document.querySelector(".feedback");

    slides=[
        "<figure>" +
            "<img src='./img/logo-sub-car.png' alt='abstract icon of car'>" + "<figcaption>Buy used hybrid cars here!</figcaption>" +
        "</figure>",

        "<figure>" +
            "<img src='./img/logo-sub-solar.png' alt='abstract icon of sun'>" + "<figcaption>Go solar! We can help!</figcaption>" +
        "</figure>",

        "<figure>" +
            "<img src='./img/logo-sub-train.png' alt='abstract icon of train'>" + "<figcaption>Take the train! Book it here!</figcaption>" +
        "</figure>",

        "<figure>" +
            "<img src='./img/logo-sub-turbine.png' alt='abstract icon of wind turbines'>" + "<figcaption>Support the use of turbines!</figcaption>" +
        "</figure>"        
    ];
    
    function fadeout() {
        masthead.style.opacity = 0;
    }

    i = 0;

    function runSlides() { 
        masthead.style.opacity = 1;
        
        if (i > 3) {
            i = 0;
        }

        masthead.innerHTML = slides[i];
        i += 1;
        window.setTimeout(fadeout, 5000);
    }

    runSlides();
    window.setInterval(runSlides, 6000);
      
    
    btns = document.querySelectorAll("button");

    contents=[
        "<img src='./img/highlight-1.png' alt='photo of a bike in motion and a footprint'>" + "<p>Spend less time and money driving, ride a bike or walk instead. Better for you and for the environment.</p>",
        "<img src='./img/highlight-2.png' alt='photo of a vine of fresh colourful tomatoes'>" + "<p>Whether you live in the city or outside of town, you can save energy and money by growing your own vegetables.</p>",
        "<img src='./img/highlight-3.png' alt='photo of two people walking through a mall carring bags of purchases'>" + "<p>Buy local, and shop at smaller, independent stores. Also try to choose options which use less plastic, and more quality.</p>"
    ];
   
    
    feedback.innerHTML = contents[0];

    function handleClick(ev) {

        for(k=0; k< btns.length; k += 1) {
            btns[k].removeAttribute("id");
        } 
        
        if (ev.target.innerHTML === "A") {
            feedback.innerHTML = contents[0]; 
        } else if (ev.target.innerHTML === "B") {
            feedback.innerHTML = contents[1];    
            } else if (ev.target.innerHTML === "C")  {  
                feedback.innerHTML = contents[2];
                }

        ev.target.setAttribute("id", "active");
    }

    for(k=0; k < btns.length; k+=1) {
        btns[k].addEventListener("click", handleClick);
    }
    

}());