<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit';
import { Editor, EditorContent } from '@tiptap/vue-3';
import Image from '@tiptap/extension-image';
import Focus from '@tiptap/extension-focus';
import Dropcursor from '@tiptap/extension-dropcursor';
import TextAlign from '@tiptap/extension-text-align'
const fileList = ref([])
const model = defineModel({
    key: 'content',
    default: '',
})
const editor = new Editor({
    content: model.value,
    onUpdate: () => {
        model.value = editor.getHTML()
    },
    extensions: [
        StarterKit.configure(
            {
                heading: {
                    levels: [1, 2, 3]
                },
            }
        ),
        Image,
        Focus.configure({
            mode: 'all',
            className: 'has-focus'
        }),
        Dropcursor.configure({
            color: '#ff0000',
            width: 2,
        }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        })
    ]
})
const showMediaSection = ref(false)

const { handleFileInput: handleImagesFile, files: blogFile } = useFileStorage({ clearOldFiles: true })
async function save() {
    const data = {
        file: blogFile.value
    }
    let res = await $fetch("/api/admin/blogs/addfileapi", {
        method: "post",
        body: data
    })
    fileList.value.push(res)
    return res
}
async function saveAndUseFile() {
    let fileAddress = await save();
    if (fileAddress) {
        useImage(fileAddress)
    }
}
function useImage(address) {
    editor.chain().focus().setImage({ src: address }).run();
    showMediaSection.value=false
}
function getFileList() {
    $fetch("/api/storage/blogKeys", { method: "get" }).then(res => {
        console.log("res", res);
        if (res) {
            fileList.value = res
            console.log("files : ", fileList.value);
        }
    })
}
onMounted(() => {
    getFileList()
})
</script>

<template>
    <section id="editor-area" v-if="editor" class="container">
        <div id="editor-conent-area">

            <div id="fixed-menu">
                <div class="control-group">
                    <div class="button-group">
                        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                            H1
                        </button>
                        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                            H2
                        </button>
                        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                            H3
                        </button>
                    </div>
                </div>
                <div class="control-group">
                    <div class="button-group">
                        <button @click="editor.chain().focus().toggleBulletList().run()"
                            :class="{ 'is-active': editor.isActive('bulletList') }">
                            Toggle bullet list
                        </button>
                        <button @click="editor.chain().focus().toggleOrderedList().run()"
                            :class="{ 'is-active': editor.isActive('orderedList') }">
                            Toggle ordered list
                        </button>
                        <button @click="editor.chain().focus().splitListItem('listItem').run()"
                            :disabled="!editor.can().splitListItem('listItem')">
                            Split list item
                        </button>
                        <button @click="editor.chain().focus().sinkListItem('listItem').run()"
                            :disabled="!editor.can().sinkListItem('listItem')">
                            Sink list item
                        </button>
                        <button @click="editor.chain().focus().liftListItem('listItem').run()"
                            :disabled="!editor.can().liftListItem('listItem')">
                            Lift list item
                        </button>
                    </div>
                </div>
                <div class="control-group">
                    <div class="button-group">
                        <button @click="editor.chain().focus().setTextAlign('left').run()"
                            :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
                            Left
                        </button>
                        <button @click="editor.chain().focus().setTextAlign('center').run()"
                            :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
                            Center
                        </button>
                        <button @click="editor.chain().focus().setTextAlign('right').run()"
                            :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
                            Right
                        </button>
                        <button @click="editor.chain().focus().setTextAlign('justify').run()"
                            :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
                            Justify
                        </button>
                        <button @click="editor.chain().focus().unsetTextAlign().run()">
                            Unset text align
                        </button>
                    </div>
                </div>
                <div class="control-group">
                    <div class="button-group">
                        <button @click="showMediaSection=!showMediaSection">
                            media
                        </button>
                    </div>
                </div>
            </div>
            <EditorContent :editor="editor" />
        </div>
        <section v-show="showMediaSection" id="mediaArea">
            <div id="newFile">
                <label for="new-image-file">
                    <p>افزودن تصویر :</p>
                    <input type="file" @input="handleImagesFile" name="" id="new-image-file">
                    <img v-for="file in blogFile" :src="file.content" alt="">
                </label>
                <div class="row">
                    <button>ذخیره</button>
                    <button @click="saveAndUseFile()">ذخیره و استفاده</button>
                </div>
            </div>
            <div class="old-media-list">
                <button @click="getFileList">بروزرسانی</button>
                <ul id="file-list">
                    <li v-for="(fileItem, index) in fileList" :key="index">
                        <button @click="useImage(fileItem)">
                            <img :src="fileItem" alt="">
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    </section>
</template>
<style scoped>
.row {
    display: flex;
    width: 100%;
}

.row>* {
    flex: 1;
}

#editor-area {
    width: 100%;
    display: flex;
    overflow: hidden;
}

#editor-conent-area {
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    padding-inline: 16px;
}

#mediaArea {
    width: 300px;
    border-inline-start: 1px solid;
}

#mediaArea>* {
    padding-block: 16px;

}

#newFile {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #000;
    gap: 8px;
}

#newFile>label {
    width: 100%;
    aspect-ratio: 2/1;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #fff;
    cursor: pointer;
}

#newFile>label input[type=file] {
    display: none;
}

#newFile>label img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
}

#file-list {
    display: flex;
    padding: 16px;
    margin: 0;
    flex-wrap: wrap;
    gap: 16px;
}

#file-list>li {
    flex: .5;
    max-width: 50%;
    min-width: 30%;
    list-style: none;
}

#file-list>li>button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#file-list>li>button img {
    width: 100%;
}

#fixed-menu{
    display: flex;
    padding: 8px;
    flex-wrap: wrap;
    gap: 8px;
    border-bottom: 1px solid;
}
#fixed-menu > .control-group > .button-group{
    display: flex;
    gap: 8px;
    background: #c5c5c5;
    padding: 8px;
    border-radius: 8px;
    min-height: 48px;
}
button:not(.button){
    padding: 3px 8px;
    font-size: 16px;
    font-family: Kalameh-Regular;
    height: unset !important;
    border-radius: 8px;
    background: #d8d8d8;
    box-shadow: 0 0 4px #0003;
}
</style>
