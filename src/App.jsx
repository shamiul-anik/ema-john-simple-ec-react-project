import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <main className="main">
        <Shop></Shop>
      </main>
    </div>
  )
}

export default App
