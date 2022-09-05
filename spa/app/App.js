import api from './helpers/api.js'
import ajax from './helpers/ajax.js';
import { Sidebar } from './components/Sidebar.js'
import { Content } from './components/Content.js';
import { Title } from './components/Title.js';

export default async () => {
    let _root = document.getElementById('root');
    _root.appendChild( await Sidebar() );
    _root.appendChild( await Content() );
} 