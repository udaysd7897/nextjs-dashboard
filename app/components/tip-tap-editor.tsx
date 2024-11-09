'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<h1>Hello World</h1> <p>This is a paragraph</p>',
  })

  return <EditorContent editor={editor} />
}
