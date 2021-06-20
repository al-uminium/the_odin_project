import { getDOM } from "./getDOM"
import imgurl from "../images/homepage.jpg"


export const homepage = () => {
    const DOM = getDOM();

    let contentBody = document.querySelector("#content-body");
    DOM.addChildren(["homepage"], "class", contentBody);
    
    let homepage = document.querySelector(".homepage")
    
    //Add image
    DOM.addImage(imgurl, homepage,'class','animate__animated animate__fadeIn');

    //Add text
    DOM.addChildren(["homepage-text"], "class", homepage)
    let homepageText = document.querySelector(".homepage-text")
    
    let arr = ["store", "caption", "welcome-msg","grab-food"]
    let msg = [
        "Grandéux",
        "/ɡrænd ˈdɜː/",
        `We serve a boutique of choices -- 
        ranging from vibrant, refreshing greens, to succulent and tantalizing meats.`,
        `... Now accepting online delivery due to COVID-19.`
    ]
    DOM.addChildren(arr, "class", homepageText)

    for (const i of arr) {
        let j = document.querySelector(`.${i}`)
        DOM.addText(j, msg[arr.indexOf(i)], ["animate__animated", "animate__fadeInRight"])
    }
}