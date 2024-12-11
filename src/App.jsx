import Header from "./components/Header"
import Footer from "./components/Footer"
import TaskManager from "./components/exercice/TaskManager"

import './logic'

function App() {
  return (
    <>
      <Header/>
      <TaskManager/>
      {/* <TheoryWrapper/> */}
      <Footer/>
    </>
  )
}

export default App
