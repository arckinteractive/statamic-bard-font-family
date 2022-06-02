<template>
    <div class="class-type-wrapper">
        <button
            class="bard-toolbar-button"
            :class="{ 'active': currentKey || showOptions }"
            v-html="button.html"
            v-tooltip="button.text"
            @click="showOptions = !showOptions"
        ></button>
        <div class="class-type-container" v-if="showOptions" v-click-outside="closeClassTypeMenu">
            <button v-for="(type, key) in classTypes" class="class-type-button" @click="setClassType(key)"
                    :class="{ 'active' : key == currentKey }">
                <span :class="getClass(key)">{{ type.name }}</span>
            </button>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
    directives: {
        clickOutside: vClickOutside.directive
    },
    mixins: [BardToolbarButton],
    computed: {
        classTypes() {
            return {
                'alh-arial': {
                    name: 'Arial',
                },
                'alh-brush-script-mt': {
                    name: 'Brush Script MT',
                },
                'alh-courier-new': {
                    name: 'Courier New',
                },
                'alh-garamond': {
                    name: 'Garamond',
                },
                'alh-georgia': {
                    name: 'Georgia',
                },
                'alh-helvetica': {
                    name: 'Helvetica',
                },
                'alh-tahoma': {
                    name: 'Tahoma',
                },
                'alh-times-new-roman': {
                    name: 'Times New Roman',
                },
                'alh-trebuchet': {
                    name: 'Trebuchet MS',
                },
                'alh-verdana': {
                    name: 'Verdana',
                },
            };
        },
        currentKey() {
            return this.editor.getAttributes('ArckFontFamily').key;
        }
    },
    data() {
        return {
            showOptions: false
        };
    },
    methods: {
        closeClassTypeMenu() {
            // close the menu
            this.showOptions = false;
        },
        setClassType(classTypeKey) {
            // update the editor
            this.editor.commands.setFontFamily({
                key: classTypeKey == this.currentKey ? false : classTypeKey
            })
            // hide the menu
            this.showOptions = false;
        },
        getClass(key) {
            const classes = {
                'class-type-label': true,
                'arck-font-family': true,
            };

            classes[key] = true;

            return classes;
        },
    }
};
</script>
<style lang="postcss">
.class-type-wrapper {
    @apply inline-block relative;
}
.class-type-container {
    @apply absolute bg-white border border-gray-300 rounded-sm z-10 divide-y divide-gray-100 shadow-lg;
}
.class-type-button {
    @apply text-left px-3 py-2 w-full hover:bg-gray-100 flex items-center;
}
.class-type-button.active {
    @apply bg-gray-200;
}
.class-type-label {
    @apply block text-left whitespace-nowrap;
}

</style>
