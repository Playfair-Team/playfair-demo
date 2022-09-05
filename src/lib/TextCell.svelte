<script lang="ts">
  import { onMount } from "svelte";
  import DeleteButton from '$lib/delete-button/DeleteButton.svelte';
  import CreateNewCell from '$lib/create-new-cell/CreateNewCell.svelte';
  import { cellStore } from '$lib/stores.js'; 

  export let cellAttributes: any;

  let quill = null;
  let editor: any;
  let cellIndex: number;

  // Getting index of current cell in cellStore
  $cellStore.forEach((element, index) => { 
    if (element.id == cellAttributes.id) {
      cellIndex = index;
    }
  });

  export let toolbarOptions = [
    [{ 'font': [] }],
    [{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
    ["bold", "italic", "underline", "strike"],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["clean"]
  ];

  onMount(async () => {
    const { default: Quill } = await import("quill");

    quill = new Quill(editor, {
      modules: {
        toolbar: toolbarOptions
      },
      theme: "snow"
    });
  });

  // TODO: Hide toolbar when quill not focused

  // TODO: Use Jost 300 as default font

  // TODO: Implement image resizing, drag & drop

  // TODO: Implement Latex support
 
</script>

<CreateNewCell hide={true} cellIndex={cellIndex} />
<div class="text-container">
  <div class="editor-wrapper">
    <div bind:this={editor} />
  </div>
  <DeleteButton cellAttributes={cellAttributes} />
</div>

<style>
  @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';

  .editor-wrapper {
    margin-bottom: 40px;
    width: 700px;
  }

  .text-container{
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 725px;
  }
</style>