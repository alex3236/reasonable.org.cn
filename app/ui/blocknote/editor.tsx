'use client';
import {BlockNoteEditor} from "@blocknote/core";
import {BlockNoteView, Theme, useBlockNote} from "@blocknote/react";
import "@blocknote/react/style.css";

const theme: Theme = {
    colors: {
        editor: {
            text: 'content',
            background: 'transparent'
        }
    },
    fontFamily: '"LXGW WenKai Lite", sans-serif'
}


export default function Editor({initialContent, editable = false}: {initialContent?: any, editable?: boolean}) {    // Stores the editor's contents as HTML.
    // const [html, setHTML] = useState<string>("");

    // Creates a new editor instance.
    const editor: BlockNoteEditor = useBlockNote({
        editable: editable,
        initialContent: initialContent,
    });

    // Renders the editor instance, and its contents as HTML below.
    return (
        <BlockNoteView editor={editor} theme={theme} />
    );
}