export const Search = async () => {
    const resp = await fetch("app/views/search.html");
    const html = await resp.text();
    const CARD = document.createElement("div");
    CARD.className = "content__search";

    CARD.innerHTML = html;

    return CARD;
}