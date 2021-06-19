import {getDOM} from './getDOM.js';
import './style.scss'

// Create HTML Backbone
(function () {
    //Create content div as parent
    let DOM = getDOM();
    let content = DOM.createDiv("id", "content");
    document.body.appendChild(content);

    //Create content children
    let contentSections = [
        "navbar", 
        "content-body",
        "social"
    ];

    DOM.addChildren(contentSections, "id", content);

    //Create function to show content-body text on navbar click

    const getContentBody = (target) => {
        let contentBody = document.querySelector("#content-body")
        switch (target.textContent) {
            case "Home":
                DOM.clearText(contentBody)
                DOM.addText(contentBody, DOM.loremIpsum()[0])
                break;
            case "Menu":
                DOM.clearText(contentBody)
                DOM.addText(contentBody, DOM.loremIpsum()[1])
                break;
            case "About Us":
                DOM.clearText(contentBody)
                DOM.addText(contentBody, DOM.loremIpsum()[2])
                break;
            case "Contact":
                DOM.clearText(contentBody)
                DOM.addText(contentBody, DOM.loremIpsum()[3])
                break;
            case "Reservations":
                DOM.clearText(contentBody)
                DOM.addText(contentBody, DOM.loremIpsum()[4])
                break;
        }
    }
    

    //Create div for navbar children
    let navbarContent = [
        "home",
        "menu",
        "about-us",
        "contact",
        "reservations"
    ];

    let navbar = document.querySelector("#navbar");
    DOM.addChildren(navbarContent, "class", navbar);
    for (let i = 0; i < navbarContent.length; i++ ) {
        let str = ["Home", "Menu", "About Us", "Contact", "Reservations"]
        let j = document.querySelector(`.${navbarContent[i]}`)
        j.addEventListener("click", (e) => getContentBody(e.target))
        DOM.addText(j, str[i])
    }
    
    //Create social children
    let socialContent = [
        "twitter",
        "instagram",
        "github"
    ];

    let social = document.querySelector("#social");
    DOM.addChildren(socialContent, "class", social);

    
})();