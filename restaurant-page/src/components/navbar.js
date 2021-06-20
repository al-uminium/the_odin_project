import { getDOM } from "./getDOM"
import { homepage } from "./homepage.js"
import { menu } from "./menu.js"
import { contact } from "./contact.js"

export const navbar = () => {

    const DOM = getDOM()
    //Create div for navbar children
    let navbarContent = [
        "home",
        "menu",
        "contact",
    ];

    let navbar = document.querySelector("#navbar");
    DOM.addChildren(navbarContent, "class", navbar);
    for (let i = 0; i < navbarContent.length; i++ ) {
        let str = ["Home", "Menu", "Contact", "Reservations"]
        let j = document.querySelector(`.${navbarContent[i]}`)
        j.addEventListener("click", (e) => getContentBody(e.target))
        DOM.addText(j, str[i], ["ui-box","bottom-inOutSpread"])
    }


    const getContentBody = (target) => {
        let contentBody = document.querySelector("#content-body")
        switch (target.textContent) {
            case "Home":
                DOM.clearText(contentBody)
                homepage()
                break;
            case "Menu":
                DOM.clearText(contentBody)
                menu()
                break;
            case "Contact":
                DOM.clearText(contentBody)
                contact()
                break;
        }
    }
    homepage()
}