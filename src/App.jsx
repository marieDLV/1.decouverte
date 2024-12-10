import Header from './components/Header'
import Footer from './components/Footer'
import TheoryWrapper from './components/theory/TheoryWrapper'
import TaskManager from './components/exercice/TaskManager'

function App() {

  return (
    <>
      <Header/>
      <TaskManager/>
      { /* <TheoryWrapper/>*/ }
      <Footer/>
    </>
  )
}

export default App
