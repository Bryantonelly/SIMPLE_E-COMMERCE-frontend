import { Card } from "./Card.js";

export const Content = async () => {
    const resp = await fetch("app/views/content.html");
    const html = await resp.text();
    const CONTENT = document.createElement("div");
    const body = document.createElement("div");
    CONTENT.className = "content";
    body.className = "content__body";
    CONTENT.innerHTML = html;

    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        
    }
    // body.appendChild( await Card() );
    CONTENT.insertAdjacentElement("beforeend" ,await body );
    return CONTENT;
}