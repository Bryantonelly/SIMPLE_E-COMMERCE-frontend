
export const Card = async () => {
    const resp = await fetch("app/views/card.html");
    const html = await resp.text();
    const CARD = document.createElement("div");
    CARD.className = "card";

    CARD.innerHTML = html;

    return CARD;
}