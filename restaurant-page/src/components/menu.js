import { getDOM } from "./getDOM"
import breakfast from "../images/breakfast.jpg"
import pancake from "../images/pancake.jpg"
import lasagna from "../images/lasagna.jpg"
import salad from "../images/salad.jpg"
import steak from "../images/steak.jpg"

export const menu = () => {
    const DOM = getDOM()
    
    let contentBody = document.querySelector("#content-body");
    DOM.addChildren(["menu-page"], "class", contentBody);
    let menuPage = document.querySelector(".menu-page")
    menuPage.classList.add("animate__animated")
    menuPage.classList.add("animate__fadeIn")

    let imgurls = [
        breakfast,
        pancake,
        lasagna,
        salad,
        steak,
    ]
    let divs = [
        "breakfast", "breakfast-descr",
        "pancake", "pancake-descr",
        "lasagna", "lasagna-descr",
        "salad", "salad-descr",
        "steak", "steak-descr"
    ]
    let description = [
        DOM.loremIpsum()[0].substr(0,150),
        DOM.loremIpsum()[1].substr(0,150),
        DOM.loremIpsum()[2].substr(0,200),
        DOM.loremIpsum()[3].substr(0,250),
        DOM.loremIpsum()[4].substr(0,160)
    ]

    //Create divs for the images and text
    DOM.addChildren(divs, "class", menuPage)


    for (let i = 0; i < divs.length; i++) {
        let j = document.querySelector(`.${divs[i]}`)
        if (i%2 === 0) {
            DOM.addImage(imgurls[i/2], j)
        } 
        if (i%2) {
            j.innerHTML = "<h1>Food title</h1>"
            DOM.addText(j, description[(i-1)/2])
        }
    }
}