'use client';
import {BlockNoteEditor} from "@blocknote/core";
import {BlockNoteView, useBlockNote} from "@blocknote/react";
import "@blocknote/react/style.css";
import "./style.css";

export default function BlockNote({initialContent, editable = false}: { initialContent?: any, editable?: boolean }) {
    const editor: BlockNoteEditor = useBlockNote({
        editable: editable,
        initialContent: initialContent,
    });

    return (
        // <>
            <BlockNoteView editor={editor} />
        //     <button role="button" onClick={
        //         () => {
        //             console.log(JSON.stringify(editor.topLevelBlocks))
        //         }
        //     }>Button
        //     </button>
        // </>
    );
}