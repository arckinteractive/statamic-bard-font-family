import { ArckFontFamily } from './ArckFontFamily';
import ArckFontFamilyMenu from './ArckFontFamilyMenu.vue';

Statamic.$bard.addExtension(() => ArckFontFamily);

Statamic.$bard.buttons(() => {
    return {
        name: 'arckfontfamily',
        text: 'Font Family',
        command: (editor) => editor.commands.toggleArckFontFamily(),
        icon: 'arck-font-family',
        component: ArckFontFamilyMenu,
    };
});
