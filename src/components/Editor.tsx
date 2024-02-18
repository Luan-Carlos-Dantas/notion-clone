/* eslint-disable @typescript-eslint/no-unused-vars */
import {  useEditor, EditorContent, FloatingMenu, BubbleMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight'
import html from 'highlight.js/lib/languages/xml'

lowlight.registerLanguage('html', html)

export function Editor(){
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      })],
    content: initialContent,
    editorProps:{
      attributes:{
        class: 'outline-none'
      }
    }
  })

  return(
    <EditorContent className="max-w-[700px] mx-auto pt-16 prose prose-violet" editor={editor}/>

  )
}
