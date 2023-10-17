import { ArckFontFamily } from './ArckFontFamily';
import ArckFontFamilyMenu from './ArckFontFamilyMenu.vue';

Statamic.booting(() => {
    Statamic.$bard.addExtension(() => ArckFontFamily);
    Statamic.$bard.buttons((buttons, button) => {
        return button({
            name: 'ArckFontFamily',
            text: 'Font Family',
            command: (editor) => editor.chain().focus().toggleArckFontFamily().run(),
            args: {
                key: ""
            },
            html: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z" class=""></path></svg>',
            component: ArckFontFamilyMenu
        });
    });
});
