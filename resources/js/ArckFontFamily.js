const { Mark } = Statamic.$bard.tiptap.core;

const ArckFontFamily = Mark.create({
    name: 'arckFontFamily',

    addAttributes() {
        return {
            key: {
                default: '',
                parseHtml: element => {element.querySelector('span.arck-font-family').getAttribute('data-class')}
            }
        }
    },

    parseHtml() {
        return [
            {
                tag: 'span.arck-font-family'
            }
        ]
    },

    renderHtml({ HTMLAttributes }) {
        return [
            'span',
            {
                ...HTMLAttributes,
                class: 'arck-font-family',
                'data-class': HTMLAttributes.key,
                'style': this.getStyle(HTMLAttributes.key)
            }
        ]
    },  

    addCommands() {
        return {
            setFontFamily: attributes => ({ chain }) => {
                if (attributes.key) {
                    return chain()
                        .setMark(this.name, attributes)
                        .run()
                }

                return chain()
                    .unsetMark(this.name, { extendEmptyMarkRange: true })
                    .run()
            },
        }
    },

    getStyle(font) {
        const style = 'font-family: '

        switch (font) {
            case 'alh-arial':
                style += 'Arial, Helvetica, sans-serif;'
            break;

            case 'alh-brush-script-mt':
                style += '\'Brush Script MT\', cursive;'
            break;

            case 'alh-courier-new':
                style += '\'Courier New\', Courier, monospace;'
            break;

            case 'alh-garamond':
                style += 'Garamond, serif;'
            break;

            case 'alh-georgia':
                style += 'Georgia, \'Times New Roman\', Times, serif;'
            break;

            case 'alh-helvetica':
                style += 'Helvetica, Arial, sans-serif;'
            break;

            case 'alh-tahoma':
                style += 'Tahoma, Geneva, Verdana, sans-serif;'
            break;

            case 'alh-times-new-roman':
                style += '\'Times New Roman\', Times, serif;'
            break;

            case 'alh-trebuchet':
                style += '\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;'
            break;

            case 'alh-verdana':
            default:
                style += 'Verdana, Geneva, Tahoma, sans-serif;'
            break;
        }

        return style
    }
})

export default ArckFontFamily
