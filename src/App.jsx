
import './App.css'
import Header from './components/header/Header'
import Ticket from './components/pages/Ticket'
import Sitebar from './components/sitebar/Sitebar'

function App() {

  return (
    <div className='flex '>
      <Sitebar/>
    <div className="w-full p-[30px]">

    <Header/>
    <Ticket/>
    </div>
    </div>
  )
}

export default App
