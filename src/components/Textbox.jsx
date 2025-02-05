import { useContext, useEffect } from "react";
import para from "../utils/randomParaGenerator";
import { textContext } from "../context/textContext";

const Textbox = () => {
 const {text,setText,setStart} =  useContext(textContext)
 
  useEffect(() => {
    if(text) setStart(true)
   },[text])

  return (
    <div className="bg-zinc-700 w-full max-h-max relative rounded-lg font-mono text-3xl">
      <p style={{wordSpacing : '0.25em'}} className=" p-8 pointer-events-none whitespace-pre-wrap break-words leading-relaxed tracking-wide">
        {
          para.split("").map((char, index) => {
            let color;
            if (index < text.length) {
                if (text[index] === char) {
                color = "text-green-400"; // Correct character
                } else {
                    color = "text-red-500"; // Incorrect character
                }
            } else {
                color = "text-zinc-400"; // Default text color
            }

          return (
            <span key={index} className={`${color} char`}>{char}</span>
          );
        })}
      </p>

      {/* Hidden textarea for user input */}
      <textarea
        className="absolute inset-0 resize-none p-8 w-full text-3xl caret-white text-transparent outline-none tracking-wide leading-relaxed" style={{wordSpacing : '0.25em'}}
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default Textbox;
