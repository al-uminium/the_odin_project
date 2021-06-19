import { getDOM } from './getDOM.js';
import './style.css'

(function () {
    let div = document.createElement("div")
    div.setAttribute("id", "contents")
    document.body.appendChild(div)
})