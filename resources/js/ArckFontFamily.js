const { Mark, mergeAttributes } = Statamic.$bard.tiptap.core;

export const ArckFontFamily = Mark.create({
    name: 'arckFontFamily',

    addAttributes() {
        return {
            key: {
                default: '',
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: "span.arck-font-family",
                getAttrs: (dom) => ({
                    key: dom.getAttribute('data-class')
                })
            }
        ];
    },

    renderHTML({mark, HTMLAttributes}) {
        let style = 'font-family: ';

        switch (mark.attrs.key) {
            case 'alh-arial':
                style += 'Arial, Helvetica, sans-serif;';
            break;

            case 'alh-brush-script-mt':
                style += '\'Brush Script MT\', cursive;';
            break;

            case 'alh-courier-new':
                style += '\'Courier New\', Courier, monospace;';
            break;

            case 'alh-garamond':
                style += 'Garamond, serif;';
            break;

            case 'alh-georgia':
                style += 'Georgia, \'Times New Roman\', Times, serif;';
            break;

            case 'alh-helvetica':
                style += 'Helvetica, Arial, sans-serif;';
            break;

            case 'alh-tahoma':
                style += 'Tahoma, Geneva, Verdana, sans-serif;';
            break;

            case 'alh-times-new-roman':
                style += '\'Times New Roman\', Times, serif;';
            break;

            case 'alh-trebuchet':
                style += '\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;';
            break;

            case 'alh-verdana':
                style += 'Verdana, Geneva, Tahoma, sans-serif;';
            break;
        }

        return [
            "span",
            mergeAttributes(HTMLAttributes,
            {
                'class': 'arck-font-family ',
                'data-class': mark.attrs.key,
                'style': style
            }),
            0,
        ];
    },

    addCommands() {
        return {
            toggleArckFontFamily: (attributes) => ({ commands }) => {
                return commands.toggleMark(this.name, attributes);
            }
        }
    },

    pasteRules({type}) {
        return [];
    },

    plugins() {
        return [];
    }
});






// export default class ArckFontFamily {
//     name() {
//         return "ArckFontFamily";
//     }

//     schema() {
//         return {
//             attrs: {
//                 key: '',
//             },
//             parseDOM: [
//                 {
//                     tag: "span.arck-font-family",
//                     getAttrs: (dom) => ({
//                         key: dom.getAttribute('data-class')
//                     })
//                 }
//             ],
//             toDOM: (mark) => {
//                 let style = 'font-family: ';
//                 switch (mark.attrs.key) {
//                     case 'alh-arial':
//                         style += 'Arial, Helvetica, sans-serif;';
//                     break;

//                     case 'alh-brush-script-mt':
//                         style += '\'Brush Script MT\', cursive;';
//                     break;

//                     case 'alh-courier-new':
//                         style += '\'Courier New\', Courier, monospace;';
//                     break;

//                     case 'alh-garamond':
//                         style += 'Garamond, serif;';
//                     break;

//                     case 'alh-georgia':
//                         style += 'Georgia, \'Times New Roman\', Times, serif;';
//                     break;

//                     case 'alh-helvetica':
//                         style += 'Helvetica, Arial, sans-serif;';
//                     break;

//                     case 'alh-tahoma':
//                         style += 'Tahoma, Geneva, Verdana, sans-serif;';
//                     break;

//                     case 'alh-times-new-roman':
//                         style += '\'Times New Roman\', Times, serif;';
//                     break;

//                     case 'alh-trebuchet':
//                         style += '\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;';
//                     break;

//                     case 'alh-verdana':
//                         style += 'Verdana, Geneva, Tahoma, sans-serif;';
//                     break;
//                 }

//                 return [
//                     "span",
//                     {
//                         'class': 'arck-font-family ',
//                         'data-class': mark.attrs.key,
//                         'style': style
//                     },
//                     0,
//                 ];
//             }
//         };
//     }

//     commands({type, updateMark, removeMark}) {
//         return attrs => {
//             if (attrs.key) {
//                 return updateMark(type, attrs)
//             }

//             return removeMark(type)
//         }
//     }

//     pasteRules({type}) {
//         return [];
//     }

//     plugins() {
//         return [];
//     }
// }
