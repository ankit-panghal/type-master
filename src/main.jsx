
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TimerContextProvider } from './context/timerContext.jsx'
import { TextContextProvider } from './context/textContext.jsx'

createRoot(document.getElementById('root')).render(
    <TextContextProvider>
    <TimerContextProvider>
        <App />
    </TimerContextProvider>
    </TextContextProvider>
)
