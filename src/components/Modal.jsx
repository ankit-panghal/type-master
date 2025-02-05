import { useContext, useState } from "react"
import { textContext } from "../context/textContext"
import { timerContext } from "../context/timerContext"

const Modal = () => {
    const {text,setText,setStart} = useContext(textContext)
    const {setTime} = useContext(timerContext)
    const [closeModal,setCloseModal] = useState(false)

    let redChars = 0
     document.querySelectorAll('.char').forEach(item => {
        if(item.classList.contains('text-red-500')) redChars+=1
        })

        
    function handleReset(){
       setText('')
       setTime(60)
       setStart(false)
       setCloseModal(true)
    }
  return (
   !closeModal && <div className="fixed left-0 top-0 flex justify-center items-center h-screen w-screen bg-zinc-900/60 z-1000" onClick={() => setCloseModal(true)}>
      <div className="bg-zinc-700 px-12 py-8 rounded-md flex flex-col gap-4" onClick={e => e.stopPropagation()}>
        <div className="font-bold">Typing Test Results</div>
        <div className="flex flex-col">
         <span className="text-base font-semibold">Your WPM : {text.split(' ').length}</span>
         <span className="text-base font-semibold">Your Accuracy : {(((text.length-redChars)/text.length).toFixed(2))*100}%</span>
         </div>
         <button className="bg-sky-500 p-2 text-base cursor-pointer hover:bg-sky-600" onClick={handleReset}>Try Again</button>
      </div>
    </div>
  )
}

export default Modal