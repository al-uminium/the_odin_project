import { getDOM } from './components/getDOM.js';
import { navbar } from './components/navbar.js'
import './main.scss'
import './animated-border/animated-border.scss'
import 'animate.css'

// Create HTML Backbone
(function () {
    //Create content div as parent
    let DOM = getDOM(); //Initialize DOM "library"
    let content = DOM.createDiv("id", "content");
    document.body.appendChild(content);

    //Create content children
    let contentSections = [
        "navbar", 
        "content-body",
        "social"
    ];

    DOM.addChildren(contentSections, "id", content);
    
    navbar()
    
    //Create social children
    let socialContent = [
        "twitter",
        "instagram",
        "github"
    ];

    let social = document.querySelector("#social");
    DOM.addChildren(socialContent, "class", social);

    
})();