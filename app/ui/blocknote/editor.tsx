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


export default function BlockNote({initialContent, editable = false}: { initialContent?: any, editable?: boolean }) {
    const editor: BlockNoteEditor = useBlockNote({
        editable: editable,
        initialContent: initialContent,
    });

    return (
        // <>
            <BlockNoteView editor={editor} theme={theme}/>
        //     <button role="button" onClick={
        //         () => {
        //             console.log(JSON.stringify(editor.topLevelBlocks))
        //         }
        //     }>Button
        //     </button>
        // </>
    );
}