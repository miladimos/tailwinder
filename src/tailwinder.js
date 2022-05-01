import './components/components.css';

import Alpine from 'alpinejs';
// import dropdown from './dropdown.js'

window.Alpine = Alpine;

Alpine.data('dropdown', () => ({
    open: false,

    toggle() {
        this.open = !this.open
    }
}));

// Alpine.data('dropdown', dropdown)

Alpine.start();

