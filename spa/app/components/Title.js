

export const Title = () => {
    const TITLE = document.createElement("h1");
    TITLE.innerHTML =
    `
    <nav class="sidebar">
        <div class="sidebar__header">
            <img src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png" alt="logo">
            <p class="sidebar__title">
                SIMPLE E-COMMERCE
            </p>
            <p class="sidebar__subtitle">
                BSALE TEST
            </p>
        </div>
        <div class="sidebar__body">
            <div class="sidebar__option sidebar__option--active">
                <i class="fa-solid fa-bottle-water"></i><a href="#">Link 1</a>
            </div>
            <a href="#" class="sidebar__option">Link 1</a>
            <a href="#" class="sidebar__option">Link 1</a>
            <a href="#" class="sidebar__option">Link 1</a>
        </div>
    </nav>
    `;
    return TITLE;
}