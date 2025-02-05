import { useContext, useEffect } from "react";
import para from "../utils/randomParaGenerator";
import { textContext } from "../context/textContext";

const Textbox = () => {
 const {text,setText,setStart} =  useContext(textContext)
  useEffect(() => {
    if(text) setStart(true)
   },[text])
  return (
    <div className="bg-zinc-700 w-full max-h-max p-8 relative rounded-lg">
      <p style={{wordSpacing : '0.6rem'}} className="text-3xl/12 font-mono text-zinc-400 tracking-wide">
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
        className="absolute top-0 left-0 resize-none p-8 w-full text-3xl/12 h-full tracking-wide caret-white text-transparent outline-none" style={{wordSpacing : '0.6rem'}}
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default Textbox;
