import Textbox from "./components/Textbox"
import Timer from "./components/Timer"

const App = () => {

  return (
    <div className="min-h-screen bg-zinc-800 text-white p-12 flex flex-col items-center gap-12">
      <h1 className="text-4xl">Type Master</h1>
      <Timer />
      <Textbox/>
    </div>
  )
}

export default App