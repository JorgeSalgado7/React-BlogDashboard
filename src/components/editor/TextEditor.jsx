import React from 'react';
import Editor from '@jorge-salgado/ckeditor5-next.js';
import { CKEditor } from '@ckeditor/ckeditor5-react'

const TextEditor = ({ data, onChange }) => {
    return (
        <CKEditor
            editor={ Editor }
            data={data}
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                onChange(data)
            }}
        />
    )
}

export default TextEditor