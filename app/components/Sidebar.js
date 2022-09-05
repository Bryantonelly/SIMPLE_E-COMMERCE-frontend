import ajax from "../helpers/ajax.js";
import api from "../helpers/api.js";
import { Content } from "./Content.js";

export const Sidebar = async () => {
    const resp = await fetch("app/views/sidebar.html");
    const html = await resp.text();
    const SIDEBAR = document.createElement("nav");
    SIDEBAR.className = "sidebar";
    SIDEBAR.innerHTML = html;

    const OPTION = document.getElementsByClassName('sidebar__option');
    const barra = document.getElementsByClassName('sidebar__body');
    
    setTimeout(() => {
        for (let index = 0; index < OPTION.length; index++) {
            OPTION[index].addEventListener('click', ()=>{
                removeClass();
                OPTION[index].classList.add("sidebar__option--active");
            }, false);
        };
        
    }, 1000);

    const removeClass = () => {
        for (let index = 0; index < OPTION.length; index++) {
            OPTION[index].classList.remove("sidebar__option--active");
        };
    };

    const clonarOption = () => {
        const clon = OPTION[0].cloneNode(true);
        clon.classList.remove("sidebar__option--active");
        barra[0].appendChild(clon);
    }

    ajax(
        {
            url: api.CATEGORIES,
            method: 'GET',
            success: ( resp ) => {
                crear(resp);
            }
        }
    )
    function crear(i){
        i.forEach(() => {
            clonarOption();
        });
    }

    return SIDEBAR;
}