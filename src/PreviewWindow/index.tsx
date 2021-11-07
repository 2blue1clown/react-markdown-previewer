
import "github-markdown-css/github-markdown.css"
import "highlight.js/styles/a11y-light.css"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Toolbar from "../Toolbar"
import { MouseEventHandler } from "react"



interface PreviewWindowProps {
  input: string
  fullscreen?: boolean
  changeSize: MouseEventHandler<HTMLButtonElement>
}

/** Rendered the input markdown string as full html with:
 * - syntax highlighting from both rehype-highlight plugin (make html elements) and highlight.js (.css file)
 * - github styles from remarkGfm (so that we can see tables and strikethroughs etc. )  **/
function PreviewWindow(props: PreviewWindowProps) {

  return (
    <div className='shadow-xl w-full h-full'>
      <Toolbar name="Preview" changeSize={props.changeSize} large={props.fullscreen}/>
      <ReactMarkdown
        className="markdown-body border w-full p-3"
        children={props.input}
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}></ReactMarkdown>
    </div>
  )

}

export default PreviewWindow