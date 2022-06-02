import ArckFontFamily from './ArckFontFamily';
import ArckFontFamilyMenu from './ArckFontFamilyMenu.vue';

Statamic.$bard.addExtension(() => ArckFontFamily);

Statamic.$bard.buttons(() => {
    return {
        name: 'arckfontFamily',
        text: 'Font Family',
        icon: 'arck-font-family',
        component: ArckFontFamilyMenu,
        command: (editor) => editor.command.setFontFamily(),
    };
});
