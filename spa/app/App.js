import api from './helpers/api.js'
import ajax from './helpers/ajax.js';

export default () => {
    let root = document.getElementById('root');
    root.innerHTML = "<div>Hola mundo</div>";

    ajax(
        {
            url: api.CATEGORIES,
            method: 'GET',
            success: ( resp ) => {
                console.log(resp);
            }
        }
    )
    console.log(api);
} 