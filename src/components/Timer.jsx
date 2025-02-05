import { faClock} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from "react"
import Modal from "./Modal"
import { timerContext } from "../context/timerContext"
import { textContext } from "../context/textContext"
const Timer = () => {
    const {time,setTime} = useContext(timerContext)
    const {start} = useContext(textContext)
    useEffect(() => {
        if (start){ 
            if(time === 0) return
            const timeoutId = setTimeout(() => {
                setTime(prev => prev - 1);
            }, 1000);
    
            return () => clearTimeout(timeoutId); // Cleanup on unmount or re-run
        }
    }, [start, time]); 

  return (
    <div className="text-2xl flex gap-4 items-center">
        <FontAwesomeIcon icon={faClock}/>
      {
       start ? <div><span>{time}</span><span>s</span></div>
       :
       <div>Start typing to begin</div>
    }
   {time === 0 && <Modal/>}
    </div>
  )
}

export default Timer