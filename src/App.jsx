import Header from "./components/Header"
import Footer from "./components/Footer"
import TaskManager from "./components/exercice/TaskManager"

import './logic'
import MessageBoard from "./MessageBoard/MessageBoard"

function App() {
  return (
    <>
      <Header/>
      <MessageBoard/>
      {/* <TaskManager/> */}
      {/* <TheoryWrapper/> */}
      <Footer/>
    </>
  )
}

export default App
