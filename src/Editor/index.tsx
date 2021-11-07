import { FormEventHandler, MouseEventHandler } from "react"
import Toolbar from "../Toolbar"


interface EditorProps {
  input:string,
  handleChange:FormEventHandler<HTMLTextAreaElement>,
  changeSize:MouseEventHandler<HTMLButtonElement>,
  large:boolean;

}

function Editor(props:EditorProps) {

  
  return (
    <div className="w-full h-full">
      <Toolbar name="Editor" large={props.large} changeSize={props.changeSize}/>
      <textarea className="w-full h-full shadow-xl border focus:outline-none p-2"
      value={props.input}
      onInput={props.handleChange} />
    </div>
  )
}

export default Editor