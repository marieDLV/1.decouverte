import Header from './components/Header'
import Footer from './components/Footer'
import TheoryWrapper from './components/theory/TheoryWrapper'
import TaskManager from './components/exercice/TaskManager'
import TaskManagerCorrection from './components/exercice/TaskManager/TaskManagerCorrection'

function App() {

  return (
    <>
      <Header/>
      <TaskManager/>
      <br/>
      <div style={{backgroundColor: 'green'}}>
      <TaskManagerCorrection/>
      </div>
      { /* <TheoryWrapper/>*/ }
      <Footer/>
    </>
  )
}

export default App
