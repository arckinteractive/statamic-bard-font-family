import ArckFontFamily from './ArckFontFamily';
import ArckFontFamilyMenu from './ArckFontFamilyMenu.vue';

Statamic.$bard.extend(({mark}) => mark(new ArckFontFamily()));
Statamic.$bard.buttons(() => {
    return {
        name: 'arckfontfamily',
        text: 'Font Family',
        command: 'classType',
        args: {
            key: ""
        },
        icon: 'arck-font-family',
        component: ArckFontFamilyMenu
    };
});