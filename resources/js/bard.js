import ArckFontFamily from './ArckFontFamily';
import ArckFontFamilyMenu from './ArckFontFamilyMenu.vue';

Statamic.$bard.addExtension(() => ArckFontFamily);

Statamic.$bard.buttons(() => {
    return {
        name: 'arckFontFamily',
        text: 'Font Family',
        args: { key: '' },
        icon: 'arck-font-family',
        component: ArckFontFamilyMenu,
        command: (editor) => editor.command.setFontFamily(),
    };
});
