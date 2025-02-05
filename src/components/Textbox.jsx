import { useContext, useEffect } from "react";
import para from "../utils/randomParaGenerator";
import { textContext } from "../context/textContext";

const Textbox = () => {
 const {text,setText,setStart} =  useContext(textContext)
  useEffect(() => {
    if(text) setStart(true)
   },[text])
  return (
    <div className="bg-zinc-700 w-2/3 max-h-max p-8 relative text-3xl/10 font-mono text-zinc-400 rounded-lg">
      <p>
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
        className="absolute top-0 left-0 resize-none p-8 w-full h-full caret-white text-transparent outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default Textbox;
