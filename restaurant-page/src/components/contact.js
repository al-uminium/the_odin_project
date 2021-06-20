import { getDOM } from "./getDOM"

export const contact = () => {
    const DOM = getDOM()

    let contentBody = document.querySelector("#content-body");
    DOM.addChildren(["contact-page"], "class", contentBody);
    let contactPage = document.querySelector(".contact-page")

    contactPage.innerHTML = `
        <div id="details" class="animate__animated animate__fadeInLeft">
            <h1>Our store is located at: </h1>
            <p>Legitimate Street 81</p>
            <p>Fifth Moon of Jupiter</p>
            <h2>Opening hours</h2>
            <p>Tuesday to Sunday</p>
            <p>8 am till 10pm -- last order at 9:15pm </p>
        </div>
        
    `
}